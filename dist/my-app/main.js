(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'books/new', pathMatch: 'full' },
                    { path: 'books', component: _pages__WEBPACK_IMPORTED_MODULE_2__["BookListComponent"] },
                    { path: 'books/new', component: _pages__WEBPACK_IMPORTED_MODULE_2__["BookComponent"] },
                    { path: '**', component: _pages__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ].concat(_pages__WEBPACK_IMPORTED_MODULE_9__["COMPONENTS"]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["TextMaskModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            {
                id: 1,
                name: 'Название книги 1',
                author: 'Автор 1',
                year: '1990',
                date: '2018-05-31',
                comment: 'Комментарий',
            },
            {
                id: 2,
                name: 'Название книги 2',
                author: 'Автор 2',
                year: '1921',
                date: '2018-05-31',
                comment: 'Комментарий 2',
            },
            {
                id: 3,
                name: 'Название книги 3',
                author: 'Автор 3',
                year: '1921',
                date: '2018-05-31',
                comment: 'Комментарий 3',
            },
            {
                id: 4,
                name: 'Название книги 4',
                author: 'Автор 4',
                year: '1923',
                date: '2018-05-31',
                comment: 'Комментарий 4',
            }
        ];
        return { books: books, length: books.length };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/pages/book-list/book-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/book-list/book-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"table-responsive\">\n        <table #table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">Название</th>\n                    <th scope=\"col\">Автор</th>\n                    <th scope=\"col\">Год издания</th>\n                    <th scope=\"col\">Дата добавления</th>\n                    <th scope=\"col\">Комментарий</th>\n                    <th scope=\"col\"></th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let book of books;\">\n                    <td>{{book.id}}</td>\n        \n                    <td>\n                        <span *ngIf=\"!edit(book)\">{{book.name}}</span>\n                        <input *ngIf=\"edit(book)\" type=\"text\" [(ngModel)]=\"book.name\" name=\"name\">\n                    </td>\n                    \n                    <td>\n                        <span *ngIf=\"!edit(book)\">{{book.author}}</span>\n                        <input *ngIf=\"edit(book)\" type=\"text\" [(ngModel)]=\"book.author\" name=\"author\">\n                    </td>\n                    <td>\n                        <span *ngIf=\"!edit(book)\">{{book.year}}</span>\n                        <input *ngIf=\"edit(book)\" type=\"text\" [(ngModel)]=\"book.year\" name=\"year\">\n                    </td>\n        \n                    <td>\n                        <span *ngIf=\"!edit(book)\">{{book.date}}</span>\n                        <input *ngIf=\"edit(book)\" type=\"text\" [(ngModel)]=\"book.date\" name=\"date\">\n                    </td>\n        \n                    <td>\n                        <p *ngIf=\"!edit(book)\">{{book.comment}}</p>\n                        <textarea *ngIf=\"edit(book)\" [(ngModel)]=\"book.comment\" name=\"comment\"></textarea>\n                    </td>\n                    <td><button type=\"button\" class=\"btn btn-success\" (click)=\"editBook(book)\"><i class=\"fa fa-edit\"></i></button></td>\n                    <td><button type=\"button\" class=\"btn btn-warning\" (click)=\"deleteBook(book)\"><i class=\"fa fa-minus\"></i></button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/book-list/book-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/book-list/book-list.component.ts ***!
  \********************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.editable = false;
        this.editableBook = null;
    }
    BookListComponent.prototype.updateBook = function (event) {
        var _this = this;
        if (!this.table.nativeElement.contains(event.target)) {
            if (this.editableBook) {
                this.bookService.updateBook(this.editableBook)
                    .subscribe(function () { return _this.loadBooks(); });
            }
            this.editableBook = null;
        }
    };
    BookListComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    BookListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    BookListComponent.prototype.edit = function (book) {
        if (this.editableBook && this.editableBook.id === book.id) {
            return true;
        }
    };
    BookListComponent.prototype.editBook = function (book) {
        this.editableBook = book;
    };
    BookListComponent.prototype.deleteBook = function (book) {
        var _this = this;
        this.bookService.deleteBook(book)
            .subscribe(function (books) {
            _this.loadBooks();
        });
    };
    BookListComponent.prototype.loadBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
        });
    };
    BookListComponent.prototype.unsubscribe = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BookListComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BookListComponent.prototype, "updateBook", null);
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/pages/book-list/book-list.component.html")
        }),
        __metadata("design:paramtypes", [_shared_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/pages/book/book.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/book/book.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #form=\"ngForm\" (ngSubmit)=\"saveBook(form.value)\">\n        <div class=\"d-flex justify-content-center m-5\">\n            <label>Новая книга</label>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label class=\"col-xl-2 col-form-label\">Название</label>\n            <div class=\"col-xl-10\">\n                <input validate #name=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"book.name\" name=\"name\" required>\n            </div>\n            <show-errors [control]=\"name\"></show-errors>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label class=\"col-xl-2 col-form-label\">Автор</label>\n            <div class=\"col-xl-10\">\n                <input validate #author=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n            </div>\n            <show-errors [control]=\"author\"></show-errors>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-xl-2 col-form-label\">Год издательства</label>\n            <div class=\"col-xl-10\">\n                <input validate #year=\"ngModel\" minlength=\"4\" [textMask]=\"{mask: yearMask, guide: false}\" type=\"text\" class=\"form-control\" [(ngModel)]=\"book.year\" name=\"year\" required>\n            </div>\n            <show-errors [control]=\"year\"></show-errors>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-xl-2 col-form-label\">Дата добавления</label>\n            <div class=\"col-xl-10\">\n                <input validate #date=\"ngModel\" [textMask]=\"{mask: dateMask, guide: false}\"  type=\"text\" class=\"form-control\" [(ngModel)]=\"book.date\" name=\"date\" required>\n            </div>  \n            <show-errors [control]=\"date\"></show-errors>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-xl-2 col-form-label\">Отзыв</label>\n            <div class=\"col-xl-10\">\n                <textarea class=\"form-control\" [(ngModel)]=\"book.comment\" name=\"comment\" rows=\"3\" maxlength=\"50\" style=\"resize: none;\"></textarea>\n            </div>\n        </div>\n    \n        <div class=\"d-flex justify-content-center mt-5\">\n            <button [title]=\"buttonTitle\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.valid\">Сохранить</button>\n        </div>\n    </form>            \n</div>"

/***/ }),

