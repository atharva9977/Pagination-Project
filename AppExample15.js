import React from 'react'

const getPlacements=()=>{
const promise=new Promise((resolve)=>{
fetch("/placements").then((response)=>{
return response.json();
}).then((employees)=>{resolve(employees);});

});
return promise;


}

const AppExample15=()=>{

const[employees,setEmployees]=React.useState([]);
const[title,setTitle]=React.useState("Hey");

React.useEffect(()=>{
const promise=getPlacements();
promise.then((emps)=>{
setEmployees(emps);
});

},[]);

const changeTitle=()=>{
setTitle("Hey Dude");
}

return(
<div>
<h1>Thinking Machines</h1>
<EmployeesListComponent employees={employees} />
<TitleComponent title={title}/>
<button type='button' onClick={changeTitle}>Change Title</button>
</div>
)
}

const EmployeesListComponent=({employees})=>{
return(
<ul>
{
employees.map((employee)=>{
return(
<li key={employee.id}>{employee.firstName} {employee.lastName}</li>
)
})
}
</ul>
)
}

const TitleComponent=({title})=>{
return(
<div>
<h2>{title}</h2>
</div>
)

}
export default AppExample15;