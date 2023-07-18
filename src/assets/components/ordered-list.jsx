import React, { useState, useEffect } from 'react'

export const OrderList = () => {
  const [items, setItems] = useState([
    { id: 1, nombre: 'perritos calientes', categoria: 'comida' },
    { id: 2, nombre: 'filetes empanaos', categoria: 'comida' },
    { id: 3, nombre: 'monopoly', categoria: 'juegos' },
    { id: 4, nombre: 'ferrari', categoria: 'coches' },
    { id: 5, nombre: 'seat ibiza', categoria: 'comida' }
  ])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')
  const [itemsFiltrados, setItemsFiltrados] = useState(items)
  const [categoriasFiltradas, setCategoriasFiltradas] = useState()
  const listOfCategories = [...new Set(items.map(item => item.categoria))]
  useEffect(() => {
    setCategoriasFiltradas(listOfCategories)
  }, [])
  const handleCategoryChange = (event) => {
    setCategoriaSeleccionada(event.target.value)
  }
  useEffect(() => {
    if (categoriaSeleccionada === 'Todos') {
      setItemsFiltrados(items)
    } else {
      const filtered = items.filter((item) => item.categoria === categoriaSeleccionada)
      setItemsFiltrados(filtered)
    }
  }, [categoriaSeleccionada, items])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '300px', textAlign: 'center', alignItems: 'center', margin: '0 auto' }}>
      <select value={categoriaSeleccionada} onChange={handleCategoryChange}>
        <option value='Todos'>Todos</option>
        {listOfCategories.map((categ) => (
          <option key={categ} value={categ}>{categ}</option>
        ))}

      </select>
      <ul>{itemsFiltrados.map((item) => (
        <li key={item.nombre}>{item.nombre}</li>
      ))}
      </ul>
    </div>
  )
}
