jQuery(document).ready(function($) {
  // Collapse and expand the blog posts section.
  var $posts = $(".posts");
  
  if ($posts.length >= 1) {
    $posts
      .after('<div class="posts-toggle">See all</div>')
      .find('li')
      .slice(4)
      .hide();
    
    $('.page').on('click', '.posts-toggle', function(){
      $(this).remove();
      
      var $postlis = $posts.find('li').slice(4),
          i = 0;
      (function() {  
        $($postlis[i++]).show(250, arguments.callee);  
      })();
    });
  }
});