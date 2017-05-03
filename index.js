function dwarfRollCall(dwarves) {
  var newArray = []
  for (var i = 0; i < dwarves.length; i++){
    newArray.push(i+1, ". ", dwarves[i] + " ");
  }
  return newArray.join('');
}

function summonCaptainPlanet(planeteerCalls){
  var newArray = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    newArray.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return newArray;
}

function longPlaneteerCalls(words) {
  var i = 0
  while (i < words.length) {
    if (words[i].length > 4) {
      return true;
    }
    i++;
  }
  return false;
}

function findTheCheese (foods) {
  var cheeses = ["gouda", "camembert", "cheddar"];
  var i = 0;
  while (i < foods.length){
    if (foods[i] === "gouda" || foods[i] == "camembert" || foods[i] == "cheddar"){
      return foods[i];
    }
    i++;
  }
  return "no cheese!";
}
