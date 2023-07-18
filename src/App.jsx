import React, { useEffect, useState } from 'react'
import { Counter } from './assets/components/counter'
import { OrderList } from './assets/components/ordered-list'
import usePagination from './assets/components/pagination'

// const CAT_FACT_ENDPOINT_URL = 'https://catfact.ninja/fact'
// const CAT_IMAGE_ENDPOINT_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
// const CAT_IMG_ENDPOINT_URL = 'https://cataas.com'

// Lista filtrada: Crea un componente que muestre una lista de elementos
// y permita filtrar los elementos por su categoría.
// Utiliza el hook useState para gestionar el estado de los elementos
// y el hook useEffect para aplicar el filtro cuando cambie la categoría seleccionada.

export function App () {
  const pageSize = 10
  const { content, currentPage, goToPage } = usePagination(pageSize)

  const totalPages = Math.ceil(content.length / pageSize)

  // renderizamos películas desde la página actual (al principio es página 1 -1 = 0) hasta el tamaño de la página (5), por tanto se renderizan del 0 al 5
  const renderMovies = content.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', textAlign: 'center,' }}>
      <Counter />
      <OrderList />
      <div>
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row' }}>
          {renderMovies.map(movie => (
            <li style={{ width: '20%' }} key={movie._id}>
              <h3 style={{ fontSize: '1rem' }}>{movie.originalTitleText.text}</h3>
              <p>{movie.releaseYear.year}</p>
              {/* <img style={{ width: '150px' }} src={movie.primaryImage.url} alt={movie.originalTitleText.text} /> */}
            </li>
          ))}
        </ul>
        <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>Load Previous Page</button>
        <span style={{ padding: '15px' }}>{currentPage}</span>
        <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>Load Next Page</button>
      </div>
    </main>
  )
}
