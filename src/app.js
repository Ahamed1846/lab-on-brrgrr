// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
  
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  let lettuce = document.querySelector(".btn-lettuce");
  if (state.Lettuce) {
    lettuce.classList.add("active");
  } else {
    lettuce.classList.remove("active");
  }
  let onions = document.querySelector(".btn-onions");
  if (state.Onions) {
    onions.classList.add("active");
  } else {
    onions.classList.remove("active");
  }
  let tomatoes = document.querySelector(".btn-tomatoes");
  if (state.Tomatoes) {
    tomatoes.classList.add("active");
  } else {
    tomatoes.classList.remove("active");
  }
  let cheese = document.querySelector(".btn-cheese");
  if (state.Cheese) {
    cheese.classList.add("active");
  } else {
    cheese.classList.remove("active");
  }
  let patty = document.querySelector(".btn-patty");
  if (state.Patty) {
    patty.classList.add("active");
  } else {
    patty.classList.remove("active");
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard() {
  let ipatty=document.querySelector('#ipatty')
  if (state.Patty) {
    ipatty.style.display='block';
  }
  else {
    ipatty.style.display='none';
  }
  let icheese=document.querySelector('#icheese')
  if (state.Cheese) {
    icheese.style.display='block';
  }
  else {
    icheese.style.display='none';
  }
  let itomatoes=document.querySelector('#itomatoes')
  if (state.Tomatoes) {
    itomatoes.style.display='block';
  }
  else {
    itomatoes.style.display='none';
  }
  let ionion=document.querySelector('#ionion')
  if (state.Onions) {
    ionion.style.display='block';
  }
  else {
    ionion.style.display='none';
  }
  let ilettuce=document.querySelector('#ilettuce')
  if (state.Lettuce) {
    ilettuce.style.display='block';
  }
  else {
    ilettuce.style.display='none';
  }
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
  var cost =Number(170)
  document.querySelector("span").innerHTML = cost;
  function renderPrice() {
    if (!state.Patty) {
      cost= cost - ingredients.Patty;
      document.querySelector("span").innerHTML = cost;
      ingredients.Patty = 0;
    }
    if (!state.Cheese) {
      cost= cost - ingredients.Cheese;
      document.querySelector("span").innerHTML = cost;
      ingredients.Cheese = 0;
    }
    if (!state.Tomatoes) {
      cost= cost - ingredients.Tomatoes;
      document.querySelector("span").innerHTML = cost;
      ingredients.Tomatoes = 0;
    }
    if (!state.Onions) {
      cost= cost - ingredients.Onions;
      document.querySelector("span").innerHTML = cost;
      ingredients.Onions = 0;
    }
    if (!state.Lettuce) {
      cost= cost - ingredients.Lettuce;
      document.querySelector("span").innerHTML = cost;
      ingredients.Lettuce = 0;
    }
  }