import React, { useState, useEffect } from "react"

// definimos el custom hook con los parámetros que nos interesan: tamaño de la página y a qué nº página queremos acceder
const usePagination = (size, page = 1) => {
  const [content, setContent] = useState([])

  const getSeries = async () => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/random?limit=${size}&list=most_pop_movies`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '06b6a3e1ecmsh62418fc8d6c2c1ap144513jsnb75fe347c543',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setContent(result.results)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getSeries()
  }, [page])

  return {
    content,
    loadNextPage: () => {
      page++
      getSeries()
    }
  }
}
export default usePagination
