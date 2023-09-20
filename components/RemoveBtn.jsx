"use client"
import { useRouter } from "next/navigation";

import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
function RemoveBtn({ id }) {
  const router = useRouter();
  const removeProject = async() =>{
    const confirmed = confirm("are you sure??");
    if (confirmed){
      const res = await fetch(`http://localhost:3000/api/projects?id=${id}`,{method:"DELETE"})
      if (res.ok) {
        router.refresh();
      } else {
        throw new Error("Failed to create a Project");
      }
    }
  }
  return (
    <button onClick={removeProject} className="text-red-400"><AiOutlineDelete size={25}/>
    </button>
  )
}

export default RemoveBtn