/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables

const sections = document.querySelectorAll(".section") ;
const nav = document.querySelector("#navbar__list");

// Begin Main Functions


// build the nav

const fragment = document.createDocumentFragment();

sections.forEach( (section, index, array) => {
    const sectionID = sections[index].getAttribute("ID");    
    const sectionName = sections[index].getAttribute("data-nav"); 

    const newList = document.createElement("li");
    newList.classList.add("menu__link");

    //newList.innerHTML = "<a href=#" + sectionID + ">" +sectionName;

    newList.textContent = sectionName;

    

    fragment.appendChild(newList);
})

nav.appendChild(fragment);


//section.scrollIntoView({behavior: "smooth"});


const lists = document.querySelectorAll("li") ;

lists.forEach((list, index ) => {

    const listName = document.querySelectorAll('.menu__link')[index].textContent;
    const sectionName = sections[index].getAttribute("data-nav"); 
    console.log(sectionName);
    

    list.addEventListener('click', () => {
        
    })
})

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

