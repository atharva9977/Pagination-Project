import React from 'react'
import ProcessLoading from './processloading.gif'

const getPlacements=()=>{

var promise=new Promise((resolve,reject)=>{
fetch("placements").then((response)=>{
//alert(response.ok);
if(!response.ok)
{
throw Error("Unable to Fetch Data");
}
return response.json();
}).then((students)=>{
resolve(students);
}).catch((error)=>{
reject(error.message);
});
});
return promise;
}

var ViewStates={
loading:1,
loaded:2,
loadingError:3
};

Object.freeze(ViewStates);

const AppExample23=()=>{

const studentsStateReducer=(state,action)=>{

var ss={...state,viewState:action.viewState};

if(action.viewState===ViewStates.loaded)
{
ss.students=action.students;
}
if(action.viewState===ViewStates.loadingError)
{
ss.error=action.error;
}
return ss;
}




const[studentsState,reduceStudentsState]=React.useReducer(studentsStateReducer,{"students":[],"viewState":ViewStates.loading})


React.useEffect(()=>{
getPlacements().then((students)=>{
reduceStudentsState({"students":students,"viewState":ViewStates.loaded});
//alert(students.length);
},(error)=>{
reduceStudentsState({"viewState":ViewStates.loadingError,"error":error});
//alert(error);
});

},[]);

return(
<div>
<h1>Thiinking Machines</h1>
{studentsState.viewState===ViewStates.loaded && <PlacementsViewComponent students={studentsState.students} />}
{studentsState.viewState===ViewStates.loading && <ProcessingViewComponent />}
{studentsState.viewState===ViewStates.loadingError && <ErrorViewComponent error={studentsState.error}/>}

</div>
)
}

const PlacementsViewComponent=({students})=>{
return(
<div>
<ul>
{
students.map((student)=>{
return(
<li key={student.id}>{student.name}  ({student.companyName})</li>
)

})

}
</ul>

</div>

)
}


const ProcessingViewComponent=()=>{
return(
<div>
<img src={ProcessLoading} width='25%' height='25%' />
</div>
)
}

const ErrorViewComponent=({error})=>{
return(
<div>
<h3 style={{color:'red'}}>{error}</h3>
</div>

)
}



export default AppExample23;