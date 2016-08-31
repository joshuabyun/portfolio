/**
 * Created by Gina on 8/28/2016.
 */

$(document).ready(function(){
    mainDiv = new content_mgr_template();
    mainDiv.init('#contentContainer');
    mainDiv.create_content_divs(contentProfile);
});

var mainDiv;

function content_template(parent){
    this.parent = parent;
    this.dom_element;
    this.contentProfile;
    this.mdDivClicked = true;
    this.state = {
        large : 'biggerContent',
        medium : 'content',
        small : 'small'
    };
    this.init = function(contentProfile){
        //expect contentProfile as the actual value of a certain key inside var contentProfile such as about_me, skills, applications, contact_me
        return this.create_main_dom_element(contentProfile);
    };
    this.create_main_dom_element = function(contentProfile){
        this.contentProfile = contentProfile;
        this.dom_element = $('<div>',{
            'class': this.state.medium,
            'id' : this.contentProfile.id,
        }).css({
            'background-image':'url('+this.contentProfile.background+')',
            'background-size' : 'cover',
            'background-repeat' : 'no-repeat'
        });
        //this.click_handler();
        var clickObj = this.click_handler.bind(this);
        this.dom_element.click(clickObj);
        return this.dom_element;
    };
    this.click_handler = function(){
        this.parent.handle_click(this);
    };
    this.mdDivtoSm = function(){
        this.dom_element.remove();

        // this.dom_element.removeClass(this.state.medium);
        // this.dom_element.addClass(this.state.small);
    };
    this.smDivtoMd = function(){
        $('#contentContainer').append(this.dom_element);
        var clickObj = this.click_handler.bind(this);
        this.dom_element.click(clickObj);

        // this.dom_element.removeClass(this.state.small);
        // this.dom_element.addClass(this.state.medium);
    }
    this.mdDivtoLg = function(){
        this.mdDivClicked = false;


        this.dom_element.removeClass(this.state.medium);
        this.dom_element.addClass(this.state.large);
    };
    this.lgDivtoMd = function(){
        this.mdDivClicked = true;


        this.dom_element.removeClass(this.state.large);
        this.dom_element.addClass(this.state.medium);
    };
}
function content_mgr_template(){
    this.dom_element;
    this.contentDivObj = [];
    this.clickedDiv = null;
    this.init = function(dom_element_id){
        this.dom_element = $(dom_element_id);
    };
    this.create_content_divs = function(contentProfile){
        for(var i in contentProfile){
            var obj = new content_template(this);
            this.dom_element.append(obj.init(contentProfile[i]));
            this.contentDivObj.push(obj);//to hold actual objects
        }
        console.log('this.contentDivObj',this.contentDivObj);
    };
    this.handle_click = function(clickedItem){
        console.log('clicked',clickedItem.dom_element);
        var notClickedItems = this.findNonClickedItems(clickedItem);//returned an array of objects
        //clickedItem is an object
        this.callEventsByStatus(clickedItem,notClickedItems);
        //differentiated clicked and not clicked objects
        //need to tell clicked item that it is clicked - set it to true
        //set largeDiv - true
        //when clicked again, set clicked -  false
        //set largeDiv - false
    };
    this.callEventsByStatus = function(clickedItem,notClickedItems){
        if(clickedItem.mdDivClicked){
            clickedItem.mdDivtoLg();
            for(var i = 0; i < notClickedItems.length;i++){
                notClickedItems[i].mdDivtoSm();
            }
        }else{
            clickedItem.lgDivtoMd();
            for(var j = 0; j < notClickedItems.length;j++){
                notClickedItems[j].smDivtoMd();
            }
        }


    };
    this.findNonClickedItems = function(clickedItem){
        var contentArray = [];
        for(var i = 0; i < this.contentDivObj.length;i++){
            if(clickedItem != this.contentDivObj[i]){
                contentArray.push(this.contentDivObj[i]);
            }
        }
        return(contentArray);
    };

}


var contentProfile ={
    about_me : {
        background : 'img/DSC_4294.JPG',
        id : 'about_me',
        text : 'About Me',
        description : 'here is some description1'
    },
    skills :{
        background : 'img/DSC_4294.JPG',
        id : 'skills',
        text : 'skills',
        description : 'here is some description2'
    },
    applications:{
        background : 'img/DSC_4294.JPG',
        id : 'applications',
        text : 'applications',
        description : 'here is some description3'
    },
    contact_me:{
        background : 'img/DSC_4294.JPG',
        id : 'contact_me',
        text : 'contact me',
        description : 'here is some description4'
    }
};