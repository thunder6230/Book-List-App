//Book constructor

class Book {
    constructor(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
    }

}
//UI Constractor
class UI {
    addBookToList(book){
     const list = document.querySelector('#book-list')
     const row = document.createElement('tr')
     row.innerHTML = `
     
     <td>${title.value}</td>
     <td>${author.value}</td>
     <td>${isbn.value}</td>
     <td><a href="#" class="delete">X</a></td>
     
     `
     list.appendChild(row)
    }
    showAlert(message, className){
        const div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form)
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
    clearAll(){
        title.value = ''
        author.value = ''
        isbn.value = ''
    }
    
    
    
}

const bookForm = document.querySelector('#book-form')
const deleteButton = document.querySelector('.delete')


bookForm.addEventListener('submit', () => {
    event.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    const book = new Book (title, author, isbn)
    //UI
    const ui = new UI (book)
    if(title === '' && author === '' && isbn === ''){
        ui.showAlert('Please add a book!', 'error')
    }else{
        ui.addBookToList(book)
        ui.showAlert('Book has been succesfully added!', 'success')
        ui.clearAll()
        document.querySelector('.delete').addEventListener('click', () => {
            event.target.parentElement.parentElement.remove()
            ui.showAlert('Book has been deleted!', 'error')
        })
        
    }
})




