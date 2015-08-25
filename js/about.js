var bio = {
    "about": "I am a graduate of Internet Technology with 1 year commercial experience working as technical specialist for web platforms for Online Learning. For the past few years I've been very interesting in Web Designing and since last 1 year I’ve been working on enhancing my responsive web design, front-end development, Bootstrap and Website Optimization skills.",
    "aboutpic": "Project-four/img/aboutme.png",

    "display": function() {
        var formattedabout = HTMLabout.replace("%data%", "bio.about");
        var formattedaboutpic = HTMLavatar.replace("%data%", "bio.aboutpic");
    }
};

var HTMLaboutStart = '<div class="about"></div>';
var HTMLabout = '<p>%data%</p>';
var HTMLaboutStart = '<div class="avatar"></div>';
var HTMLavatar = '<img src="%data%">';

$("#aboutme").append(HTMLaboutStart);
$(".about").append(formattedabout);
$("#aboutme").append(HTMLaboutStart);
$(".avatar").append(formattedaboutpic);