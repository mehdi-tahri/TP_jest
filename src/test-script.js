const BookRepository = require('./book.repository');
const db = require('./db');

const repository = new BookRepository(db);
/*
repository.save({
    'id' : 1,
    "name" :"test",
    'price' :6.1,
    "added_at" : '2019-01-01'
});
*/

//console.log(repository.getTotalPrice());
//console.log(db.get('books').map("price").value());
let res = repository.getCountBookAddedByMont("test");
console.log(res);
