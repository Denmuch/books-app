import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
            const books = [
                {
                    id: 1,
                    name: 'Название книги 1',
                    author: 'Автор 1',
                    year: '1990',
                    date: '2018-05-01',
                    comment: 'Комментарий',

                },
                {
                    id: 2,
                    name: 'Название книги 2',
                    author: 'Автор 2',
                    year: '1921',
                    date: '2018-05-28',
                    comment: 'Комментарий 2',

                },
                {
                    id: 3,
                    name: 'Название книги 3',
                    author: 'Автор 3',
                    year: '1921',
                    date: '2018-05-29',
                    comment: 'Комментарий 3',

                },
                {
                    id: 4,
                    name: 'Название книги 4',
                    author: 'Автор 4',
                    year: '1923',
                    date: '2018-05-30',
                    comment: 'Комментарий 4',

                },
                {
                    id: 5,
                    name: 'Название книги 5',
                    author: 'Автор 5',
                    year: '1999',
                    date: '2018-05-31',
                    comment: 'Комментарий 5',

                }
            ];

            return {books, length: books.length};
    }
  
}
