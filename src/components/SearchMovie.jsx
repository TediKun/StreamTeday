
const SearchMovie = ({ textPlaceholder }) => {
  return (
    <div className="flex mx-auto justify-center items-center relative w-[85%] md:w-3/4">
      <input type="text" placeholder={textPlaceholder} className="px-4 py-2 rounded text-slate-700 w-full" />
      <button className="absolute bg-slate-50/50 left-[88%] md:left-[95%] text-slate-950 py-1 px-2   rounded"><i className="fa fa-search"></i></button>
    </div>
  )
}

export default SearchMovie


