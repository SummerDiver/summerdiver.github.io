$(function () {
  let tocTrack = function () {

    let scrollTop = $(document).scrollTop();
    let $post = $('#post')
    let heads = $post.children('h1,h2,h3,h4,h5,h6');

    let $currentHeading = $(heads[0]);
    for (let heading of heads) {
      let $heading = $(heading);
      if ($heading.offset().top - scrollTop > 20) {
        break;
      }
      $currentHeading = $heading;
    }

    let anchorName = $currentHeading.attr('id');
    let $toc = $(`.post-toc-link[href="#${anchorName}"]`);
    if (!$toc.hasClass('toc-reached')) {
      $('.toc-reached').removeClass('toc-reached');
      $toc.addClass('toc-reached');
    }
  }

  tocTrack()

  $(window).scroll(tocTrack)
})
