// Create a business name generator by combining list of objectives shop name and another workerData

// adjectives:
// Crazy
// Amazing
// Fire

// Shop Name:
// Engine
// Food
// Garments

// Another Word:
// Bros
// Limited
// Hub

let rand1 = Math.floor(Math.random() * 10) % 3;
let rand2 = Math.floor(Math.random() * 10) % 3;
let rand3 = Math.floor(Math.random() * 10) % 3;
console.log(rand1, rand2, rand3);
if (rand1 == 0) {
  if (rand2 == 0) {
    if (rand3 == 0) {
      console.log("CrazyEngineBros");
    } else if (rand3 == 1) {
      console.log("CrazyEngineLimited");
    } else {
      console.log("CrazyEngineHub");
    }
  } else if (rand2 == 1) {
    if (rand3 == 0) {
      console.log("CrazyFoodBros");
    } else if (rand3 == 1) {
      console.log("CrazyFoodLimited");
    } else {
      console.log("CrazyFoodHub");
    }
  } else {
    if (rand3 == 0) {
      console.log("CrazyGarmentsBros");
    } else if (rand3 == 1) {
      console.log("CrazyGarmentsLimited");
    } else {
      console.log("CrazyGarmentsHub");
    }
  }
} else if (rand1 == 1) {
  if (rand2 == 0) {
    if (rand3 == 0) {
      console.log("AmazingEngineBros");
    } else if (rand3 == 1) {
      console.log("AmazingEngineLimited");
    } else {
      console.log("AmazingEngineHub");
    }
  } else if (rand2 == 1) {
    if (rand3 == 0) {
      console.log("AmazingFoodBros");
    } else if (rand3 == 1) {
      console.log("AmazingFoodLimited");
    } else {
      console.log("AmazingFoodHub");
    }
  } else {
    if (rand3 == 0) {
      console.log("AmazingGarmentsBros");
    } else if (rand3 == 1) {
      console.log("AmazingGarmentsLimited");
    } else {
      console.log("AmazingGarmentsHub");
    }
  }
} else {
  if (rand2 == 0) {
    if (rand3 == 0) {
      console.log("FireEngineBros");
    } else if (rand3 == 1) {
      console.log("FireEngineLimited");
    } else {
      console.log("FireEngineHub");
    }
  } else if (rand2 == 1) {
    if (rand3 == 0) {
      console.log("FireFoodBros");
    } else if (rand3 == 1) {
      console.log("FireFoodLimited");
    } else {
      console.log("FireFoodHub");
    }
  } else {
    if (rand3 == 0) {
      console.log("FireGarmentsBros");
    } else if (rand3 == 1) {
      console.log("FireGarmentsLimited");
    } else {
      console.log("FireGarmentsHub");
    }
  }
}
