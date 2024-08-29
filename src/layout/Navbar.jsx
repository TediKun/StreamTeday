import { useState } from 'react'
import { LogoWeb, LinkWeb } from '../components/Link'

const Navbar = () => {
  const [active, setActive] = useState(false);


  return (
    <nav className={`z-20 ${active ? 'overflow-visible' : 'overflow-x-hidden'} w-full shadow-md relative flex justify-between items-center backdrop-blur-md bg-slate-900/50 py-4 px-2 md:px-4 xl:px-6`}>
      <LogoWeb />
      <button onClick={() => active ? setActive(false) : setActive(true)} className="bg-primary py-1 px-2.5 text-xl cursor-pointer rounded"><i className={`${active ? 'fa fa-close' : 'fa fa-bars'} text-slate-800`}></i></button>
      <LinkWeb parentLink={`text-sm absolute shadow p-1.5 rounded w-1/2 top-full ${active ? 'right-2' : '-right-full'} flex flex-col bg-slate-800/90 gap-1 transition-all`} link="bg-primary py-1 px-1 rounded" linkAccount="btn-primary" account="mt-2 flex flex-col gap-1" />
    </nav>
  )
}

export default Navbar
