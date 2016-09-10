$(document).ready(function(){
   addClickHandler()
});


function addClickHandler(){
    $('.content').click(function(){
            $(this).addClass('largerDiv');
            $('#box2,#box3, #box4').addClass('smallDiv');
        }
    )
}