// select the pages
var headerPage = document.querySelector('.header');
var aboutMePage = document.querySelector('#about-me-page');
var workIveDonePage = document.querySelector('#Work-ive-done');
var contactMePage = document.querySelector('#Contact-info-page');

// get the buttons
var aboutMeLink = document.getElementById('about-me-link');
var workIveDoneLink = document.getElementById('work-ive-done-link');
var contactMeLink = document.getElementById('contact-info-link')

// start with just header page
function enterPage() {
    headerPage.style.display = "block";
    aboutMePage.style.display = "none";
    workIveDonePage.style.display = "none";
    contactMePage.style.display = "none";

    
};
function aboutMe() {
    headerPage.style.display = "block";
    aboutMePage.style.display = "block";
    workIveDonePage.style.display = "none";
    contactMePage.style.display = "none";
};

function workIveDone() {
    headerPage.style.display = "block";
    aboutMePage.style.display = "none";
    workIveDonePage.style.display = "block";
    contactMePage.style.display = "none";
};

function contactMe() {
    headerPage.style.display = "block";
    aboutMePage.style.display = "none";
    workIveDonePage.style.display = "none";
    contactMePage.style.display = "block";
}

// start on header page only
enterPage();
// about me is clicked, show only about me and header
aboutMeLink.addEventListener('click', aboutMe);
// work ive done is clicked, show only work ive done and header
workIveDoneLink.addEventListener('click', workIveDone);
// contact me is clicked, show only contact info and header
contactMeLink.addEventListener('click', contactMe);