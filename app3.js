import React,{Component,useRef} from 'react'
import './App.css';

class Student
{
constructor(id,name,company,salary)
{
this.id=id;
this.company=company;
this.salary=salary;
this.name=name;


}

getId()
{
return this.id;
}
getName()
{
return this.name;
}
getCompany()
{
return this.company;
}
getSalary()
{
return this.salary;
}
}

function App()
{
const students=[];
const placementYear=2021;

students.push(new Student(101,"Aaditya","Amazon","20LPA"));
students.push(new Student(102,"Atharva","Grow","30LPA"));
students.push(new Student(103,"Adarsh","Maq","10LPA"));

const placementDetailRef=useRef();
const selectedStudent={
"name":"",
"company":"",
"salary":""

};


const studentHasBeenSelected=function(student)
{
placementDetailRef.current.updateStudent(student);
}



return(
<div>
<h1>Thinking Machines</h1>
<PlacementList students={students} placementYear={placementYear} whenStudentIsSelected={studentHasBeenSelected}
/>

<PlacementDetail student={selectedStudent} ref={placementDetailRef}/>
</div>
);
}
class PlacementList extends React.Component
{
constructor(props)
{
super(props);
this.state={
"students":props.students,
"placementYear":props.placementYear
}
this.onStudentSelected=props.whenStudentIsSelected;
}

studentClickedHandler=(ev)=>{
var student=null;
var studentId=ev.currentTarget.getAttribute("id");
for(var i=0;i<this.state.students.length;i++)
{
if(this.state.students[i].id==studentId)
{
student=this.state.students[i];
break;
}
}
if(student)
{
this.onStudentSelected(student);
}
}





render(){
return(
<ul>
{
this.state.students.map((student)=>{
return(
<li key={student.id} id={student.id} onClick={this.studentClickedHandler}>{student.name}
</li>

)})

}
</ul>
)};

}

class PlacementDetail extends React.Component
{
constructor(props)
{
super(props);
this.state={
"student":props.student
}
}

updateStudent(student)
{
this.setState({
"student":student
});

}

render(){return(
<div>
Name:<b>{this.state.student.name}</b><br></br>
Company:<b>{this.state.student.company}</b><br></br>
Package:<b>{this.state.student.salary}</b><br></br>
</div>
)}
}

export default App;
