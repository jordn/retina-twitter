console.log('Running Retina-Twitter extension')
// document.body.style.backgroundColor="red"
function replaceWithBigger() {
  $("img.avatar[src]").each(function() {
    var img = $(this);
    // img.attr('src', img.attr('src').replace("_bigger", "")); //Disables as the biggest images do not keep the square ratio
    img.attr('src', img.attr('src').replace("_normal", "_bigger"));
  });
}

replaceWithBigger();
setInterval( function() {
  replaceWithBigger()
}, 3000);

