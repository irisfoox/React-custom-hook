import React,{useState} from 'react';

/*async ComponentDidMount(){    //async so it will wait for server to respond
 const response=await fetch(http:...);  //await so it wont crash if server is slow.await says dont continue to more commands until u do this one
 const contries=await response.json(); //casting to json   
}*/
export function YearOld(props){
    const [year,setYear]=useState(0);
    setYear(calcYear(year));
    const [name,setName]=useState(props.name);
    setName(calcName(name));

    function calcYear(year){
        const currentYear=Date.getFullYear();
        console.log(currentYear);
        <lable>The person is {calc(currentYear,year)} years old</lable>
    }
    function calcName(name){
        const max=20;
        <label>The person's name is {calc(max,name.length)} less than max length</label>
    }
    function calc(x,y){
        return x-y;
    }
        return(
            <>
            <input type="number" placeholder="enter year of birth" onChange={this.setYear}></input>
            <input type="text" placeholder="enter name" onChange={this.setName}></input>
            </>
        );
    
}
export default YearOld 
