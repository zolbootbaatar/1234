import React from 'react'
import SearchComponent from './search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCircleQuestion, faDesktop, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

export default function Navbar() {

      const [theme, setTheme] = useState("light");

      useEffect(() => {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                  setTheme('dark');
            } else {
                  setTheme('light');
            }
      }, [])

      useEffect(() => {
            if(theme === "dark") {
                  document.documentElement.classList.add("dark");
            } else {
                  document.documentElement.classList.remove("dark");
            }
      }, [theme]);

      const handleThemeSwitch = () => {
            setTheme(theme === "dark" ? "light" : "dark");
      };


  return (
    <div className='bg-slate-200 dark:bg-zinc-800 grid grid-cols-10 gap-2 max-md:gap-0'>
      {/* <h1 className='text-3xl'>IREX</h1> */}
      <img className='object-contain h-10 w-30 m-2 mr-0' 
            src="https://lanman2018.ieee-lanman.org/files/2016/01/sample-logo@2x.png"/>

      <select name="Event" id="" 
      className='bg-slate-200 dark:bg-zinc-800  p-2 m-2 ml-0 max-md:ml-2
      max-w-sm mx-auto rounded-xl flex font-bold text-zinc-600 dark:text-slate-100'>
            <option value="">Option-1</option>
            <option value="">Option-2</option>
            <option value="">Option-3</option>
      </select>
      <SearchComponent />
      {/* <input type="text"
            placeholder='Search'
            className='bg-zinc-700 p-2 
            col-start-4 col-span-4 m-2 max-md:col-start-5 max-md:col-span-3
            ml-0 rounded-3xl text-slate-200'/> */}
      <ul className='bg-slate-200 dark:bg-zinc-800 grid 
            col-start-10 grid-cols-4 max-md:col-start-8 max-md:col-span-4 max-lg:col-start-9 max-lg:col-span-2
            p-2 m-2 flex font-bold text-zinc-600 dark:text-slate-100'>
            <li><button onClick={handleThemeSwitch}><FontAwesomeIcon icon={faSun} /> </button></li>
            <li><button><FontAwesomeIcon icon={faCircleQuestion} /></button></li>
            <li><button><FontAwesomeIcon icon={faDesktop} /></button></li>
            <li><button><FontAwesomeIcon icon={faCircleUser} /></button></li>
      </ul>
    </div>
  )
}
