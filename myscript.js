const btn = document.querySelector('.btn-toggle');
const popupButton = document.querySelector(".popupForm");
const formDiv = document.querySelector(".bookForm");
const form = document.querySelector(".addBook");
const submit = document.querySelector(".submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read= document.querySelector("#read");
const notRead = document.querySelector("#notRead");
const notChecked = document.querySelector(".notChecked");
const container = document.querySelector(".container");
const delete = document.querySelector(".delete");
// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})
//pop up form via button
popupButton.addEventListener('click', ()=>{
    if (formDiv.style.display === "block"){
        formDiv.style.display = "none";
    }
    else{
        formDiv.style.cssText = "display:block;";
    }
});


let myLibrary = [];

// create a constructor for the book object
function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages`;
    };
    
}
let bookTitle = "!212";
let bookAuthor = "@!221";
let bookPages = 232;
let bookReadStatus = null
let book = new Book(bookTitle.toUpperCase(), bookAuthor.toUpperCase(), bookPages, bookReadStatus)
myLibrary = [{"Title": "!212", "Author":"@!221", "Pages": "122121", "readStatus": "readStatus"}];
displayLibrary(myLibrary,book)
// Add books to the book constructor after the user presses the submit button
submit.addEventListener('click',()=>{
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let bookReadStatus = null
    if (read.checked === true){
        bookReadStatus = read.value;
    }
    else {
        bookReadStatus = notRead.value;
    }
    let book = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus)
    addBookToLibrary(book.title, book.author, book.pages, book.readStatus);
    displayLibrary(myLibrary, book);
    console.log(myLibrary);
    formDiv.style.display = "none";
    form.reset();

});
//adding books to the Library array
function addBookToLibrary(bookTitle, bookAuthor, bookPages, readStatus) {
    myLibrary.push({"Title": bookTitle, "Author":bookAuthor, "Pages": bookPages, "readStatus": readStatus});
}

// display the book from the array in container div
function displayLibrary(myLibrary, book){
    let bookdiv = document.createElement("div");
    let deletebtn = document.createElement("button");
    let bookInfo = document.createElement("div");
    bookInfo.classList.add("bookInfo");
    deletebtn.classList.add("delete");
    deletebtn.textContent = "X"
    
    bookdiv.classList.add("book", (myLibrary.length-1));
    bookInfo.textContent = book.info();
    bookdiv.appendChild(deletebtn);
    bookdiv.appendChild(bookInfo);
    container.appendChild(bookdiv);
}


