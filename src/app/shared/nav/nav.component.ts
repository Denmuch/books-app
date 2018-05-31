import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styles: [`
        .nav-collapse.collapse {
            height: auto;
        }
    `]
})

export class NavComponent implements OnInit, OnDestroy {
    booksLength: number = 0;    
    collapse = false;

    private lengthSubscription: Subscription;
    private actionSubscription: Subscription;

    @ViewChild('menu') menu: ElementRef;
        
    @HostListener('document:click', ['$event'])
    updateBook(event: Event) {
        if (!this.menu.nativeElement.contains(event.target)) {
            this.collapse = false;
        }
    }

    constructor(
        private service: BookService,
        private router: Router,
    ) {
        
    }

    ngOnInit() {
        this.getAction();
        this.getLength();
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

    getAction() {
        this.actionSubscription = this.service.getAction().subscribe(result => {
            this.getLength();
        })
    }

    getLength() {
        this.lengthSubscription = this.service.getBooks().subscribe(books => {
            this.booksLength = books.length;
        })
    }

    toggleMenu(): void {
        this.collapse = !this.collapse;
    }

    navigate() {
        this.collapse = false;
    }

    private unsubscribe() {
        if (this.lengthSubscription) {
            this.lengthSubscription.unsubscribe();
            this.lengthSubscription = null;
        }

        if (this.actionSubscription) {
            this.actionSubscription.unsubscribe();
            this.actionSubscription = null;
        }
    }
}