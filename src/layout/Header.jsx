import SearchMovie from "../components/SearchMovie"

const HeaderText = () => {
  return (
    <div className="text-center">
      <h5 className="text-heading">Streaming Movies Full HD. <br />
        All movies and TV shows.</h5>
      <p className="text-paragraft py-2">Streaming Full HD 4K All Subtitle. Search Movies Your Favorite. </p>
    </div>
  )
}


const Header = () => {
  return (
    <header className="mt-2">
      <HeaderText />
      <SearchMovie textPlaceholder={"Search Movies..."} />
    </header>
  )
}

export default Header
