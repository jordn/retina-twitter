// var avatars = $('img.avatar');
// 'avatars: '+ avatars;
// for (var i = avatars.length - 1; i >= 0; i--) {
//   i;
//   // avatars[i];
// };

// avatars.map( function(avatar) {
//   console.log('unedited: '+ avatar)
//   if (avatar.src !== '') {
//     var src = avatar.src;
//     if (src) {
//       src_bigger = src.replace("_normal", "_bigger");
//       avatar.src = src_bigger;
//       console.log(avatar);
//     }
//   } else {
//     console.log('no src')
//   }
// // })
// $( "img.avatar" ).hover(function() {
//   $(this).attr("src", $(this).attr("src").replace("_normal", "_bigger"));
// });

// $(window).onready(function() {
//   var avatars = $("img.avatar");
  
//   $( "img.avatar" ).hover(function() {
//     $(this).attr("src", $(this).attr("src").replace("_normal", "_bigger"));
//   });
// })
console.log('hi')
document.body.style.backgroundColor="red"


function replaceWithBigger() {
  $("img.avatar[src]").each(function() {
    var img = $(this);
    img.attr('src', img.attr('src').replace("_normal", ""));
    img.attr('src', img.attr('src').replace("_bigger", ""));
  });
}

replaceWithBigger();
setInterval( function() {
  replaceWithBigger()
}, 3000);

