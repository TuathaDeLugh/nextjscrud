import React from 'react'

function Projects() {
  return (
    <form className="flex flex-col gap-2">
        <input className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter Title" type="text" name="title" id="title" />
        <textarea className=" border border-slate-500 px-8 py-2 h-52 rounded"
        placeholder="Enter Details" name="details" id="details" />
        <button className=" bg-green-600 font-bold text-white py-3 px-6 rounded">Add Project</button>
    </form>
  )
}

export default Projects