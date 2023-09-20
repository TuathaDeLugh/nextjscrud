"use client"
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
function RemoveBtn({ id }) {
  const router = useRouter();
  const removeProject = async() =>{
    const confirmed = confirm("are you sure??");
    if (confirmed){
      const apiurl = process.env.API_URL;
      const res = await fetch(`${apiurl}/api/projects?id=${id}`,{method:"DELETE"})
      if (res.ok) {
        toast.success('Project Deleted', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          router.refresh();
        return;
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