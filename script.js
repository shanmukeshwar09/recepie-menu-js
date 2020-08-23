import { items } from "./menu.js";
const grid = document.querySelector(".recepie-grid");
const buttons = document.querySelectorAll(".button-grid");
let current_items = [];
let current_filter = "all";

document.getElementById("all").classList.add("button-bg");

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log(event.target.id);
    current_items = [];
    grid.innerHTML = "";

    document.getElementById(current_filter).classList.remove("button-bg");
    switch (event.target.id) {
      case "all":
        current_items.push(...items);
        current_filter = event.target.id;
        create_item();
        break;
      case "breakfast":
        current_items = items.filter(
          (item) => item.filter_type === "breakfast"
        );
        current_filter = event.target.id;
        create_item();
        break;
      case "lunch":
        current_items = items.filter((item) => item.filter_type === "lunch");
        current_filter = event.target.id;
        create_item();
        break;
      case "dinner":
        current_items = items.filter((item) => item.filter_type === "dinner");
        current_filter = event.target.id;
        create_item();
        break;
      case "deserts":
        current_items = items.filter((item) => item.filter_type === "deserts");
        current_filter = event.target.id;
        create_item();
        break;

      default:
        break;
    }
    document.getElementById(event.target.id).classList.add("button-bg");
  });
});

function create_item() {
  current_items.forEach((element) => {
    const recepie = document.createElement("div");
    const image = document.createElement("img");
    const content = document.createElement("div");
    const header_div = document.createElement("div");
    const content_divider = document.createElement("div");
    const des = document.createElement("div");
    const title = document.createElement("div");
    const price = document.createElement("div");

    image.src = element.image;

    des.innerHTML = element.description;
    des.classList.add("des");

    content_divider.classList.add("content-divider");

    title.innerHTML = element.title;
    price.innerHTML = element.price;
    header_div.append(title, price);
    header_div.classList.add("header-div");

    content.append(header_div, content_divider, des);
    content.classList.add("content");

    image.classList.add("img");

    recepie.append(image, content);
    recepie.classList.add("recepie");

    grid.appendChild(recepie);
  });
}
current_items.push(...items);
create_item();
