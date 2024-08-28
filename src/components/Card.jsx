
const CardMovie = ({ title, image, rating, rilis }) => {
  return (
    <div className="relative group py-1.5 px-1.5 h-full rounded object-cover object-center shadow-md overflow-hidden">
      <img src={image} alt={title} className="group-hover:contrast-50 group-hover:saturate-50 rounded w-full h-full" />
      <div className="absolute px-1 py-2 top-full group-hover:bottom-2 group-hover:top-0 rounded flex justify-end flex-col">
        <h6 className="text-lg text-slate-50 font-black leading-tight">{title}</h6>
        <p className="text-paragraft font-semibold">Rating: {rating}</p>
        <p className="text-paragraft font-semibold">Rilis: {rilis}</p>
      </div>
    </div>
  )
}

export default CardMovie

