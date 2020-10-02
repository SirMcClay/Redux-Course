import React from 'react'
import { useSelector } from 'react-redux';

export const Catalog: React.FC = () => {
  const email = useSelector(state => state.email);

  console.log(email)

  return (
    <h1>Catalog</h1>
  )
}

export default Catalog;