import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Book } from '../../shared/book.model';
import { BookService } from '../../shared/book.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styles: [`
        input.ng-invalid.ng-touched {
            border: 1px solid red;
        }
    `]
})

export class BookComponent implements OnInit, OnDestroy {
    public book: Book;
    public yearMask = [/\d/, /\d/, /\d/, /\d/];
    public dateMask = [/\d/, /\d/, /\d/, /\d/, '-', /[0-1]/, /\d/, '-', /[0-3]/, /\d/];

    private subscription: Subscription;

    get buttonTitle() {
        return !this.form.valid ? 'Все поля обязательны для заполнения, кроме отзыва' : '';
    }

    @ViewChild('form') form: NgForm;

    constructor(
        private bookService: BookService,
        private router: Router,
    ) {
        
    }

    ngOnInit() {
        this.book = {} as Book;
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

    saveBook(book) {
        this.subscription = this.bookService.addBook(book)
            .subscribe(
                result => {
                    this.gotoBookList();
                },
                error => alert(error)
            );
    }

    private gotoBookList() {
        this.router.navigate(['/books']);
    }

    private unsubscribe() {
        if(this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}
