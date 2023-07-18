import React, { useState, useEffect } from "react"
// import responseMovies from '../mocks/with-results.json'
// definimos el custom hook con los parámetros que nos interesan: tamaño de la página y a qué nº página queremos acceder
const usePagination = (pageSize) => {
  const [content, setContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const getSeries = async () => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles?page=${currentPage}&limit=50`
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
  }, [currentPage])

  const goToPage = (page) => {
    setCurrentPage(page)
  }
  return {
    content,
    currentPage,
    goToPage
  }
}
export default usePagination
