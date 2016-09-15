$(document).ready(function(){
    initClickHandler()
});

var elementId = ['box1','box2','box3','box4'];

function initClickHandler(){
    $('.content').click(function(){
        var clickedDivId = $(this).attr("id");
        if($(this).attr('largeDivClicked')){//back to default size
            changeClickedDiv(clickedDivId,"toDefault");
            changeNonClickedDiv(clickedDivId,"toDefault");
            $(this).removeAttr("largeDivClicked");
        }else{
            changeClickedDiv(clickedDivId);
            changeNonClickedDiv(clickedDivId);
            $(this).attr({"largeDivClicked":true});
        }
    })
}

function changeClickedDiv(clickedDivId,state){
    if(state == "toDefault"){
        $("#"+clickedDivId).removeClass("largerDiv");
    }else{
        $("#"+clickedDivId).addClass("largerDiv");
    }

}

function changeNonClickedDiv(clickedDivId,state){
    for(var i = 0; i < elementId.length; i++){
       if(clickedDivId != elementId[i]){
           if(state == "toDefault"){
               $("#"+elementId[i]).removeClass("smallDiv");
           }
           else{
               $("#"+elementId[i]).addClass("smallDiv");
           }
       }
    }
}
