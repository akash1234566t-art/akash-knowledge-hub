const books = [
  {
    title: "Test Book",
    cover: "https://via.placeholder.com/150",
    pdf: "https://example.com/test.pdf",
    price: 10
  }
];

function loadBooks() {
  const container = document.getElementById("bookContainer");
  container.innerHTML = "";
  books.forEach(book => {
    container.innerHTML += `
      <div class="book-card">
        <img src="${book.cover}" alt="${book.title}" />
        <h3>${book.title}</h3>
        <p>₹${book.price}</p>
        <button onclick="buyBook('${book.pdf}')">Buy Now</button>
      </div>
    `;
  });
}

function buyBook(link) {
  alert("Pretend payment done ✅");
  window.open(link, "_blank");
}

loadBooks();
