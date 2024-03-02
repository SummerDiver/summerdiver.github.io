$(function () {
  const tocTrack = function () {
    const scrollTop = $(document).scrollTop()
    const $post = $('#post')
    const heads = $post.children('h1,h2,h3,h4,h5,h6')

    let $currentHeading = $(heads[0])
    for (const heading of heads) {
      const $heading = $(heading)
      if ($heading.offset().top - scrollTop > 20) {
        break
      }
      $currentHeading = $heading
    }

    const anchorName = $currentHeading.attr('id')
    const encodedAnchorName = encodeURI(anchorName)
    const $toc = $(`.post-toc-link[href="#${encodedAnchorName}"]`)
    if (!$toc.hasClass('toc-reached')) {
      $('.toc-reached').removeClass('toc-reached')
      $toc.addClass('toc-reached')
    }
  }

  tocTrack()

  $(window).scroll(tocTrack)
})
