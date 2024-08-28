import { LogoWeb, LinkWeb } from '../components/Link'

const Navbar = () => {
  return (
    <nav className="z-20 overflow-x-hidden w-full shadow-md relative flex justify-between items-center backdrop-blur-md bg-slate-900/50 py-4 px-2 md:px-4 xl:px-6">
      <LogoWeb />
      <button className="bg-primary py-1 px-2.5 text-xl cursor-pointer rounded"><i className="text-slate-800 fa fa-bars"></i></button>
      <LinkWeb parentLink="text-sm absolute shadow p-1.5 rounded w-1/2 top-full -right-full flex flex-col bg-slate-800/90 gap-1" link="bg-primary py-1 px-1 rounded" linkAccount="btn-primary" account="mt-2 flex flex-col gap-1" />
    </nav>
  )
}

export default Navbar
