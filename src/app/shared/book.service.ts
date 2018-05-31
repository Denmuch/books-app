import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './book.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable({
    providedIn: 'root',
})
export class BookService {
    private url = 'api/books';
    private bookSubject = new Subject<any>();

    constructor(
        private http: HttpClient,
    ) {

    }

    addBook(book: Book): Observable<Book> {        
        return this.http.post<Book>(this.url, book, httpOptions)
            .pipe(
                tap((book: Book) => { 
                    this.log(`added book with id=${book.id}`);
                    this.bookSubject.next();
            }),
                catchError(this.handleError<Book>('addBook'))
            );
    }

    getBook(guid: number | string): Observable<Book> {
        return this.http.get<Book>(`${this.url}/${guid}`);
    }

    getBooks() {
        return this.http.get<Book[]>(this.url)
            .pipe(
                tap(books => this.log('fetched books')),
                catchError(this.handleError('getBooks'))            
            ) as Observable<Book[]>
    }
    
    deleteBook(book: Book | number): Observable<Book> {
        const id = typeof book === 'number' ? book : book.id;
        const url = `${this.url}/${id}`;

        return this.http.delete<Book>(url, httpOptions)
            .pipe(
                tap(_ => { 
                    this.log(`deleted book id=${id}`);
                    this.bookSubject.next();
                }),
                catchError(this.handleError<Book>('deleteBook'))
            )
    }

    updateBook(book: Book): Observable<any> {
        return this.http.put(this.url, book, httpOptions).pipe(
          tap(_ => this.log(`updated book id=${book.id}`)),
          catchError(this.handleError<any>('updatedBook'))
        );
      }


    private handleError<T> (operation = 'operation') {
        return (error: HttpErrorResponse): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          const message = (error.error instanceof ErrorEvent) ?
            error.error.message :
           `server returned code ${error.status} with body "${error['body'].error}"`;
    
          // TODO: better job of transforming error for user consumption
          throw new Error(`${operation} failed: ${message}`);
        };
    
      }
    
      private log(message: string) {
        console.log('BookService: ' + message);
      }

      getAction(): Observable<any> {
        return this.bookSubject.asObservable();
    }
    
}