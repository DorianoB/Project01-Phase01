document.getElementsByClassName("aboutus").addEventlistener("click");
document.getElementsByClassName("breaky").addEventlistener("click");
document.getElementsByClassName("breaky").addEventlistener("click");
document.getElementsByClassName("lunch").addEventlistener("click");
document.getElementsByClassName("drinks").addEventlistener("click");
document.getElementsByClassName("lopue").addEventlistener("click");
document.getElementsByClassName("fa").addEventlistener("click");
document.getElementById("submit").addEventlistener("click");

const breaky = [
  {
    food: "banana bread",
    items: ["banana", "flour", "eggs"],
    type: "breakfast",
    isVegan: false,
    price: 15,
  },
  {
    food: "breaky roll",
    items: ["eggs", "bacon", "cheese"],
    type: "breakfast",
    isVegan: false,
    price: 15,
  },
  {
    food: "acai bowl",
    items: ["acai", "pineaple", "granola"],
    type: "breakfast",
    isVegan: false,
    price: 15,
  },
];

const lunch = [
  {
    food: "pizza",
    items: ["dough", "tomato", "mushrooms", "vegam mozarella"],
    type: "lunch",
    isVegan: true,
    price: 20,
  },
  {
    food: "chicken curry",
    itmes: ["rice", "currypaste", "chicken"],
    type: "lunch",
    isVegan: false,
    price: 10,
  },
  {
    food: "sourdough sandwich",
    items: ["ham", "cheese", "pumpkin"],
    type: "lunch",
    isVegan: false,
    price: 17.2,
  },
];

const drinks = [
  {
    cafe: "flat white",
    type: ["short", "regular", "large"],
    isVegan: false,
    price: [4.5, 5.5, 6.5],
  },
  {
    cafe: "cappuccino",
    type: ["short", "regular", "large"],
    isVegan: false,
    price: [4.5, 5.5, 6.5],
  },
  {
    cafe: "long black",
    type: ["short", "regular", "large"],
    isVegan: true,
    price: [4.5, 5.5, 6.5],
  },
  {
    extras: {
      milk: ["soya", "almond", "oat"],
    },
  },
];