/***/ "./src/app/pages/book/book.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/book/book.component.ts ***!
  \**********************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/book.service */ "./src/app/shared/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.yearMask = [/\d/, /\d/, /\d/, /\d/];
        this.dateMask = [/\d/, /\d/, /\d/, /\d/, '-', /[0-1]/, /\d/, '-', /[0-3]/, /\d/];
    }
    Object.defineProperty(BookComponent.prototype, "buttonTitle", {
        get: function () {
            return !this.form.valid ? 'Все поля обязательны для заполнения, кроме отзыва' : '';
        },
        enumerable: true,
        configurable: true
    });
    BookComponent.prototype.ngOnInit = function () {
        this.book = {};
    };
    BookComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    BookComponent.prototype.saveBook = function (book) {
        var _this = this;
        this.subscription = this.bookService.addBook(book)
            .subscribe(function (result) {
            _this.gotoBookList();
        }, function (error) { return alert(error); });
    };
    BookComponent.prototype.gotoBookList = function () {
        this.router.navigate(['/books']);
    };
    BookComponent.prototype.unsubscribe = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], BookComponent.prototype, "form", void 0);
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/pages/book/book.component.html"),
            styles: ["\n        input.ng-invalid.ng-touched {\n            border: 1px solid red;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_shared_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: COMPONENTS, BookComponent, BookListComponent, PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book/book.component */ "./src/app/pages/book/book.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return _book_book_component__WEBPACK_IMPORTED_MODULE_0__["BookComponent"]; });

/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/pages/book-list/book-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__["BookListComponent"]; });

/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/pages/page-not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]; });




var COMPONENTS = [
    _book_book_component__WEBPACK_IMPORTED_MODULE_0__["BookComponent"],
    _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__["BookListComponent"],
    _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"],
];



/***/ }),

