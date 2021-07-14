import React from 'react'


const getCompanies=()=>{
var promise=new Promise((resolve,reject)=>{
fetch("/companies").then((response)=>{
if(!response.ok) throw Error("OOPS,Try After Some Time");
return response.json();
}).then((companies)=>{
resolve(companies);
}).catch((error)=>{
reject(error.message);
});
});
return promise;
}

const getPlacements=()=>{
var promise=new Promise((resolve,reject)=>{
fetch("/placements").then((response)=>{
if(!response.ok) throw Error("OOPS,Try After Some Time");
return response.json();
}).then((students)=>{
resolve(students);
}).catch((error)=>{
reject(error.message);
});
});
return promise;
}

const PlacementsDashboard=()=>{

const[students,setStudents]=React.useState([]);
const[companies,setCompanies]=React.useState([]);
const[filter,setFilter]=React.useState({jobType:[],salaryType:[],companies:[]});

React.useEffect(()=>{
getCompanies().then((companies)=>{
setCompanies(companies);
getPlacements().then((s)=>{
setStudents(s);
},(error)=>{
alert(error);
});
},(error)=>{
alert(error);
});

},[]);

const applyFilter=(f)=>{
setFilter(f);
}

return(
<div>
<HeaderComponent years='2021' />
<div style={{display:'flex'}}>
<div style={{marginLeft:"20px",paddingRight:"10px",borderRight:"1px solid red",fontSize:"15pt"}}>
<div style={{width:"100%",backgroundColor:"red",padding:"2px",textAlign:"center",color:"white",fontWeight:"bold"}}>F I L T E R S</div>
<FilterComponent companies={companies} onChange={applyFilter} />
</div>
<div style={{flexGrow:1,marginLeft:"20px"}}>
<PlacementComponent filterBy={filter} students={students} />
</div>
</div>
</div>
)
}

const FilterComponent=({companies,onChange})=>{

const jobTypesChanged=(jt)=>{
alert(JSON.stringify(jt));
}

const salaryTypesChanged=(st)=>{
alert(JSON.stringify(st));
}

return(
<div>
<JobTypeComponent onChange={jobTypesChanged}/>
<hr/>
<SalaryTypeComponent onChange={salaryTypesChanged} />
<hr/>
<CompaniesComponent  companies={companies}/>
<hr/>
</div>

)

}

const HeaderComponent=({years})=>{
return(
<h1>Thinking Machines-Placement Records({years})</h1>
)
}

const JobTypeComponent=({onChange})=>{

const[fullTimeChecked,setFullTimeChecked]=React.useState(false);
const[internshipChecked,setInternshipChecked]=React.useState(false);

const stateChanged=(ev)=>{

var jobTypesState={
fullTime:fullTimeChecked,
internship:internshipChecked
};

if(ev.currentTarget.value==='F')
{
setFullTimeChecked(ev.currentTarget.checked);
jobTypesState.fullTime=ev.currentTarget.checked;
}
if(ev.currentTarget.value==='I')
{
setInternshipChecked(ev.currentTarget.checked);
jobTypesState.internship=ev.currentTarget.checked;
}
alert(jobTypesState.fullTime+","+jobTypesState.internship);
onChange(jobTypesState);
}
const doSomething=()=>
{
alert(fullTimeChecked+","+internshipChecked);
}



return(
<fieldset>
<legend>Job Type</legend>
<input type='checkbox' onChange={stateChanged} checked={fullTimeChecked} value='F' style={{width:"20px",height:" 20px"}} />Full Time<br/>
<input type='checkbox' onChange={stateChanged} checked={internshipChecked} value='I' style={{width:"20px",height:" 20px"}} />InternShip<br/>
<button type='button' onClick={doSomething}>Click Me</button>
</fieldset>
)
}

const SalaryTypeComponent=({onChange})=>{


const[yearlyChecked,setYearlyChecked]=React.useState(false);
const[monthlyChecked,setMonthlyChecked]=React.useState(false);

const stateChanged=(ev)=>{

var salaryTypesState={
yearly:yearlyChecked,
monthly:monthlyChecked
};

if(ev.currentTarget.value==='Y')
{
setYearlyChecked(ev.currentTarget.checked);
salaryTypesState.yearly=ev.currentTarget.checked;
}
if(ev.currentTarget.value==='M')
{
setMonthlyChecked(ev.currentTarget.checked);
salaryTypesState.monthly=ev.currentTarget.checked;
}
alert(salaryTypesState.yearly+","+salaryTypesState.monthly);
onChange(salaryTypesState);
}
const doSomething=()=>
{
alert(yearlyChecked+","+monthlyChecked);
}



return(
<fieldset>
<legend>Salary Type</legend>
<input type='checkbox' onChange={stateChanged} checked={monthlyChecked} value='M' style={{width:"20px",height:" 20px"}} />Monthly<br/>
<input type='checkbox' onChange={stateChanged} checked={yearlyChecked} value='Y' style={{width:"20px",height:" 20px"}} />Yearly<br/>
<button type='button' onClick={doSomething}>Click Me</button>
</fieldset>
)
}


const CompaniesComponent=({companies})=>{
return(
<fieldset>
<legend>Companies</legend>
{
companies.map((company)=>{
return(
<span key={company.name}>
<input type='checkbox' value={company.name} style={{width:"20px",height:"20px"}} />{company.name} ({company.studentsCount})<br/>
</span>
)
})
}
</fieldset>
)
}


const PlacementComponent=()=>{
return(
<h1>Students</h1>
)

}



export default PlacementsDashboard;