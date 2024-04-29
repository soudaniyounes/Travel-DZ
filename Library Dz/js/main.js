const searchBar = document.querySelector(".search-content");
const searchBtn = document.querySelector(".icons .srch");
const userBtn = document.querySelector(".icons .fa-user");
const loginForm = document.querySelector(".login-form");
const closeBtn = document.querySelector(".close i");
const navbar = document.querySelector(".navbar");
const Bar = document.querySelector(".menu-bar i");

searchBtn.addEventListener("click",()=>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");

});
window.onscroll = ()=>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active"); 
}

userBtn.onclick =()=>{
    loginForm.style.display = "flex"; 
}

closeBtn.onclick = ()=>{
    loginForm.style.display = "none"; 
}

window.onscroll = ()=>{
    loginForm.style.display = "none"; 
}

Bar.onclick = ()=>{

Bar.classList.toggle("fa-times");    
navbar.classList.toggle("active")

}

const home_section = document.querySelector(".home");
/* const bg_array = ["one.jpg","two.jpg","three.jpg"];
let funBack= ()=>{
   
       setInterval(()=>{
            let numberOfback = Math.floor(Math.random() * bg_array.length);
            home_section.style.backgroundImage='url("../images/random/' + bg_array[ numberOfback]+'")';
      
        },30000);
    
} 
funBack();*/
// swiper
var swiper = new Swiper(".review", {
    spaceBeteween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
   
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
           640:{
            slidesPerView:1,
           },
           768: {
            slidesPerView:2,
           },
           1024: {
            slidesPerView:3,
           }}
});


var swiper = new Swiper(".brand", {
    spaceBeteween:10,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
   640:{
    slidesPerView:1,
   },
   768: {
    slidesPerView:2,
   },
   1024: {
    slidesPerView:3,
   }
    }
});