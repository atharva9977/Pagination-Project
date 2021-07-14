import React from 'react';

const students=[
{"id":101,"name":"Atharva Parihar","type":"Full Time","company":"Amazon","salary":"30 LPA","passing year":2023},
{"id":102,"name":"Aaditya Mishra","type":"Full Time","company":"Groww","salary":"25 LPA","passing year":2023},
{"id":103,"name":"Anirudha Sahu","type":"Full Time","company":"Google","salary":"20 LPA","passing year":2023},
{"id":104,"name":"Ayush Parmar","type":"Full Time","company":"Microsoft","salary":"18 LPA","passing year":2023},
{"id":105,"name":"Rahul Gupta","type":"Full Time","company":"Facebook","salary":"16 LPA","passing year":2023},

];

const AppExample8=()=>{
const[title]=React.useState("Thinking Machines");
const[year]=React.useState(2021);


return(
<div>
<TitleComponent title={title} placementYear={year}/>
<ToolBarComponent/>
<StudentsListComponent students={students}/>
</div>
)
}
const ToolBarComponent=()=>{
return(
<div>
<hr/>
<button type='button'> + </button>
<hr/>
</div>
)
}

const TitleComponent=({title,placementYear})=>{
return(
<h1>{title} - Placements({placementYear})</h1>
)
}

const StudentsListComponent=({students})=>{
return(
<div>
{
students.map((student)=>{
return(
<StudentComponent key={student.id} student={student}/>
)})
}
</div>
)
}

const StudentComponent=({student})=>{return(
<div>
<span>Name:{student.name}</span><br/>
<span>Company:{student.company}</span><br/>
<span>Placement Type:{student.type}</span><br/>
<span>Salary:{student.salary}</span><br/>
<span>Year of Passing:{student.passingYear}</span><br/>
<hr/>
</div>

)}
export default AppExample8;