import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../shared/book.model';
import { BookService } from '../../shared/book.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit, OnDestroy {
    books: Book[];
    private editable: boolean = false;
    private editableBook = null;
    private subscription: Subscription;

    @ViewChild('table') table: ElementRef;

    @HostListener('document:click', ['$event'])
    updateBook(event: Event) {
        if (!this.table.nativeElement.contains(event.target)) {
            if(this.editableBook) {
                this.bookService.updateBook(this.editableBook)
                    .subscribe(() => this.loadBooks() );
            }
            this.editableBook = null;
        }
    }

    constructor(
        private bookService: BookService,
        private router: Router,
    ) {

    }

    ngOnInit() {
        this.loadBooks();
    }
    
    ngOnDestroy() {
        this.unsubscribe();
    }

    edit(book) {
        if (this.editableBook && this.editableBook.id === book.id) {
            return true;
        }
    }

    editBook(book) {
        this.editableBook = book;
    }

    deleteBook(book) {
        this.bookService.deleteBook(book)
            .subscribe(books => {
                this.loadBooks();
            });
    }
 
    private loadBooks() {
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
            });
    }

    private unsubscribe() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}