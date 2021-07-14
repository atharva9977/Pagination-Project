import React from 'react';

const App=()=>{

const [title,setTitle]=React.useState("Thinking Machines");
const [year,setYear]=React.useState(2021);

const students=[
{"id":101,"name":"Atharva","type":"fullTime","company":"Grow","package":"20 LPA","passingYear":2021},
{"id":102,"name":"Aaditya","type":"fullTime","company":"investTrack","package":"19LPA","passingYear":2021},
{"id":103,"name":"Adarsh","type":"fullTime","company":"TCS","package":"18 LPA","passingYear":2021},
{"id":104,"name":"Anirudha","type":"fullTime","company":"Wipro","package":"17 LPA","passingYear":2021},
{"id":105,"name":"Ayush","type":"fullTime","company":"Amazon","package":"16 LPA","passingYear":2021}

];
const [searchWhat,setSearchCriteria]=React.useState("None");
const applyFilter=(ev)=>{
if(ev.currentTarget.value.length<3)
{
setSearchCriteria("None");
return;
}
setSearchCriteria(ev.currentTarget.value);
}

const filteredStudents=students.filter((student)=>{
if(searchWhat==="None") return true;
return student.company.toLowerCase().includes(searchWhat.toLowerCase());
});


return(
<div>
<TitleComponent title={title} placementYear={year}/>
<SearchBox onSearch={applyFilter}/>
Filter Applied:{searchWhat}
<StudentsList students={filteredStudents}/>
</div>


)}



const TitleComponent=(props)=>{
return(
<h1>{props.title} - Placements {props.placementYear}</h1>
)
}

const SearchBox=(props)=>{
const searchIt=(ev)=>{
props.onSearch(ev);
}

return(
<div>
<label htmlFor="searchBox">Search: </label>
<input type='text' id='SearchBox' onChange={searchIt}/>
</div>
)
}

const StudentsList=(props)=>{
return(
<ul>
{
props.students.map((student)=>{
return(
<li key={student.id} > {student.name} ({student.company})</li>

)
})
}

</ul>

)

}


export default App;