import { useMemo, useState } from "react";

type Student = {
    id:number;
    name:string;
}

const StudentSearch:React.FC=()=>{
const [students,setStudents] = useState<Student[]>([]);
const [input,setInput] = useState("");
const [searchValue, setSearchValue] = useState("");
 

const handleAdd=() =>{
    if(!input) return;
    setStudents([...students,{id:Date.now(), name:input}]);
    setInput("")
}

const filteredStudent= useMemo(()=>{
return students.filter(stud=> stud.name.toLowerCase().includes(searchValue.toLowerCase()))
},[searchValue,students])

return (<div>
<h2>Student Search</h2>
<input 
placeholder="Add student"
value={input}
onChange={(e)=> setInput(e.target.value)}
/>
<button onClick={handleAdd}>Add</button>
<br/>
<button onClick={()=>setSearchValue(input)}>Search</button>
<ul>
    {filteredStudent.map(stu=> <li key={stu.id}> {stu.name}</li>)}
</ul>
</div>)
}

export default StudentSearch