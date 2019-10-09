const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository count', function () {

    test('Count total book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(10)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(10);
    });
});

describe('Book repository total price', function () {

    test('Count total price of books', () => {
       let price = [61];
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
	          map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(price)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(61);
    });
});

describe('Book repository book by name', function () {

    test('return a book with a name in parameters', () => {
       let bookTest = {"books": [
         {
           "id": 1,
           "name": "test",
           "price": 6.1,
           "added_at": "2019-01-01"
         }]};
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(bookTest)

        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName("test")).toBe(bookTest);
    });

    test('return a book with a name in parameters (dont exist in bdd)', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(null)

        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName("Henrry pot de beurre")).toBe('aucun livre pour ce nom');
    });
    test('return a book with a number in parameters', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([])

        };
        const repository = new BookRepository(dbMock);

        expect(function () {repository.getBookByName(3)}).toThrow('Unable to compute getBookByName for bookName not String');
    });
});
