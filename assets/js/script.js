document.addEventListener("DOMContentLoaded", function(){

    changeNavBG();
    window.addEventListener("scroll", changeNavBG);

    function changeNavBG(){
        
        const header = document.querySelector(".header")
        if(window.scrollY > 10){
            header.classList.add("change-navBg");
        } else {
            header.classList.remove("change-navBg");
        }
    }

});