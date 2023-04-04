import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-zinc-800 container mx-auto grid grid-cols-10 gap-2'>
      {/* <h1 className='text-3xl'>IREX</h1> */}
      <img className='object-contain h-10 w-30 m-2 mr-0' 
            src="https://lanman2018.ieee-lanman.org/files/2016/01/sample-logo@2x.png"/>

      <select name="Event" id="" 
      className='bg-zinc-800  p-2 m-2 ml-0 max-md:ml-2
      max-w-sm mx-auto rounded-xl flex font-bold text-slate-100'>
            <option value="">Option-1</option>
            <option value="">Option-2</option>
            <option value="">Option-3</option>
      </select>

      <input type="text"
            placeholder='Search'
            className='bg-zinc-700 p-2 
            col-start-4 col-span-4 m-2 max-md:col-start-5 max-md:col-span-3
            ml-0 rounded-3xl text-slate-200'/>
      <ul className='grid 
            col-start-10 grid-cols-3 max-md:col-start-8 max-md:col-span-4 max-lg:col-start-9 max-lg:col-span-2
            bg-zinc-800 p-2 m-2 flex font-bold text-slate-100'>
            <li>1</li>
            <li>2</li>
            <li>A</li>
      </ul>
    </div>
  )
}
