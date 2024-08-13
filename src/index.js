import './index.scss';

const card = document.querySelectorAll(".card");
const link = document.querySelectorAll(".link");

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    card.forEach((card, index) => {
      const title = card.querySelector(".card-type");
      const current = card.querySelector(".current-hours");
      const previous = card.querySelector(".previoud-hours");

      title.textContent = data[index].title;
      current.textContent = data[index].timeframes.weekly.current + "hrs";
      previous.textContent = "Last Week - " + data[index].timeframes.weekly.previous + "hrs"
    })
  })