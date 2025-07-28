const sheetURL = "https://docs.google.com/spreadsheets/d/e/your_TSV_Link/pub?output=tsv";

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    const rows = data.trim().split("\n").slice(1);
    const bookList = document.getElementById("book-list");

    rows.forEach(row => {
      const [title, cover, pdf, summary, audio, action, price, upi] = row.split("\t");
      const div = document.createElement("div");
      div.className = "book";
      div.innerHTML = `
        <img src="${cover}" alt="${title} cover"/>
        <h2>${title}</h2>
        <p>💰 Price: ₹${price}</p>
        <a href="upi://pay?pa=${upi}&pn=${title}&am=${price}&cu=INR" class="btn">Buy Now</a>
        ${summary ? `<a href="${summary}" class="btn" download>📄 Summary</a>` : ""}
        ${audio ? `<audio controls src="${audio}" style="width: 100%; margin-top: 0.5rem;"></audio>` : ""}
        ${action ? `<p><strong>Action Plan:</strong> ${action}</p>` : ""}
        ${pdf ? `<a href="${pdf}" class="btn" download>📘 Download Book</a>` : ""}
      `;
      bookList.appendChild(div);
    });
  });
