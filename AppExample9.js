import React from 'react'

const AppExample9=()=>{

const[activeMode,setActiveMode]=React.useState("view");

const onToolBarItemSelected=function(item){
if(item==="add") setActiveMode("add");
if(item==="cancel")setActiveMode("view");
}

return(
<div>
<h1>Thinking Machines</h1>
<ToolBar mode={activeMode} onItemSelected={onToolBarItemSelected}/>
{activeMode==="view" && <StudentsViewComponent/>}
{activeMode==="add" && <StudentAddComponent/>}
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

const StudentsViewComponent=()=>{
return(
<div>
<h1>Placements</h1>
</div>
)
} 

const StudentAddComponent=()=>{
return(
<div>
<h1>Add Placement Entry</h1>
</div>

)
}
export default AppExample9;