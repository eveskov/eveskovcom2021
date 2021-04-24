
const eleventyGoogleFonts = require("eleventy-google-fonts");
const eleventyNavigation = require('@11ty/eleventy-navigation');
const format = require('date-fns/format');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: ['100%', null],
    formats: ["avif", "jpeg", "png", "svg", "png"],
    urlPath : "./src/assets/img/",
    outputDir : "/public/assets/img/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  console.log(metadata);

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {

    // add `date` filter
    eleventyConfig.addFilter('date', function (date, dateFormat) {
      return format(date, dateFormat)
    })

    //sitemap shortcode
    eleventyConfig.addPlugin(sitemap, {
      sitemap: {
        hostname: "https://www.eveskov.com",
      },
    });

    eleventyConfig.addWatchTarget("./src/assets/sass/");
    eleventyConfig.addPassthroughCopy("./src/assets/css/");

    // Copy the `img/` directory
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addPassthroughCopy("./src/assets");

    eleventyConfig.addPassthroughCopy("sitemap");

    //Eleventy Image
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    eleventyConfig.setTemplateFormats([
      "md", "jpg", "png", "webp", "svg", "xml", "txt"
    ]);

    /* PLUGINS */

    //Google fonts
    eleventyConfig.addPlugin(eleventyGoogleFonts);

    //navigation
    eleventyConfig.addPlugin( eleventyNavigation);

    //11ty defaults
    return {
        dir: {
            input: 'src',
            output: 'public'
        },
        passthroughFileCopy: true
    };
  };