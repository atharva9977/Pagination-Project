import React from 'react'
import processloading from './processloading.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

const addPlacement=(student)=>{
var promise=new Promise((resolve)=>{
var dataString=`id=${student.id}&name=${encodeURIComponent(student.name)}&placementType=${student.placementType}&companyName=${encodeURIComponent(student.companyName)}&salary=${student.salary}&salaryType=${student.salaryType}`;


fetch("/addPlacement",{
"method":"POST",
"headers":{
"Content-Type":"application/x-www-form-urlencoded"
},
"body":dataString

}).then((response)=>{
return response.json();
}).then((responseJSON)=>{
resolve(responseJSON);
});

});
return promise;

}

const getStudents=()=>{
const promise=new Promise((resolve)=>{
fetch("/students").then((response)=>{
return response.json();
}).then((students)=>{resolve(students);});

});
return promise;

}


const AppExample17=()=>{

const[students,setStudents]=React.useState([]);
const[activeMode,setActiveMode]=React.useState("view");

const[selectedStudent,setSelectedStudent]=React.useState(null);

React.useEffect(()=>{
const promise=getStudents();
promise.then((student)=>{
setStudents(student);
});

},[]);

const onToolBarItemSelected=function(item){
if(item==="add") setActiveMode("add");
if(item==="cancel")setActiveMode("view");
}


const onStudentAdded=(student)=>{
if(student.placementType==="F") student.placementType="Full time";

else if(student.placementType==="I") student.placementType="Internship";

if(student.salaryType==="Y")
{
if(student.salary>99000)
{
student.salary=(student.salary/100000)+" Lac Per Annum";
}
if(student.salary<99000)
{
student.salary=student.salary+" Per Month";
}
}
students.push(student);
}
const setViewMode=()=>{
setActiveMode("view");
}

const showEditForm=(studentId)=>{



alert(`${studentId} recieved for editing`);

var e=0;
while(e<students.length)
{
if(students[e].id==studentId)
{
setSelectedStudent(students[e]);
break;
}
e++;
}
setActiveMode("edit");

}

const showDeleteForm=(studentId)=>{
alert(`${studentId} recieved for deleting`);
}

const onStudentUpdated=(student)=>{

}
return(
<div>
<h1>Thinking Machines</h1>
<ToolBar mode={activeMode} onItemSelected={onToolBarItemSelected}/>
{activeMode==="view" && <StudentsViewComponent students={students} onEdit={showEditForm} onDelete={showDeleteForm}/>}
{activeMode==="add" && <StudentsAddComponent onStudentAdded={onStudentAdded} onDismiss={setViewMode}/>}
{activeMode==="edit" && <StudentsEditComponent onStudentUpdated={onStudentUpdated} onDismiss={setViewMode} student={selectedStudent}/>}
</div>
)
}

const ToolBar=({mode,onItemSelected})=>{
const takeAction=(ev)=>{
onItemSelected(ev.currentTarget.getAttribute("target_action"));
}

return(
<div>
<hr/>
{mode==="view" && <button type='button' onClick={takeAction} target_action="add">Add</button>}
{mode==="add" && <button type='button' onClick={takeAction} target_action="cancel">Cancel</button>}
&nbsp;.....more item
<hr/>
</div>
)
}




const StudentsViewComponent=({students,onEdit,onDelete})=>{

const iconSelected=(ev)=>{

//alert('icon clicked');
//alert(ev.currentTarget.id);

var operation=ev.currentTarget.id.substring(0,1);
var studentId=parseInt(ev.currentTarget.id.substring(1));

if(operation=='D')
{
//alert(`student with id ${studentId} to be deleted`);
onDelete(studentId);
}
else if(operation=='E')
{
//alert(`student with id ${studentId} to be edited`);
onEdit(studentId);

}


}

return(
<div><hr/>
<h1>Students Details</h1>
{
students.map((student)=>{
return(
<div key={student.id}>
Name    : {student.name}<br/>
company :{student.companyName} ({student.placementType})<br/>
Salary  :{student.salary}
&nbsp;&nbsp;&nbsp;
<FontAwesomeIcon icon={faEdit} style={{'cursor':'pointer'}} onClick={iconSelected} id={'E'+ student.id}/>
&nbsp;&nbsp;&nbsp;
<FontAwesomeIcon icon={faTrash} style={{'cursor':'pointer'}} onClick={iconSelected} id={'D'+ student.id}/>



<br/>
<hr/>
</div>
)

})

}

</div>
)
} 

const StudentsEditComponent=({student,onStudentUpdated,onDismiss})=>{




return(

<div>
student name : {student.name}
</div>
)
}

