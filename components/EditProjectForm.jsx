"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

export default function EditProjectForm({ id, title, discription }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDiscription, setNewDiscription] = useState(discription);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {const apiurl = process.env.API_URL;
      const res = await fetch(`${apiurl}/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDiscription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update project");
      }
            toast.success('Project Updated', {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
        onChange={(e)=> setNewTitle(e.target.value) } value={newTitle} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter Title" type="text" name="title" id="title" />
        <textarea 
        onChange={(e)=> setNewDiscription(e.target.value) } value={newDiscription} 
        className=" border border-slate-500 px-8 py-2 h-52 rounded"
        placeholder="Enter Details" name="discription" id="discription" />
        <button type='submit' className=" bg-green-600 font-bold text-white py-3 px-6 rounded">Update Project</button>
    </form>
  );
}