$(document).ready(function(){
    initClickHandler();
    createDefaultPageInnerDom()
});

var elementId = ['box1','box2','box3','box4'];

//this function adds a click handler to each main section
function initClickHandler(){
    $('.content').click(function(){
        var clickedDivId = $(this).attr("id");
        if($(this).attr('largeDivClicked')){//when the expanded section gets clicked
            changeClickedDiv(clickedDivId,"toDefault");
            changeNonClickedDiv(clickedDivId,"toDefault");
            $(this).removeAttr("largeDivClicked");
        }else{//when a default sized section gets clicked
            changeClickedDiv(clickedDivId);
            changeNonClickedDiv(clickedDivId);
            $(this).attr({"largeDivClicked":true});
        }
    })
}

//this function changes the clicked section's size
function changeClickedDiv(clickedDivId,state){
    if(state == "toDefault"){//back to default size
        $("#"+clickedDivId).removeClass("largerDiv");
        createDefaultPageInnerDom();
    }else{//to expand the div size
        $("#"+clickedDivId).addClass("largerDiv");
    }
}

//this function changes non-clicked sections
function changeNonClickedDiv(clickedDivId,state){
    for(var i = 0; i < elementId.length; i++){//to select non-clicked sections
       if(clickedDivId != elementId[i]){
           if(state == "toDefault"){//expand shrunk sections back to the default size size
               $("#"+elementId[i]).removeClass("smallDiv");
           }
           else{//shrink sections
               removeDefaultPageInnerDom();
               $("#"+elementId[i]).addClass("smallDiv");
           }
       }
    }
}

function createDefaultPageInnerDom(){
    var box1Content = $('<div>').addClass('defaultPageMaterial').text('JOSHUA BYUN');
    var box2Content = $('<div>').addClass('defaultPageMaterial').text('APPLCATIONS');
    var box3Content = $('<div>').addClass('defaultPageMaterial').text('SKILLS & EXPERIENCE');
    var box4Content = $('<div>').addClass('defaultPageMaterial').text('CONTACT');
    $('#box1').append(box1Content);
    $('#box2').append(box2Content);
    $('#box3').append(box3Content);
    $('#box4').append(box4Content);
}

function removeDefaultPageInnerDom(){
    $('.defaultPageMaterial').addClass('fadeOut');
    // $('.defaultPageMaterial').remove();
}

