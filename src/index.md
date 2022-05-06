---
title: Evgeni Veskov - UX/UI/Web Designer
layout: layout-default.njk
eleventyNavigation:
    key: home
    order: 100
    title: Projects
tags : ['sitemap']
---

<section class="e-section__main">
    <div class="e-content-holder e-content__left">
        <div class="e-content__text-holder">
            <h2 class="e-page-title e-dark">
            <span class="e-visible-on-tablet-and-desktop">Hey! It's Evgeni.</span>
            <div class="e-visible-on-phone">
                <div>Hey!</div>
                <div>It's Evgeni.</div>
             </div>
            </h2>
            <p>I am a UX/UI Designer, with {{site.yearsOfExperience}}+ years of experience in the field of web and mobile app development and 10+ years of experience as a Graphic Designer. I create digital products and services that are intuitive and easy to use, following best practices. I am currently working as UX/UI Designer at B. Braun Medical.</p>
            <a href="/about" class="e-link" style="margin-top: 1rem;">See more</a>
        </div>
    </div>
    <div class="e-content-holder e-content__left">
        <div class="e-content__text-holder">
            <h3 class="e-gray-2" style="font-size: 2rem;font-weight: 700;">Recent projects</h3>
        </div>
    </div>
    <div class="e-content-holder e-content__with-left-photo e-reverse-mobile">
        <div class="e-content__text-holder">
            <h3 class="e-home-section-title e-visible-on-desktop">GCSE History</h3>
            <p>GCSE History is an educational platform based on the UK educational system, including web app, mobile apps, smart assistants (for Amazon Alexa and Google Assistant), and a marketing landing page.</p>
            <a href="/projects/gcse-history" class="e-btn e-btn__outline">View case study</a>
        </div>
        <div class="e-content__photo-holder">
            <h3 class="e-home-section-title e-visible-on-phone-and-tablet">GCSE History</h3>
            <img src="/assets/img/home-1-tiny.png" alt="" >
        </div>
    </div>
    <div class="e-content-holder e-content__with-right-photo e-reverse-mobile">
        <div class="e-content__text-holder">
            <h3 class="e-home-section-title e-visible-on-desktop">9Sharp</h3>
            <p>A platform where you can show your personal branding and web presence in one organized place.</p>
            <a href="/projects/9sharp" class="e-btn e-btn__outline">View case study</a>
        </div>
        <div class="e-content__photo-holder">
            <h3 class="e-home-section-title e-visible-on-phone-and-tablet">9Sharp</h3>
            <img src="/assets/img/home-9sharp-tiny.png" alt="Screen showing modal for adding social media card" >
        </div>
    </div>
    <div class="e-content-holder e-content__with-left-photo e-reverse-mobile">
        <div class="e-content__text-holder">
            <h3 class="e-home-section-title e-visible-on-desktop">FlashMob</h3>
            <p>Entertainment and social media phone app.</p>
            <a href="/projects/flashmob" class="e-btn e-btn__outline">View case study</a>
        </div>
        <div class="e-content__photo-holder">
            <h3 class="e-home-section-title e-visible-on-phone-and-tablet">FlashMob</h3>
            <img src="/assets/img/home-flashmob-phones-tiny.png" alt="phones with screens for register, login, wall feed and home screen" >
        </div>
    </div>
    <!-- <div class="e-content-holder e-content__left">
        <div class="e-content__text-holder">
            <a href="/projects/" class="e-link">See all projects</a>
        </div>
    </div> -->
    <div class="e-content-holder e-content__center e-content__home-other-projects">
        <div class="e-content__text-holder">
            <h4 class="e-feature-title">Other Projects</h4>
            <ul class="e-other-projects-list">
                {%- for project in otherProjects %}
                    <li>
                        <a href="{{ project.url }}" target="_blank" class="e-other-project__card">
                            <img src="{{ project.imgUrl }}" alt="{{ project.imgAlt }}">
                            <div class="e-other-project__content-holder">
                                <h3 class="e-other-project__title">{{ project.title }}</h3>
                                <div class="e-other-project__descr">{{ project.descr }}</div>
                                <div class="e-other-project__tech">{{ project.tech }}</div>
                            </div>
                        </a>
                    </li>
                {%- endfor %}      
            </ul>
        </div>
    </div>
</section>
