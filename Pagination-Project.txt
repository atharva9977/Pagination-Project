import React from 'react'
import axios from 'axios'

const PaginateProject=()=>{

const[content,setContent]=React.useState([]);
const[processing,setProcessing]=React.useState(false);
const[currentContent,setCurrentContent]=React.useState(1);
const[contentPerPage]=React.useState(10);


React.useEffect(()=>{
const fetchContent=async()=>{
setProcessing(true);
const resultSet=await axios.get('https://jsonplaceholder.typicode.com/posts');
setContent(resultSet.data);
setProcessing(false);
}
fetchContent();
},[]);
console.log(content);

const indexOfLastContent=currentContent*contentPerPage;
const indexOfFirstContent=indexOfLastContent-contentPerPage;
const currentContents=content.slice(indexOfFirstContent,indexOfLastContent);

const paginate=(pageNumber)=>{
setCurrentContent(pageNumber);
}
return(
<div >
<h1 style={{textAlign:"center",backgroundColor:"#171717",border:"5px solid yellow",color:"white"}}><b>P A G I N A T I O N &nbsp;&nbsp;&nbsp;&nbsp;P R O J E C T</b></h1>
<ContentComponent content={currentContents} processing={processing} />
<PaginationComponent contentPerPage={contentPerPage} totalContent={content.length} paginate={paginate} />
</div>
)
}

const ContentComponent=({content,processing})=>{
if(processing){
return(

<h3>P R O C E S S I N G....</h3>
)
}
return(
<div >
<ul>
{
content.map((content)=>{
return(
<div style={{padding:"10px",border:"3px solid black",listStyleType:"none"}}>
<li key={content.id} ><b>TITLE</b><br/>{content.title}<br/><br/><b>BODY</b><br/>{content.body}<br/><br/></li>
</div>
)
})

}
</ul>
</div>

)
}

const PaginationComponent=({contentPerPage,totalContent,paginate})=>{
const pageNumbers=[];
var i;
for(i=1;i<=Math.ceil(totalContent/contentPerPage); i++)
{
pageNumbers.push(i);
}
return(
<div>
<ul >
<div style={{display:"flex",alignItems:"center",justifyContent:"center",listStyle:"none"}}>
{
pageNumbers.map((number)=>{
return(
<li  style={{border:"3px solid yellow",padding:"3px",width:"100px",backgroundColor:"black"}} key={number}>
<a  style={{color:"white",marginLeft:"45px",marginRight:"45px"}} onClick={()=>paginate(number)} href='!#' ><b>{number} </b> </a>

</li>

)
})

}
</div>
</ul>
</div>
)
}


export default PaginateProject;