import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

const people = [
      {
            name: 'Calvin Hawkins',
            email: 'calvin.hawkins@example.com',
            image:
            'https://www.youtube.com/watch?v=7sDY4m8KNLc',
      },
      {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            name: 'Kevin Hurt',
            email: 'calvin.hawkins@example.com',
            image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            name: 'Kristen Wue',
            email: 'kristen.ramos@example.com',
            image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            name: 'DeAron Fox',
            email: 'ted.fox@example.com',
            image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ]
    
export default function Example() {
      return (
            // columns-3 --> 3 egnee bolgono grid --> display: grid; grid-cols-5 --> neg egneend hed bhyg helne
            <div className='container mx-auto bg-zinc-900'>
                  <div className='py-1 inline-grid gap-10 grid-cols-3'>
                        <button className='text-slate-100 border-2 border-slate-600 px-2'>All</button>
                        <button className='text-slate-100 border-2 border-slate-600 px-2'>People</button>
                        <button className='text-slate-100 border-2 border-slate-600 px-2'>Vehicles</button>
                  </div>
                  <div className='py-1 inline-grid gap-4 grid-cols-10 
                  max-md:grid-cols-3 max-lg:grid-cols-6'>
                        <select name="" id="" 
                              className='bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl flex text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl flex text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl flex text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl flex text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl flex text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl flex text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                  </div>
                  
                  <div className="grid gap-8 grid-cols-5 grid-rows-5
                  max-md:grid-cols-1 max-lg:grid-cols-3">
                  
                        {people.map((person) => (
                        <div key={person.email}>
                              <div className='pb-3 bg-zinc-800 rounded-lg'>
                                    {/* <img className="float-none rounded-t-lg 
                                    max-md:p-auto h-80 w-96" src={person.image} alt="" /> */}

                                    {/* <ReactPlayer
                                    width='100%'
                                    height='100%'
                                    controls
                                    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    /> */}

                                    <video width="100%" height="100%" controls className='rounded-t-lg'>
                                          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                                          type="video/mp4" />
                                    </video>

                                    <div className="ml-3 py-1">
                                          <p className="text-sm text-slate-300 px-1 pb-0.5">{person.name}</p>
                                          {/* <p className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">{person.name}----</p> */}
                                          <p className="text-sm font-medium bg-zinc-700 text-slate-100">{person.email}</p>
                                    </div>
                              </div>                  
                        </div>
                        ))}
                  </div>
            </div>
      )
}
