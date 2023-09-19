import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {AiFillEdit} from 'react-icons/ai'

function ProjectList() {
  return (<>
    <div className="flex p-4 border border-slate-300 my-3 justify-between gap-5 items-start">
        <div>
            <h2 className="font-bold text-2xl">project Title</h2>
            <div>Project details</div>
        </div>
    <div className="flex">
        <RemoveBtn/>
        <Link href='/edit/123' className="text-green-400"><AiFillEdit size={25}/></Link>
    </div>
    </div>
  </>
  )
}

export default ProjectList