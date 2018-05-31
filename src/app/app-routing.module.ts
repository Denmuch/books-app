import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import * as page from './pages';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'books/new', pathMatch: 'full'},
      { path: 'books', component: page.BookListComponent },
      { path: 'books/new', component: page.BookComponent },
      { path: '**', component: page.PageNotFoundComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { };