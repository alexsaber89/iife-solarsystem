//1. public property for holding the last modified date
//2. getter/setter for planets
//3. getter/setter for activeSpacecraft
//4. getter/setter for planetsLandedOn

var SolarSystem = (function(){
  var planets = [];
  var activeSpacecraft = [];
  var planetsLandedOn = 0;

  return {
    lastModifiedDate: new Date(),
    getPlanets: function() {
      return planets;
    },
    setPlanets: function(addedPlanet) {
      planets.push(addedPlanet);
    },
    getActiveSpacecraft: function() {
      return activeSpacecraft;
    },
    setActiveSpacecraft: function(newActiveSpacecraft) {
      activeSpacecraft.push(newActiveSpacecraft);
    },
    getPlanetsLandedOn: function() {
      return planetsLandedOn;
    },
    setPlanetsLandedOn: function(numLandedOn) {
      planetsLandedOn = numLandedOn;
    }
  }
})();