import React from 'react'

const AppExample16=()=>{

const[title,setTitle]=React.useState("Think Big");
const[something,setSomething]=React.useState("Hey");

React.useEffect(()=>{
alert("Cool Bro");

},[title,something]);

const changeTitle=()=>{
setTitle("My Package is going to be 20LPA");
}

const doSomething=()=>{
setSomething("Hey,Good Morning");

}


return(
<div>
<h1>Thinking Machines</h1>
<TitleComponent title={title} abcd={something}/>
<button type='button' onClick={changeTitle}>Change Title</button><br/><br/>
<button type='button' onClick={doSomething}>Change Text</button><br/><br/>
</div>
)
}

const TitleComponent=({title,abcd})=>{
return(
<div>
{title}
<h2>{abcd}</h2>
</div>
)
}

export default AppExample16;