// Book Data
const books = [
  {
    title: "5 Steps to Become a Millionaire",
    cover: "https://i.ibb.co/nZJxTdz/Screenshot-20250728-171827-Chat-GPT.webp",
    pdf: "https://www.dropbox.com/scl/fi/yofyacl1tq192kpxxohtp/5_Steps_to_Become_a_Millionaire-1-1.pdf?rlkey=ztv1w1zbdoilmve1d",
    price: 20
  },
  {
    title: "Sample Test Book",
    cover: "https://via.placeholder.com/150",
    pdf: "https://example.com/test.pdf",
    price: 10
  }
];

// Load books on page
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

// Payment simulation
function buyBook(link) {
  const done = confirm("Pay via UPI, then click OK if payment is done.");
  if (done) {
    window.open(link, "_blank");
  }
}

// Navigation buttons
function navigate(page) {
  alert("Navigate to: " + page);
}

// Run on load
loadBooks();