/***/ "./src/app/pages/page-not-found.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/page-not-found.component.ts ***!
  \***************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: "\n        <h6>Page not found</h6>\n    "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/book.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/book.service.ts ***!
  \****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.url = 'api/books';
        this.bookSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    BookService.prototype.addBook = function (book) {
        var _this = this;
        return this.http.post(this.url, book, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (book) {
            _this.log("added book with id=" + book.id);
            _this.bookSubject.next();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addBook')));
    };
    BookService.prototype.getBook = function (guid) {
        return this.http.get(this.url + "/" + guid);
    };
    BookService.prototype.getBooks = function () {
        var _this = this;
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (books) { return _this.log('fetched books'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getBooks')));
    };
    BookService.prototype.deleteBook = function (book) {
        var _this = this;
        var id = typeof book === 'number' ? book : book.id;
        var url = this.url + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            _this.log("deleted book id=" + id);
            _this.bookSubject.next();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteBook')));
    };
    BookService.prototype.updateBook = function (book) {
        var _this = this;
        return this.http.put(this.url, book, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated book id=" + book.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updatedBook')));
    };
    BookService.prototype.handleError = function (operation) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error['body'].error + "\"";
            // TODO: better job of transforming error for user consumption
            throw new Error(operation + " failed: " + message);
        };
    };
    BookService.prototype.log = function (message) {
        console.log('BookService: ' + message);
    };
    BookService.prototype.getAction = function () {
        return this.bookSubject.asObservable();
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/shared/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #menu class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <a class=\"navbar-brand\" href routerLink=\"/books/new\"><i class=\"fa fa-book\"></i></a>\n  <button (click)=\"toggleMenu()\" class=\"navbar-toggler\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  \n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{'show': collapse }\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href routerLink=\"/books/new\" (click)=\"navigate()\">Новая книга</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href routerLink=\"/books\" (click)=\"navigate()\">Все книги({{booksLength}})</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "./src/app/shared/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(service, router) {
        this.service = service;
        this.router = router;
        this.booksLength = 0;
        this.collapse = false;
    }
    NavComponent.prototype.updateBook = function (event) {
        if (!this.menu.nativeElement.contains(event.target)) {
            this.collapse = false;
        }
    };
    NavComponent.prototype.ngOnInit = function () {
        this.getAction();
        this.getLength();
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    NavComponent.prototype.getAction = function () {
        var _this = this;
        this.actionSubscription = this.service.getAction().subscribe(function (result) {
            _this.getLength();
        });
    };
    NavComponent.prototype.getLength = function () {
        var _this = this;
        this.lengthSubscription = this.service.getBooks().subscribe(function (books) {
            _this.booksLength = books.length;
        });
    };
    NavComponent.prototype.toggleMenu = function () {
        this.collapse = !this.collapse;
    };
    NavComponent.prototype.navigate = function () {
        this.collapse = false;
    };
    NavComponent.prototype.unsubscribe = function () {
        if (this.lengthSubscription) {
            this.lengthSubscription.unsubscribe();
            this.lengthSubscription = null;
        }
        if (this.actionSubscription) {
            this.actionSubscription.unsubscribe();
            this.actionSubscription = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menu'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], NavComponent.prototype, "updateBook", null);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/nav/nav.component.html"),
            styles: ["\n        .nav-collapse.collapse {\n            height: auto;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
/* harmony import */ var _validation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation.directive */ "./src/app/shared/validation.directive.ts");
/* harmony import */ var _show_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-errors.component */ "./src/app/shared/show-errors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _validation_directive__WEBPACK_IMPORTED_MODULE_6__["ValidationDirecitve"],
                _show_errors_component__WEBPACK_IMPORTED_MODULE_7__["ShowErrorsComponent"],
            ],
            declarations: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _show_errors_component__WEBPACK_IMPORTED_MODULE_7__["ShowErrorsComponent"],
                _validation_directive__WEBPACK_IMPORTED_MODULE_6__["ValidationDirecitve"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/show-errors.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/show-errors.component.ts ***!
  \*************************************************/
/*! exports provided: ShowErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorsComponent", function() { return ShowErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// show-errors.component.ts

var ShowErrorsComponent = /** @class */ (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params) {
        return ShowErrorsComponent_1.errorMessages[type](params);
    };
    ShowErrorsComponent.errorMessages = {
        'required': function () { return 'Поле необходимо для заполнения'; },
        'minlength': function (params) { return 'Длина должна быть не меньше ' + params.requiredLength; },
        'maxlength': function (params) { return 'Длина должна быть не больше' + params.requiredLength; },
        'dateInvalid': function (params) { return params.message; },
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'show-errors',
            template: "\n    <div *ngIf=\"shouldShowErrors()\">\n        <small class=\"col-xl-10 offset-xl-2\" style=\"color: red\" *ngFor=\"let error of listOfErrors()\">{{error}}</small>\n    </div>\n",
            styles: [':host { width: 100%;}']
        })
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
    var ShowErrorsComponent_1;
}());



/***/ }),

/***/ "./src/app/shared/validation.directive.ts":
/*!************************************************!*\
  !*** ./src/app/shared/validation.directive.ts ***!
  \************************************************/
/*! exports provided: ValidationDirecitve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationDirecitve", function() { return ValidationDirecitve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function dateValidator(c) {
    if (c.pristine) {
        return null;
    }
    if ((c.value !== undefined && c.value !== '' && c.value != null)) {
        var month = null;
        var day = null;
        var year = null;
        var currentYear = new Date().getFullYear();
        if (c.value.indexOf('-') > -1) {
            var res = c.value.split("-");
            if (res.length > 1) {
                year = res[0];
                month = res[1];
                day = res[2];
            }
        }
        else {
            if (c.value.length == 8) {
                month = c.value.substring(0, 2);
                day = c.value.substring(2, 4);
                year = c.value.substring(4, 8);
            }
        }
        month = Number(month);
        day = Number(day);
        year = Number(year);
        if (month && (month < 1 || month > 12)) {
            return { 'dateInvalid': { 'message': 'Ошибка в месяце' } };
        }
        if (day && (day < 1 || day > 31 || day.toString() === '00')) {
            return { 'dateInvalid': { 'message': 'Ошибка в дате' } };
        }
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
            return { 'dateInvalid': { 'message': '31-e число не может быть в указанном месяце' } };
        }
        if (month == 2) {
            var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
            if (day > 29 || (day === 29 && !isleap)) {
                return { 'dateInvalid': { 'message': '29 февраля может быть только в високосный год' } };
            }
        }
    }
    return null;
}
var ValidationDirecitve = /** @class */ (function () {
    function ValidationDirecitve() {
    }
    ValidationDirecitve_1 = ValidationDirecitve;
    ValidationDirecitve.prototype.validate = function (control) {
        return dateValidator(control);
    };
    ValidationDirecitve = ValidationDirecitve_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validate]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ValidationDirecitve_1, multi: true }]
        })
    ], ValidationDirecitve);
    return ValidationDirecitve;
    var ValidationDirecitve_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/denismuckaev/books-app/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map