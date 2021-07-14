import React,{Component,useRef} from 'react'
import './App.css';
class Student
{
constructor(id,name,company,salary)
{
this.id=id;
this.name=name;
this.company=company;
this.salary=salary;
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


function App() {

const students=[];
const placementYear=2021;

students.push(new Student(101,"adidita","grow","20 LPA"));
students.push(new Student(102,"spaon","maq software","7 LPA"));
students.push(new Student(103,"adi","grow","10 LPA"));

const placementDetailRef=useRef();

const selectedStudent={
"name ":"",
"company ":"",
"salary":""
};
const studentHasBeenSelected=function(student)
{

placementDetailRef.current.updateStudent(student);
}

return (
<div>
<h1>thinkging machine ujjian</h1>
<PlacementList students={students} placementYear={placementYear} whenStudentIsSelected={studentHasBeenSelected}/>
<br></br><br></br>
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
{this.state.students.map((student)=>{return(
<li key ={student.id} id={student.id} onClick={this.studentClickedHandler}>{student.name}</li>
)})}
</ul>
)};
}
class PlacementDetail extends React.Component
{
constructor(props)
{
super(props);
this.state={"student":props.student}
}


updateStudent(student)
{
this.setState({"student":student});
}

render(){return(
<div>
Name :<b>{this.state.student.name}</b><br></br>
Company :<b>{this.state.student.company}</b><br></br>
Salary :<b>{this.state.student.salary}</b><br></br>
</div>
)}
}
export default App;