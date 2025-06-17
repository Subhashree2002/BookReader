const totalPages = 10; // Update this if you have more pages
let currentPage = 1;

function updatePage() {
  const img = document.getElementById("page-img");
  const pageNumber = document.getElementById("page-number");
  img.src = `pages/page${currentPage}.jpg`;
  pageNumber.textContent = `Page ${currentPage} / ${totalPages}`;
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}

function goToPage() {
  const input = document.getElementById("page-input").value;
  const page = parseInt(input);
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    updatePage();
  } else {
    alert("Invalid page number");
  }
}
