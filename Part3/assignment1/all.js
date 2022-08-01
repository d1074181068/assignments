const banner = document.querySelector(".banner");
const humberBtn = document.querySelector(".humber_list");
const navBar = document.querySelector(".nav_bar");
const navCloseBtn = document.querySelector(".close_bar");
const actionBtn = document.querySelector(".action_btn");
const actionContent = document.querySelector(".action_content");

banner.addEventListener("click", () => {
  console.dir(banner);
  if (banner.textContent === "Welcome Message") {
    banner.textContent = "Have a Good Time!";
    return;
  }
  banner.textContent = "Welcome Message";
});

humberBtn.addEventListener("click", () => {
  navBar.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
});

actionBtn.addEventListener("click", () => {
  actionContent.classList.toggle("active");
});

function ajax(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

function render(data) {}

ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products").then(
  (response) => {
    console.log(response);
  }
);
