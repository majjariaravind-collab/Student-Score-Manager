class Student{
  constructor(name,marks){
    this.name = name;
    this.marks=marks;
  }
}

let students = JSON.parse(localStorage.getItem('students')) || [];
const submitButton=document.querySelector('.submit')
const nameInput = document.querySelector('.js-name');
const marksInput = document.querySelector('.js-marks');
const studentList = document.querySelector('.js-student-list');
const averageElement = document.querySelector('.js-average');



function renderStudent(){
  studentList.innerHTML = "";

  students.forEach((student)=>{
    const li = document.createElement('li');
    li.textContent = `${student.name} - ${student.marks} marks`;
    studentList.appendChild(li);

  });

  const total = students.reduce((sum,student)=>{
    return sum+ student.marks;
  },0);

  const average = students.length? total/students.length : 0;
  averageElement.textContent=average.toFixed(2);
}

submitButton.addEventListener('click',()=>{
  const name = nameInput.value.trim();
  const marks= Number(marksInput.value);

  if(name === "" || marksInput.value === "" || marks<0 || marks>100 ){
    alert('Please enter a name and marks between 0 and 100.');
    return;
  }



const student = new Student( name,marks);
students.push(student);
localStorage.setItem('students',JSON.stringify(students));
renderStudent();
nameInput.value="";
marksInput.value="";
});
renderStudent();
