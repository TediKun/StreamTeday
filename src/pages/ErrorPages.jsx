import { Link } from "react-router-dom"

const ErrorPages = () => {
  return (
    <div className="w-full flex-col text-center flex justify-center items-center">
      <h1 className="text-4xl">Error Pages Not Found</h1>
      <p className="text-red">Error Yahahahha</p>
      <Link to={"/"}>Back Home</Link>
    </div>
  )
}

export default ErrorPages
