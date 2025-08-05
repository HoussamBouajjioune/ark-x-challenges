const books = require("./books.json");

function priceOfBook(bookName) {
  // books.forEach(book => {
  //   if (book.title == bookName) {
  //     console.log(`The price of ${bookName} is ${book.price}`);
  //     return book.price; // Return the price of the book
  //   }
  // });
  // return null; // Return null if the book is not found

  for (let book of books) {
    if (book.title === bookName) {
      console.log(`The price of ${bookName} is ${book.price}`);
      return book.price; // This will return from priceOfBook
    }
  }
  return null; // Book not found
}

function affordableBooks(budget) {
  let affordable = [];
  for (let book of books) {
    if (book.price < budget) {
      console.log(`The book ${book.title} is affordable at ${book.price}`);
      affordable.push(book) // This will return from priceOfBook
    }
  }
  return affordable; // Book not found
}

function findBookByGenre(genre) {
  // write your code here
  let genres = [];
  for (let book of books) {
    for (let gnr of book.genres) {
      if (gnr == genre) {
        console.log(`The book ${book.title} is : ${genre}`);
        genres.push(book) // This will return from priceOfBook
        break; // Exit the inner loop once the genre is found
      }
    }
  }
  return genres; // Book not found
}

function groupByGenre() {
  genres = [];
  books.forEach(book => {
    book.genres.forEach(genre => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  }
  );
  // console.log(`The genres are: ${genres} `);
  genres.forEach(genre => {
    console.log(`The genre is: ${genre}`);
    let booksByGenre = [];
    books.forEach(book => {
      if (book.genres.includes(genre)) {
        booksByGenre.push(book);
      }
    });
    console.log(`The books in the genre ${genre} are: `, booksByGenre);
  });

}

function sortBooksByPrice() {
  // let bookssort = books; // Create a copy of the books array

  let bookssort = [...books]; // Copy array to avoid mutating original
  let n = bookssort.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (bookssort[j].price > bookssort[j + 1].price) {
        // Swap
        let temp = bookssort[j];
        bookssort[j] = bookssort[j + 1];
        bookssort[j + 1] = temp;
      }
    }
  }
  console.log(`The books sorted by price are: `, bookssort);
  return bookssort;

  // bookssort.sort((a, b) => a.price - b.price); // Sort the books by price in ascending order
  // console.log(`The books sorted by price are: `, bookssort);

  // console.log("book sort :", bookssort);
  // return numbers;
}

// (function main() {
//   try {
//     if (priceOfBook("The Alchemist") !== 9.49) {
//       throw new Error("priceOfBook is not working properly.");
//     }
//     if (affordableBooks(10).length !== 6) {
//       throw new Error("affordableBooks is not working properly.");
//     }
//     if (findBookByGenre("Fiction").length !== 7) {
//       throw new Error("findBookByGenre is not working properly.");
//     }
//     if (Object.keys(groupByGenre()).length !== 30) {
//       throw new Error("groupByGenre is not working properly.");
//     }
//     if (sortBooksByPrice()[0].price !== 5.99) {
//       throw new Error("sortBooksByPrice is not working properly.");
//     }
//     console.log("All tests passed successfully.");
//   } catch (error) {
//     console.log(error);
//   }
// })();


let price = priceOfBook("Pride and Prejudice")
console.log(price); // Should print the price of "Pride and Prejudice"

console.log(affordableBooks(10)); // Should print all books with price <= 30

console.log(findBookByGenre("Adventure"))

groupByGenre()

sortBooksByPrice()


