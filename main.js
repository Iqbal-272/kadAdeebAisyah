function isElementInViewport(el) 
{
    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function munculScrollFunction(el, classMuncul) 
{			
    var visible = isElementInViewport(el);
    
    if (visible == true) 
    {
        el.classList.add("t1_muncul");
    }
}


function scroll() 
{
    var ayahMama = document.getElementById("ayahMama");
    munculScrollFunction(ayahMama, "t1_muncul");

    var ayahMama = document.getElementById("adeebAisyah");
    munculScrollFunction(ayahMama, "t1_muncul");
}

window.onscroll = function() { scroll() };



