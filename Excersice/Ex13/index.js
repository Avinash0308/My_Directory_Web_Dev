function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewsNumber;
  if(views < 1000){
    viewsNumber = views;
  }
  else if (views < 1000000) {
    viewsNumber = views / 1000 + "K";
  } else {
    viewsNumber = views / 1000000 + "M";
  }
  let html = `<div class="card">
        <div class="image">
          <img src="${thumbnail}" alt=""/>
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewsNumber} views . ${monthsOld} months ago</p>
        </div>
      </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev Video #2",
  "CodeWithHarry",
  "560000",
  7,
  "31:22",
  "image.png"
);
createCard(
  "Introduction to Backend | Sigma Web Dev Video #2",
  "CodeWithHarry",
  "560000",
  7,
  "31:22",
  "image.png"
);
