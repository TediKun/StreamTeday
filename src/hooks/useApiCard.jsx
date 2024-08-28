import { useEffect, useState } from "react"


export const useApiCard = (film) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(film)
      .then(json => json.json())
      .then(data => setData(data.results))
  }, [film])

  return data
}

