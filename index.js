function fetchBooks() {
  // Send a fetch request to retrieve resources from the server.
  return (
    fetch("https://anapioficeandfire.com/api/books")
      // Initialize a new response object.
      .then(function (response) {
        // Retrieve the response as .json.
        return response.json();
      })
      // Render book titles into the DOM by passing a JSON object to renderBooks().
      .then(function (json) {
        renderBooks(json);
      })
  );
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
