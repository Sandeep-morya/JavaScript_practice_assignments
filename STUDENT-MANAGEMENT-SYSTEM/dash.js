let array=JSON.parse(localStorage.getItem('stdInfo'))||[];
    
/*------ Creating Table According to the Array of Objects -----*/

array.forEach((e,i) => {
  let tr = document.createElement("tr");

  let name = document.createElement("td");
  name.textContent = e.name;

  let course = document.createElement("td");
  course.textContent = e.course;
  
  let unit = document.createElement("td");
  unit.textContent = e.unit;

  let imageUrl = document.createElement("td");
  imageUrl.className="point";
  imageUrl.textContent = e.imageUrl;
  imageUrl.style.color = "#00b909";

  let batch = document.createElement("td");
  batch.textContent = e.batch;
  //console.log(e.batch);

  let remove = document.createElement("td");
  remove.className="point";
  remove.textContent = "Remove";
  remove.style.color="rgb(255, 0, 55)";

  remove.addEventListener("click",function(el){
    el.target.parentNode.remove();
    remFromLocal(i);
    updateCount();
  })

  tr.append(name, course, unit, imageUrl, batch, remove);
  document.querySelector("tbody").append(tr);
});

let remFromLocal=(i)=>{
    let trash=JSON.parse(localStorage.getItem("remStdInfo")) || [];
    trash.push(array[i]);
    localStorage.setItem('remStdInfo', JSON.stringify(trash));

    array.splice(i,1);
    localStorage.setItem('stdInfo', JSON.stringify(array));
}

