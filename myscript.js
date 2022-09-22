const btn = document.querySelector('.btn-toggle');
const popupButton = document.querySelector(".popupForm");
const form = document.querySelector(".bookForm");
const submit = document.querySelector(".submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})
//pop up form via button
popupButton.addEventListener('click', ()=>{
    if (form.style.display === "block"){
        form.style.display = "none";
    }
    else{
        form.style.cssText = "display:block;";
    }
});


let myLibrary = [];

// create a constructor for the book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}


// Add books to the book constructor after the user presses the submit button
submit.addEventListener('click',()=>{
    
    
    addBookToLibrary();

});
function addBookToLibrary() {
  
}
