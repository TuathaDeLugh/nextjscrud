"use client";

import { useState } from 'react'
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';



function Projects() {

  const [title,setTitle] = useState("");
  const [discription,setDiscription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !discription) {
      toast.error('Title and description are required.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }
    try {
      const apiurl = process.env.API_URL;
      const res = await fetch(`/api/projects`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, discription }),
      });

      if (res.ok) {
        toast.success('Project added', {
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
          router.push("/");
        return;
      } else {
        throw new Error("Failed to create a Project");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      
        <input 
        onChange={(e)=> setTitle(e.target.value) }value={title} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter Title" type="text" name="title" id="title" />
        <textarea 
        onChange={(e)=> setDiscription(e.target.value) }value={discription} 
        className=" border border-slate-500 px-8 py-2 h-52 rounded"
        placeholder="Enter Details" name="details" id="details" />
        <button type='submit' className=" bg-green-600 font-bold text-white py-3 px-6 rounded">Add Project</button>
    </form>
  )
}

export default Projects