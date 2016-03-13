<?php get_header();  ?>

<main>
  <section class="branding">
    <div class="wrapper">
      <?php $image = get_field('branding_img'); ?>
      <!-- <pre><?php print_r($image); ?></pre> -->
      <img src=" <?php echo $image["sizes"]["medium_large"] ?> " alt="">
      <p><span><?php bloginfo( 'name', 'display' ); ?></span></p>
      <p class="branding-text"> <?php the_field('branding_text'); ?> </p>
    </div>
  </section>

  <a id="showHere"></a>
  
  <section id="portfolio">
    <div class="wrapper">
      <h2> <?php the_field('portfolio_title'); ?> </h2>
      <?php $portfolioQuery = new WP_Query(array
        ( 'posts_per_page' => 3,
          'post_type' => 'portfolio',
          'order' => 'ASC'
          )
          ); ?>
          <?php if($portfolioQuery-> have_posts()): ?>
            <?php while($portfolioQuery-> have_posts()): ?>
              <?php $portfolioQuery-> the_post(); ?>
              <div class="portfolio-item">
                <div class="portfolio-img">
                  <?php while(has_sub_field('images')): ?>
                    <?php $image = get_sub_field('image'); ?>
                    <img src="<?php echo $image['sizes']['large'] ?>" alt="">
                  <?php endwhile; ?>
                </div><!-- portfolio-img -->
                <div class="portfolio-info">
                  <h3><?php the_title() ?></h3>
                  <div class="line"></div>
                  <p class="project-title"> <?php the_field('project_title'); ?> </p>
                  <!-- <p class="project-week">Created in week <?php the_field('project_week'); ?> </p> -->
                  <p class="short-description"><?php the_field('short_description'); ?></p>
                  <div class="technology-used">
                    <?php
                    $posttags = get_the_tags();
                    if ($posttags) {
                     echo '<ul>';
                     foreach($posttags as $tag) {
                       echo '<li>' . $tag->name . ' ' . '//' . '</li>';
                     }
                     echo '</ul>';
                   }
                   ?>
                 </div><!-- //technology used -->
                 <a class="view-live" href="<?php the_field('view_live_link')?>">View Live</a> 
               </div><!-- //portfolio-info -->
             </div><!-- //portfolio-item -->
           <?php endwhile; ?>
           <?php wp_reset_postdata(); ?>
         <?php endif; ?>
     </div><!-- //wrapper -->
   </section><!-- //portfolio -->

   <section id="about">
      <div class="about-me">
        <div class="profile-pic">
          <div class="container">          
            <?php $image = get_field('profile_pic'); ?>
            <img src="<?php echo $image['sizes']['thumbnail'] ?>" alt="">    
            <h2><?php the_field('about-greeting'); ?></h2>
            <p class="tagline"><?php the_field('about_tagline'); ?></p>
            <div class="social-menu">
             <?php wp_nav_menu( array(
               'container' => false,
               'theme_location' => 'contact'
               )); ?>
            </div><!-- social-menu -->
          </div><!-- container -->
        </div><!-- profile-pic -->
        <div class="wrapper">
          <div class="profile-text">
            <div class="about-intro">
              <div class="title">
                <p class="title"> <?php the_field('about_title'); ?> </p>
              </div><!-- title -->
              <div class="text">
                <p> <?php the_field('about-intro') ?> </p>
              </div><!-- text --> 
            </div><!-- about-intro -->
            <div class="about-skills">
              <div class="title">
                <p class="title"> <?php the_field('skills_title') ?> </p>
              </div><!-- title -->
              <div class="text">
              <!-- // loop through rows (parent repeater) -->
                <?php 
                  while(have_rows('skills_list')): the_row();?>
                  <p class="skills"><?php the_sub_field('skill') ?></p>
                  <?php endwhile ?>
              </div> 
            </div>
            <div class="view-resume">
              <div class="title">
              </div>
              <div class="text">
                <a href="<?php the_field('resume_link'); ?>">View My Resume</a>
              </div> 
            </div>
            <!-- <?php the_field('profile_description'); ?> -->
          </div><!-- //profile-text -->
        </div><!-- //wrapper -->
      </div><!-- //about-me -->
  </section>
  
  <section id="contact">
    <div class="wrapper">
      <div class="contact-info">
        <h2> 
          <?php the_field('contact_title') ?> 
        </h2>
        <div class="contact">
          <div class="contact-text">
            <?php the_field('contact_text'); ?>
          </div>
          <div class="form">
            <?php the_field('contact7'); ?>
          </div><!-- form -->
        </div><!-- contact -->
      </div><!-- contact-info -->
    </div><!-- wrapper -->
  </section>
</main>

  <?php get_footer(); ?>