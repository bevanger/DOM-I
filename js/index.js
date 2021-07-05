const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Header Section 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar =  document.querySelectorAll('header nav a')
navBar.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index+1}`]
});
navBar.forEach((item) => {
  item.style.color = "green"
});

const ctaH1 = document.querySelector("section div h1")
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector("section div button")
ctaButton.textContent = siteContent.cta.button;

const ctaImgSrc = document.getElementById("cta-img")
ctaImgSrc.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content Section
const topContentH4 = document.querySelectorAll(".top-content h4")
topContentH4[0].textContent = siteContent ["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent ["main-content"]["about-h4"];

const bottomContentH4 = document.querySelectorAll(".bottom-content h4")
bottomContentH4[0].textContent = siteContent ["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent ["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent ["main-content"]["vision-h4"];

const topContent = document.querySelectorAll(".top-content p")
topContent[0].textContent = siteContent ["main-content"]["features-content"];
topContent[1].textContent = siteContent ["main-content"]["about-content"];

const bottomContent = document.querySelectorAll(".bottom-content p")
bottomContent[0].textContent = siteContent ["main-content"]["services-content"];
bottomContent[1].textContent = siteContent ["main-content"]["product-content"];
bottomContent[2].textContent = siteContent ["main-content"]["vision-content"];

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"];

//Contact Section
const contactMain = document.querySelectorAll(".contact p")
contactMain[0].textContent = siteContent["contact"]["address"];
contactMain[1].textContent = siteContent["contact"]["phone"];
contactMain[2].textContent = siteContent["contact"]["email"];

//Footer Section
const footerMain = document.querySelector("footer")
footerMain.textContent = siteContent["footer"]["copyright"]