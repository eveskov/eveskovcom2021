---
title: Projects - Evgeni Veskov
layout: layout-default.njk
sitemap:
  ignore: true
# eleventyNavigation:
#     key: home
#     order: 200
#     title: Projects
---

<section class="e-section__main">
    <div class="e-content-holder e-content__center">
        <div class="e-content__text-holder">
            <h2 class="e-page-title">/Projects</h2>
        </div>
        <div class="e-content__text-holder">
            <h3 class="e-section-title">Web Projects</h3>
            <ul class="e-projects-list">
                {%- for project in collections.projects %}
                    <li>
                        <a href="{{ project.url }}" class="e-project-item">
                        {{ project.data.title }}
                        </a>
                    </li>
                {%- endfor %}
            </ul>
            <h4 class="e-feature-title">Other</h4>
            <ul class="e-grid">
                <li><a href="https://atelietoni.com/">Atelie Toni</a></li>            
                <li><a href="http://altherm.bg/en">Altherm Ltd - production of aluminum pressure die castings, aluminum towel rails, expansion vessels and metal shelves</a></li>
                <li><a href="https://www.gcsehistory.com/">GCSE History</a></li>          
                <li><a href="https://www.kinboxbaby.com/">KinBox Baby</a></li>          
                <li><a href="https://www.kinbox.com/">KinBox Magazine</a></li>          
                <li><a href="https://svetlinacentre.com/">Svetlina Centre</a></li>          
            </ul>
            <h3 class="e-section-title">Graphic Design</h3>
            <h4 class="e-feature-title">Books Design</h4>
            <h4 class="e-feature-title">Logo Design</h4>
            <!-- <h4 class="e-feature-title">Packaging Design</h4> -->
        </div>
    </div>
</section>