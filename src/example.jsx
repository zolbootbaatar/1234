import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCar, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'

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

//     https://opentdb.com/api.php?amount=10


export default function Example() {
      
      return (
            // columns-3 --> 3 egnee bolgono grid --> display: grid; grid-cols-5 --> neg egneend hed bhyg helne
            <div className='container mx-auto bg-slate-100 dark:bg-zinc-900  min-h-screen '>
                  <div className='py-1 inline-grid gap-10 grid-cols-3'>
                        {/* <button className='text-zinc-600 dark:text-slate-200 border-2 border-slate-600 px-2 focus:bg-slate-400 dark:focus:bg-slate-600' 
                        onClick={handleThemeSwitch}>
                              <FontAwesomeIcon icon={faCheck} /> 
                        </button> */}
                        <button className='text-zinc-600 dark:text-slate-200 border-2 border-slate-600 px-2 focus:bg-slate-400 dark:focus:bg-slate-600'>
                              <FontAwesomeIcon icon={faCheck} /> All
                        </button>
                        <button className='text-zinc-600 dark:text-slate-200 border-2 border-slate-600 px-2 focus:bg-slate-400 dark:focus:bg-slate-600'>
                              <FontAwesomeIcon icon={faUser} /> People
                        </button>
                        <button className='text-zinc-600 dark:text-slate-200 border-2 border-slate-600 px-2 focus:bg-slate-400 dark:focus:bg-slate-600'>
                              <FontAwesomeIcon icon={faCar} /> Vehicles
                        </button>
                  </div>
                  <div className='py-1 inline-grid gap-4 grid-cols-10 
                  max-md:grid-cols-3 max-lg:grid-cols-6'>
                        <select name="" id="" 
                              className='bg-slate-200 dark:bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl text-zinc-600 flex dark:text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-slate-200 dark:bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl text-zinc-600 flex dark:text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-slate-200 dark:bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl text-zinc-600 flex dark:text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-slate-200 dark:bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl text-zinc-600 flex dark:text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-slate-200 dark:bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl text-zinc-600 flex dark:text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                        <select name="" id="" 
                              className='bg-slate-200 dark:bg-zinc-800 p-1 m-2 ml-0 max-w-sm mx-auto rounded-3xl text-zinc-600 flex dark:text-slate-300'>
                              <option value="">Option-1</option>
                              <option value="">Option-2</option>
                              <option value="">Option-3</option>
                        </select>
                  </div>
                  
                  <div className="grid gap-8 grid-cols-5 grid-rows-5
                  max-md:grid-cols-1 max-lg:grid-cols-3">
                  
                        {people.map((person) => (
                        <div key={person.email}>
                              <div className='pb-3 bg-zinc-200 border border-slate-300 dark:border-transparent dark:bg-zinc-800 rounded-lg'>
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
                                          <p className="text-sm text-zinc-600 dark:text-slate-300 px-1 pb-0.5">
                                                <FontAwesomeIcon icon={faVideo} /> {person.name}
                                          </p>
                                          {/* <p className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">{person.name}----</p> */}
                                          <p className="text-sm p-1 inline-block font-medium bg-zinc-300 dark:bg-zinc-700 text-zinc-900 dark:text-slate-100">{person.email}</p>
                                    </div>
                              </div>                  
                        </div>
                        ))}
                  </div>
            </div>
      )
}
