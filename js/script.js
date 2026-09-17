
// Vertically center the thumbnails
$(function() {
  $(window).load(function() {
    $('.thumbnail_container').each(function() {
      var $this = $(this),
          $thumb = $('.thumbnail', $this), 
          top = ($this.height() - $thumb.height()) / 2;
      $thumb.css('top', ''+top+'px');
    });
  });
});

// Fit large images to the viewport (but not beyond the image's natural size)
$(function() {
  $(window).resize(function() {
    $('.image_large').each(function() {
      var $this = $(this),
          // This is a bit tricksy because the img's available width isn't as
          // much as the total of #main.
          w_view = $this.width($('#main').width()).width(),
          h_view = $(window).height()*0.8,
          w_natural = this.naturalWidth,
          h_natural = this.naturalHeight,
          w_max = Math.min(w_view, w_natural),
          h_max = Math.min(h_view, h_natural),
          aspect_ratio = w_natural / h_natural;
      $this.css({ 'height': '', 'width': '' });
      if ((h_max*aspect_ratio) < w_max)
      {
        $this.height(h_max);
        $this.width(h_max * aspect_ratio);
      }
      else
      {
        $this.width(w_max);
        $this.height(w_max / aspect_ratio);
      } 
    });
  }).load(function() {$(this).resize()});
});

// Replicate anchor functionality, since the usual #anchor doesn't work well on
// not-fully-loaded pages, and doesn't seem to work on some mobile browsers.
$(function() {
  $(window).load(function() {
    if (typeof(anchor) == 'undefined') return;
    var target_top = $(anchor).offset().top;
    // go to that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop:target_top}, 0);
  });
});

// If cookies should be set for this page, set them.
$(function() {
  if (typeof(set_cookies) != 'undefined')
  {
    for (var i = 0; i < set_cookies.length; i++)
    {
      $.cookies.set(set_cookies[i][0], set_cookies[i][1]);
    }
  }
});

// If prev/next picture navigation is required for this page, set the relevant links.
$(function() {
  if (!$('.picture_nav_container') || typeof(all_pictures) == 'undefined') return;

  var category = $.cookies.get('category');
  if (!category) return;

  var url = $.url();
  var curr_pic_path = url.attr('path');
  if (curr_pic_path.slice(-1) == '/') curr_pic_path = curr_pic_path.slice(0, -1);

  var prev = null, next = null, found = false;
  for (var i = 0; i < all_pictures.length; i++)
  {
    var pic_path = all_pictures[i][0],
        pic_cats = all_pictures[i][1];
    
    if (pic_cats.indexOf(category) < 0) continue;
    
    if (pic_path == curr_pic_path)
    {
      found = true;
      continue;
    }
    
    if (found)
    {
      next = pic_path;
      break;
    }
    else
    {
      prev = pic_path;
    }    
  }
  
  var fragment = url.attr('fragment');
  
  if (prev)
  {
    $('.prev_picture')
      .attr('href', prev+'#'+fragment)
      .removeClass('hidden');
  }

  if (next)
  {
    $('.next_picture')
      .attr('href', next+'#'+fragment)
      .removeClass('hidden');
  }
  
  if (next && prev)
  {
    $('.picture_nav_separator').removeClass('hidden');
  }
});
