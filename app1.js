import React,{Component,useRef} from 'react'
import './App.css';

function App() {
const tmsloganRef=useRef();

const goToNextSlogan=function(){
tmsloganRef.current.updateSlogan("We can achieve anything by hardwork");
}
  return (
    <div>
<h1>Thinking Machines-Ujjain ,MP</h1>   
<TMSlogan slogan="WE teach more than we promise" motto="PAckage will be 30L pa" ref={tmsloganRef}/> 

<button type ='button' onClick={goToNextSlogan}>Next Slogan</button>
</div>
  );
}

class TMSlogan extends React.Component
{
constructor(props)
{
super(props);
this.state={
"slogan":props.slogan,
"motto":props.motto
};
}
updateSlogan(slogan)
{
this.setState({
"slogan":slogan
}
);
}
 
render(){
return(
<b>
{this.state.slogan}<br></br>
{this.state.motto}<br></br>
</b>
);
}
}

export default App;
