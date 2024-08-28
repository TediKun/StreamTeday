import { LinkWeb, LogoWeb } from "../components/Link"

const Footer = () => {
  return (
    <footer className="w-full shadow-md bg-slate-800/80 py-6 flex items-center justify-between px-3.5 mt-6">
      <LogoWeb />
      <LinkWeb parentLink="flex flex-col" link="text-sm hover:text-primary hover:pl-2 transition-all font-semibold" linkAccount="text-sm hover:text-primary hover:pl-2 transition-all font-semibold flex items-center" account="text-sm" />
    </footer>
  )
}

export default Footer
