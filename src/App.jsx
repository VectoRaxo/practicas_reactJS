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
  const { content, loadNextPage } = usePagination(10, 1)

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', textAlign: 'center,' }}>
      <Counter />
      <OrderList />
      <div>
        <ul>
          {content.map(movie => (
            <li key={movie.originalTitleText.text}>{movie.originalTitleText.text}</li>
          ))}
        </ul>
        <button onClick={loadNextPage}>Load Next Page</button>
      </div>
    </main>
  )
}
