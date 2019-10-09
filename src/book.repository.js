class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
	     return this.db.get('books').size().value();
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
	     let res = 0;
	     let prices = this.db.get('books').map('price').value();
       for(let i = 0; i<prices.length; i++){
		       res += prices[i];
	     }
       return res;
    }



    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
      if(typeof bookName != typeof "") throw 'Unable to compute getBookByName for bookName not String';
      let book = this.db.get('books').find({name : bookName}).value();
      if(book != null){
          return book;
      }
      return 'aucun livre pour ce nom';
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont(bookName) {
        if(typeof bookName != typeof "") throw 'Unable to compute getCountBookAddedByMont for bookName not String';
        const books = this.db.get('books').filter({name: bookName}).value();
        if (books.length === 0) {
            throw 'Book doesnt exist';
        }
        const results = [];
        let year;
        let count =1;
        let month;
        let count_cumulative = 0;
        let date='';
        for(let i = 0 ; i<books.length ; i++){
            let book = books[i];
            date = book.added_at.split("-");
            year = date[0];
            month = parseInt(date[1])+1;
            if(results.filter(result => result.year === year && result.month === month).length !== 0){
              let index = results.findIndex(result => result.year === year && result.month === month);
              count_cumulative += 1;
              results[index]["count"] +=1;
              results[index]["count_cumulative"] = count_cumulative;
            }else{
              count_cumulative += 1;
              results.push({ year, month, count, count_cumulative});
            }
        }
        return results;
    }

}

module.exports = BookRepository;
