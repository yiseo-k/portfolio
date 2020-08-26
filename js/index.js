let header = document.getElementById("header")
let navBtn = document.querySelector(".nav-btn");

function gnbMenuOn(){
    header.style.left = 0;
    navBtn.classList.add("active");
}

navBtn.addEventListener("click", function(evt){
    if(evt.target.classList.contains("active")){
        header.style.left = '-100%';
        navBtn.classList.remove("active");
    }
});

function moveAboutContainer(event){
    event.preventDefault();

    let aboutArea = document.getElementById("about").offsetTop;
    window.scrollTo({top: aboutArea, behavior: "smooth"});
}



// SKILL
function skillFill() {
    let skillFillBar = document.getElementsByClassName("skill-fill");
    // if ( skillFillBar[0] ) {
    //     skillFillBar.forEach(function () {
    //         var topObject = $(this).offset().top;
    //         var bottomWindow = $(window).scrollTop() + $(window).height();
    //         if ((bottomWindow - 70) > topObject) {
    //             $(this).width($(this).data("fill"));
    //         }
    //     });
    // }
}
skillFill();
// !SKILL