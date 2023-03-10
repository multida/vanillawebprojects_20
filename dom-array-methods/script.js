const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
  //fetch("https://randomuser.me/api").then(res => res.json()).then(data => data.json())
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  console.log(data);

  const user = data.results[0];
  console.log(user);

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  console.log(newUser);

  addData(newUser);
}

//Double everyones money
function doubleMoney() {
  data = data.map((user) => {
    return {
      ...user,
      money: user.money * 2,
    };
  });

  updateDOM();
}

//Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money); //내림차순

  updateDOM();
}

// Filter only millionaires
function filterMillionaires() {
  data = data.filter((user) => {
    return user.money > 1000000;
  });

  updateDOM();
}

//Calculate the total wealth
function reduceWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;

  main.appendChild(wealthEl);
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

//Update DOM
function updateDOM(provideData = data) {
  //Clear main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

  console.log(provideData);

  provideData.forEach((item) => {
    console.log(item);

    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;

    main.appendChild(element);
  });
}

//Format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}

//Event add listener
addUserBtn.addEventListener("click", getRandomUser);

doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", filterMillionaires);
calculateWealthBtn.addEventListener("click", reduceWealth);
