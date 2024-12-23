


$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#cro-buttons').fadeIn();
        } else {
            $('#cro-buttons').fadeOut();
        }
    });
    $('#cro-buttons').click(function(){
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});


var wrapper = document.querySelector("#about")

console.log(wrapper)

wrapper.style.height = "200px"

var button = document.querySelector("#more-button")

var overlay = document.querySelector("#overlay-2")

var is_open = false


button.addEventListener('click', function(){
    console.log('hihihi')
    if(is_open)
    {
        is_open = false
        wrapper.style.height = "200px"
        overlay.style.display = 'block'
    } else {
        is_open = true
        wrapper.style.height = "300px"
        overlay.style.display = 'none'
    }
})