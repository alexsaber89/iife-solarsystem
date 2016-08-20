//1. getter/setter for closest star to the sun
//2. getter/setter for age of solar system
//3. getter/setter for known dwarf planets

var SolarSystem = (function(newSolarSystem){
  var closestStar = ["Alpha Centauri"];
  var ageOfSolarSystem = 0;
  var dwarfPlanets = ["Pluto"];

  newSolarSystem.setClosestStarToSun = function(star) {
    closestStar.push(star);
  };
  newSolarSystem.getClosestStarToSun = function() {
    return closestStar;
  };
  newSolarSystem.setAgeOfSolarSystem = function(age) {
    ageOfSolarSystem = age;
  };
  newSolarSystem.getAgeOfSolarSystem = function() {
    return ageOfSolarSystem;
  };
  newSolarSystem.setKnownDwarfPlanets = function(planet) {
    dwarfPlanets.push(planet);
  };
  newSolarSystem.getKnownDwarfPlanets = function() {
    return dwarfPlanets;
  };

  return newSolarSystem;
})(SolarSystem || {});