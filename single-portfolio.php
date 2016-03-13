<?php get_header(); ?>

<div class="main">
  <div class="container">
    <div class="content">
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

        <div class="portfolio-item">
          
          <h2><?php the_title(); ?></h2>
          <?php the_content(); ?>
          <p><?php the_field('short_description'); ?></p>
          <p>Created in week <?php the_field('project_week'); ?></p>
          <?php the_field('view_site'); ?>
          
          <div class="image-showcase">
            <?php while(has_sub_fields('images')): ?>
              <p class="caption">
                <?php the_sub_field('caption'); ?>
              </p>
              
              <?php $image = get_sub_field('image'); ?>
              <!-- <pre><?php print_r($image); ?></pre> -->
              <!-- pre to print on the page -->
              <img src="<?php echo $image["sizes"]["medium"]?>" alt="">
        

      <?php endwhile; // end of the loop. ?>

    </div> <!-- /.content -->

    <?php get_sidebar(); ?>

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>