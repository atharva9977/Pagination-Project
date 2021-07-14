import React from 'react';

const titles=[
"Thinking MAchines",
"Think Big",
"We teach more than we promise to teach",
"Ujjain is Great city"
];


const App=()=>{


const[titleIndex,setTitleIndex]=React.useState(0);

const changeTitle=()=>{
if(titleIndex==titles.length-1) setTitleIndex(0);
else setTitleIndex(titleIndex+1);

}
const doSomething=()=>{
alert(titles.length);
titles.push("Programming is Cool");
alert(titles.length);
setTitleIndex(0);

}

return(
<div>
<h1 onClick={changeTitle}>{titles[titleIndex]}</h1>
<h3 onClick={doSomething}>Current title from Index:{titleIndex}</h3>
current Title Index:{titleIndex}
</div>



)
}







export default App;