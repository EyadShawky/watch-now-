let aboutOffset = $('#trending').offset().top;

$(window).scroll(function () {

  let windowScroll = $(window).scrollTop();

  if (windowScroll > aboutOffset) {
    $('#main-nav').css("backgroundColor", "#BFC5D3");
  
    $("#btnUp").fadeIn(500);
  }
  else {
    $('#main-nav').css("backgroundColor", "transparent");
    $("#btnUp").fadeout(500);
  }
})

$("#btnUp").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 100,
    duration: 90000000000000000000000000000000000000000000000000000000000000000000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

// ==========================================

let myHttp = new XMLHttpRequest();
let allPosts;
myHttp.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=1c23afa356fd1e8d6326405a99b9f736");
myHttp.send();


myHttp.addEventListener("readystatechange", function () {
  if(myHttp.readyState == 4 && myHttp.status == 200)
  {
    allPosts = JSON.parse( myHttp.response).results;
    console.log(myHttp.response)
    displayposts();
  }
})



function displayposts() {
  cartoona=``;
  for (let i = 0; i< allPosts.length; i++) {
        cartoona +=` 
        <div data-aos-duration="1200"data-aos="fade-up" class=" text-center col-md-3 mt-4 CA">
        <div class="movie position-relative">
        <div class="w-75 h-auto  text-white">
            <img  alt=... class="img-thumbnail" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}">
            <h3 class="text-deco11 mt-2 p-1">${allPosts[i].title}</h3>
            <div class="vote bg-info p-2 font-weight-bold position-absolute">${allPosts[i].vote_average}</div>
            
        </div>

        </div>
        </div>    `
      }

      document.getElementById("trending").innerHTML = cartoona
}




  
  
  





