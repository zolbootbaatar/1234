import logo from './logo.svg';
import './App.css';
import Example from './example'
import Navbar from './navbar';

export default function App() {
  return (
    <div className='bg-slate-100 dark:bg-zinc-900 '>
      <Navbar />,
      <Example />
    </div>
  )
}
