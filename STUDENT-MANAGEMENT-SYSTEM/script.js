let studentList= JSON.parse(localStorage.getItem("stdInfo")) || [];

let form=document.querySelector("form");
form.onsubmit= (e) =>{e.preventDefault();formSubmit(e); updateCount();}

function StudentObject(name,course,unit,imageUrl,batch){
    this.name=name;
    this.course=course;
    this.unit=unit;
    this.imageUrl=imageUrl;
    this.batch=batch;
}

const formSubmit = (e) => {
    let name=e.target[0].value; //Or// form.stdName.value
    let course=e.target[1].value;
    let unit=e.target[2].value;
    let imageUrl=e.target[3].value;
    let batch=e.target[4].value;
    
    let student= new StudentObject(name,course,unit,imageUrl,batch);

    studentList.push(student);
    localStorage.setItem('stdInfo', JSON.stringify(studentList));
}
