
export const LogoWeb = () => {
  return (
    <a href="/" className="font-black text-xl text-primary">StreamTeday</a>
  )
}

export const LinkWeb = ({ parentLink, link, account, linkAccount }) => {
  return (
    <div className={parentLink}>
      <a href="/" className={link}>Home</a>
      <a href="/about" className={link}>About</a>
      <a href="/movies" className={link}>All Movie</a>
      <a href="/genre" className={link}>Genre</a>
      <a href="/contact" className={link}>Contact</a>
      <div className={account}>
        <a href="/login" className={linkAccount}>Sign In</a>
        <a href="/registrasi" className={linkAccount}>Get Started</a>
      </div>
    </div>
  )
}

