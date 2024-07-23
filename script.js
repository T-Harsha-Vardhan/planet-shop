import planets from "./planets.js";

const img = document.querySelector(".planet-img");
const title = document.querySelector(".title");
const diameter = document.querySelector(".diameter");
const mass = document.querySelector(".mass");
const dfs = document.querySelector(".dfs");
const op = document.querySelector(".op");
const moons = document.querySelector(".moons");

let activePlanet = null;

function setActivePlanet(planetName) {
  if (activePlanet) {
    activePlanet.classList.remove("planet-active");
  }

  activePlanet = Array.from(document.getElementsByClassName("planet")).find(
    (planet) => planet.innerText === planetName
  );

  if (activePlanet) {
    activePlanet.classList.add("planet-active");

    const planetData = planets.find((planet) => planet.name === planetName);

    img.classList.add("img-out");
    setTimeout(() => {
      img.src = planetData.image;
      img.classList.remove("img-out");
    }, 500);

    title.innerText = planetData.name;
    diameter.innerText = `Diameter: ${planetData.diameter}`;
    mass.innerText = `Mass: ${planetData.mass}`;
    dfs.innerText = `Distance from Sun: ${planetData.distanceFromSun}`;
    op.innerText = `Orbital Period: ${planetData.orbitalPeriod}`;
    moons.innerText = `Moons: ${planetData.moons}`;

    setTimeout(() => {
      img.classList.remove("img-in");
    }, 500);
  }
}

setActivePlanet("Mercury");

document.querySelector("aside").addEventListener("click", function (e) {
  if (e.target.classList.contains("planet")) {
    setActivePlanet(e.target.innerText);
  }
});
