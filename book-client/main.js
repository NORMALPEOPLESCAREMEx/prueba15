const apiUrl = "http://localhost:57871/api/books";

const bookListDiv = document.getElementById("book-list");

const getBooks = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((books) => {
      bookListDiv.innerHTML = books
        .map((book) => {
          return `
          <div class="book">
              <h3>${book.Title}</h3>
              <p>Author: ${book.Author}</p>
              <button class="btn-delete">Delete</button>
          </div>
          `;
        })
        .join("");
    });

    document.querySelectorAll(".book").forEach(book => {

    })
};

getBooks();

const bookForm = document.getElementById("book-form");
const bookTitleInput = document.getElementById("title");
const bookAuthorInput = document.getElementById("author");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(bookForm);

  let data = {};

  for (var pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method: "post",
  })
    .then(getBooks)
    .catch(console.error);
});
