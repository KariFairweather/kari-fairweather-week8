<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link type="images/png" href="images/glasses.png" rel="icon">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<header class="banner">
  <div class="wrapper">
      <!-- <h1 class="hidden">
        <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
          Kari Fairweather
          <!-- <?php bloginfo( 'name' ); ?> -->
       <!--  </a>
      </h1> --> 
      <div class="logo-header">
         <a href="<?php echo home_url( '/' ); ?>">
        <?php $image = get_field('logo'); ?>
        <img class="hidden" src=" <?php echo $image["sizes"]["large"] ?> " alt=""> </a>
      </div>
      <nav>
        <?php wp_nav_menu( array(
        'container' => false,
        'theme_location' => 'primary'
        )); ?>
      </nav>
        <!-- <pre> <?php print_r($image); ?> </pre> -->
  </div> <!-- /.wrapper -->
</header><!--/.header-->

