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

    this.init = function(contentProfile){
        //expect contentProfile as the actual value of a certain key inside var contentProfile such as about_me, skills, applications, contact_me
        return this.create_main_dom_element(contentProfile);
    };
    this.create_main_dom_element = function(contentProfile){
        this.contentProfile = contentProfile;
        this.dom_element = $('<div>',{
            'class': 'content',
            'id' : this.contentProfile.id,
        }).css({
            'background-image':'url('+this.contentProfile.background+')',
            'background-size' : 'cover',
            'background-repeat' : 'no-repeat'
        });
        this.click_handler(this.parent);
        return this.dom_element;
    };
    this.click_handler = function(parent){
        this.dom_element.click(function(){
            parent.handle_click($(this));
        })
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
        console.log('clickedItem',clickedItem);
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