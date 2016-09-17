$(document).ready(function(){
    initClickHandler();
});

var test;
var testParent;
function initClickHandler(){
    $('.contentWrapper').off('click');
    $('.contentWrapper').click(function(){
        console.log('hello');
        test = $(this);
        testParent = $(this).parent();
        $(this).remove();
        test.appendTo($(testParent));
        initClickHandler();
    })
}


function createEnlargedContent(){

}
function appendContent(){
    
}
function removeContent(){

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


