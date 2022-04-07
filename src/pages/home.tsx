import { useEffect, useState } from 'react';
import { useGetData } from '../hooks/useGetData';
import { Table } from '../components/Home/Table/Table';
import { Form } from '../components/Home/Form/Form';

import styles from '../styles/home.module.scss'
import Button from 'react-bootstrap/Button';

export default function Home() {
  const [products, setProducts] = useState([])
  const [productId, setProductId] = useState<string>('')
  const { productsData } = useGetData()

  useEffect(() => {
    const products = productsData

    setProducts(products)
  }, [productsData])

  function showProductId(key: string) {
    setProductId(key)
  }

  function logoutUser() {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className={styles.container}>

      <div className={`${styles.logout}`}>
        <Button onClick={() => logoutUser()}>
          Logout
        </Button>
      </div>

      <h2>Cadastro de Produtos</h2>

      <Form
        products={products}
        productId={productId}

      />

      <h2>Listagem de Produtos</h2>
      <Table
        showProductId={showProductId}
        productsData={products}
      />

    </div>
  )
}