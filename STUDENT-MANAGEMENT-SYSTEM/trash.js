let array = JSON.parse(localStorage.getItem("remStdInfo")) || [];

/*------ Creating Table According to the Array of Objects -----*/

array.forEach((e) => {
  let tr = document.createElement("tr");

  let name = document.createElement("td");
  name.textContent = e.name;

  let course = document.createElement("td");
  course.textContent = e.course;

  let unit = document.createElement("td");
  unit.textContent = e.unit;

  let imageUrl = document.createElement("td");
  imageUrl.textContent = e.imageUrl;
  imageUrl.style.color = "rgb(255, 0, 55)";

  let batch = document.createElement("td");
  batch.textContent = e.batch;

  tr.append(name, course, unit, imageUrl, batch);
  document.querySelector("tbody").append(tr);
});
document.querySelector("#clear").onclick = function () {
document.querySelector("tbody").innerHTML = null;
localStorage.removeItem("remStdInfo");
};
