import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {AiFillEdit} from 'react-icons/ai'
 
const getProjects = async () => {
  
  try {
    const res = await fetch ('http://localhost:3000/api/projects',{
      cache:'no-cache',
     });
     
    if (!res.ok){
      throw new Error ('Failed to fatch');
    }
  
    return res.json();

  } catch (error) {
    console.log(error);    
  }
}


async function ProjectList() {
  const  { projects }  = await getProjects();
  return (<>
  {projects.map(t=>(
    <div className="flex p-4 border border-slate-300 my-3 justify-between gap-5 items-start" key={t._id}>
        <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.discription}</div>
        </div>
    <div className="flex">
        <RemoveBtn id={t._id}/>
        <Link href={`/edit/${t._id}`} className="text-green-400"><AiFillEdit size={25}/></Link>
    </div>
    </div>))}
  </>
  )
}

export default ProjectList