window.onload = () => {
  const count = parseInt(localStorage.getItem("viewCount") || "0") + 1;
  localStorage.setItem("viewCount", count);
  const counter = document.getElementById("viewCounter");
  if (counter) {
    counter.innerText = `Private View Count: ${count}`;
    counter.classList.remove("hidden");
  }
};
