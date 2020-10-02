import React from 'react'
import { useStore } from 'react-redux';

export const Catalog: React.FC = () => {
  const store = useStore();

  console.log(store.getState())

  return (
    <h1>Catalog</h1>
  )
}

export default Catalog;