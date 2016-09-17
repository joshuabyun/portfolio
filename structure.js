$(document).ready(function(){
    initClickHandler();
});

function initClickHandler(){
    $('.content').click(function(){
        var largeDiv = $(this);
        var largeDivClass = largeDiv.attr('id');

        var smallDiv = $('.content:not(#' + largeDivClass + ')');

        largeDiv.addClass('largerDiv');

        smallDiv.each(function() {
            $(this).animate({
                opacity: 0
            }, 500, function () {
                $(this).css('display', 'none');
            });
        });
    });
}

function changeDivSize(){
    var largeDiv = $(this);
    var smallDiv = $('.content :not(this)');
    console.log('largeDiv' , largeDiv);
    console.log('smallDiv' ,  smallDiv);
}

function enlargeDiv(parent){
    $(parent).addClass('largerDiv');
}
function createEnlargedContent(parent){

}
function appendContent(){

}

//document load,                                -ok
//create 4 main sections                        -ok
    //create inner content for all sections
    //insert into each section
//add click handlers
//upon click, change sizes
//the clicked section enlarges to the full size                         //the non-clicked sections shrinks/dissapears
    //the enlarged section removes all content inside                       //the sections removes inner contents and gets removed
    //when emptied, add contents for bigger div
    //the content includes close button.
    //the close button will shrink the div to normal size when clicked      //the sections will be enlarged
                                                                            //the items will be appended


