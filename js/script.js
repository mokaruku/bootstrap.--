$('#sk-header-nav .nav-link').on('click', e => {
  e.preventDefault()//クリックしたときにすぐ飛ばないようにする
  console.log(e)
  const hash = e.target.hash // #要素のID
  console.log($(hash).offset().top) // $('#author')
  $('html').animate({
    scrollTop: $(hash).offset().top - 80
  }, 300)
})

$('#year').text(new Date().getFullYear())
// document.querySelector('#year').textContent()