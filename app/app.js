
const bookForm = document.querySelector('.book-form')




function Book(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn

}

function UI(){

}

        
    


UI.prototype.addBookToList = function(book){
    const list = document.querySelector('#book-list')
    //create tr element
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)
    list.addEventListener('click', function(){
        if(event.target.classList.contains('delete')){
            event.target.parentElement.parentElement.remove()
        }
    })
}

bookForm.addEventListener('submit', function(){
    event.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    
    //Instantiate book
    const book = new Book (title, author, isbn)
    //Instantiate UI
    const ui = new UI()
    
    //add book to list
    ui.addBookToList(book)
    
    
    
})