const StudentsAddComponent=({onStudentAdded,onDismiss})=>{

const[displayWhat,setDisplayWhat]=React.useState("formSection");

const[id,setId]=React.useState("");
const[idError,setIdError]=React.useState("");


const[name,setName]=React.useState("");
const[nameError,setNameError]=React.useState("");




const[companyName,setCompanyName]=React.useState("");
const[companyNameError,setCompanyNameError]=React.useState("");




const[salary,setSalary]=React.useState("");
const[salaryError,setSalaryError]=React.useState("");



const[salaryType,setSalaryType]=React.useState("");

const[fullTimeChecked,setFullTimeChecked]=React.useState("");
const[internshipChecked,setInternshipChecked]=React.useState("");
const[placementType,setPlacementType]=React.useState("");

const[formError,setFormError]=React.useState("");

const idChanged=(ev)=>{
setId(ev.target.value);
}

const nameChanged=(ev)=>{
setName(ev.target.value);
}

const companyNameChanged=(ev)=>{
setCompanyName(ev.target.value);
}

const salaryChanged=(ev)=>{
setSalary(ev.target.value);
}

const salaryTypeChanged=(ev)=>{
setSalaryType(ev.target.value);
}

const placementTypeChanged=(ev)=>{

if(ev.target.value==="F" && ev.target.checked)
{
setFullTimeChecked("checked");
setInternshipChecked("");
setPlacementType("F");
}
if(ev.target.value==="I" && ev.target.checked)
{
setFullTimeChecked("");
setInternshipChecked("checked");
setPlacementType("I");
}
}

const clearAllError=()=>{
setFormError("");
setIdError("");
setNameError("");
setCompanyNameError("");
setSalaryError("");
}

const clearForm=()=>{

setId(0);
setName("");
setPlacementType("F");
setFullTimeChecked("checked");
setInternshipChecked("");
setCompanyName("");
setSalary(0);
setSalaryType("Y");
}


const yesHandler=()=>{
setDisplayWhat("formSection");
}
const noHandler=()=>{
onDismiss();
}



const addClickedHandler=()=>{
clearAllError();
//alert(id+","+name+","+salary+","+companyName+","+placementType+","+salaryType);
var hasErrors=false;

//validation starts here.

if(id==="" || id<0) 
{
setIdError("*");
hasErrors=true;
}
if(name==="") 
{
setNameError("*");
hasErrors=true;
}
if(companyName==="") 
{
setCompanyNameError("*");
hasErrors=true;
}
if(salary==="" || salary<=0) 
{
setSalaryError("*");
hasErrors=true
}
//validation ends here


if(hasErrors===true) return;

var student={
"id":id,
"name":name,
"placementType":placementType,
"companyName":companyName,
"salary":salary,
"salaryType":salaryType
};

setDisplayWhat("processingSection");

addPlacement(student).then((responseJSON)=>{
if(responseJSON.success===true)
{
onStudentAdded(student);
clearForm();
setDisplayWhat("addMoreSection");
}
else
{
setFormError(responseJSON.error);
setDisplayWhat("formSection");
}

});
}

if(displayWhat==="addMoreSection") return(
<div>
Want to Add More..?<br/>
<button type='button' onClick={yesHandler}>Yes</button>&nbsp;&nbsp;&nbsp;
<button type='button' onClick={noHandler}>No</button>
</div>
)

if(displayWhat==="processingSection") return(
<div>
<img src={processloading}/>
</div>
)

if(displayWhat==="formSection")return(
<div>
<h1>Add a Placement Entry</h1>
<div style={{color:'red'}}>{formError}</div>

<label htmlFor='id'>Id</label>
<input type='number' id='id' value={id} onChange={idChanged}/>
<span style={{color:'red'}}>{idError}</span>
<br/>

<label htmlFor='name'>Name</label>
<input type='text' id='name' value={name} onChange={nameChanged}/>
<span style={{color:'red'}}>{nameError}</span>
<br/>

Placement Type
<input type='radio' id='fullTime' name='placementType' checked={fullTimeChecked} value='F' onChange={placementTypeChanged}/>Full Time
&nbsp;&nbsp;&nbsp;
<input type='radio' id='internship' name='placementType' checked={internshipChecked} value='I' onChange={placementTypeChanged}/>Intership
<br/>

<label htmlFor='companyName'>company Name</label>
<input type='text' id='companyName' value={companyName} onChange={companyNameChanged}/>
<span style={{color:'red'}}>{companyNameError}</span>
<br/>


<label htmlFor='salary'>Salary</label>
<input type='number' id='salary' value={salary} onChange={salaryChanged}/>
<select id='salaryType' onChange={salaryTypeChanged}>
<option value='Y'>per Annum</option>
<option value='M'>per Month</option>
</select>
<span style={{color:'red'}}>{salaryError}</span>
<br/>

<button type='button' onClick={addClickedHandler}>Add</button>



</div>
)
}

export default AppExample17;