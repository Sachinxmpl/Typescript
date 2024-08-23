interface LibraryItem{
    title : string , 
    borrow() : void 
    returnBook : () => void 
}



class Book implements LibraryItem{
    protected libraryHead : string = ""

    constructor(
            public title : string ,
            public author : string , 
            private isbn : string ,
            public isAvailable : boolean  = true    
    ){

    }

    set setHead(head : string ){
        this.libraryHead = head
    }

    borrow(){
        if(this.isAvailable){
            this.isAvailable = false 
            console.log("book has been borrowed")
        }
    }

    returnBook= () =>{
            if(this.isAvailable){
                this.isAvailable = true 
                console.log("Book returned")
            }
            else{
                console.log("book not available")
            }
    }

}


class Member{
    public borrowedBooks : Book[] = []
    constructor(
        public name : string , 
        public  memberId : string ,
    ){
    }

    borrowBook(book: Book) {
        if (book.isAvailable) {
            book.borrow();
            this.borrowedBooks.push(book);
        } else {
            console.log(`${book.title} is not available for borrowing.`);
        }
    }

    returnBook(book: Book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`${book.title} was not borrowed by ${this.name}.`);
        }
    }

}



class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    constructor(public name: string) {}

    addBook(book: Book) {
        this.books.push(book);
        console.log(`Book titled '${book.title}' added to the library.`);
    }

    removeBook(isbn: string) {
        this.books = this.books.filter(book => book.isbn !== isbn);
        console.log(`Book with ISBN '${isbn}' removed from the library.`);
    }

    registerMember(member: Member) {
        this.members.push(member);
        console.log(`Member named '${member.name}' registered.`);
    }

    lendBook(isbn: string, memberId: string) {
        const book = this.books.find(book => book.isbn === isbn);
        const member = this.members.find(member => member.memberId === memberId);

        if (book && member) {
            member.borrowBook(book);
        } else {
            console.log(`Cannot lend book. Either the book or the member was not found.`);
        }
    }

    returnBook(isbn: string, memberId: string) {
        const book = this.books.find(book => book.isbn === isbn);
        const member = this.members.find(member => member.memberId === memberId);

        if (book && member) {
            member.returnBook(book);
        } else {
            console.log(`Cannot return book. Either the book or the member was not found.`);
        }
    }

    getAvailableBooks(): Book[] {
        return this.books.filter(book => book.isAvailable);
    }
}


const library = new Library("City Library");

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456789");
const book2 = new Book("1984", "George Orwell", "987654321");

const member1 = new Member("Alice", "M001");

library.addBook(book1);
library.addBook(book2);
library.registerMember(member1);

library.lendBook("123456789", "M001"); // Alice borrows "The Great Gatsby"
library.returnBook("123456789", "M001"); // Alice returns "The Great Gatsby"
