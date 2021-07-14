import React from 'react'
import loading from './processloading.gif'

function produceFactorial(num)
{
var p=new Promise(function(resolve){
setTimeout(function(){
var e,f;
e=f=1;
while(e<=num)
{
f=f*e;
e++;
}
resolve(f);
},10000);


});
return p;
}

const AppExample14=()=>{

const[factorial,setFactorial]=React.useState(0);
const[jobStarted,setJobStarted]=React.useState(false);
const[processing,setProcessing]=React.useState(false);

const buttonClickHandler=()=>{
setProcessing(true);
setJobStarted(true);
var prms=produceFactorial(5);
prms.then(function(f){
setFactorial(f);
setProcessing(false);

});



}
return(
<div>
<h1>Thinking machines</h1>
<button type='button' onClick={buttonClickHandler}>Click ME Buddy</button>
<br/>
{jobStarted===true && processing===true && <img src={loading}/>}
{jobStarted===true && processing===false && "factorial :"}
{jobStarted===true && processing===false && factorial}
</div>
)


}
export default AppExample14;