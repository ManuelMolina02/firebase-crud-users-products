
import { productProps } from "../../../service/types";
import { useEffect, useState } from "react";

import styles from './table.module.scss'
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { BsList } from 'react-icons/bs'

import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import { AiOutlineClear } from 'react-icons/ai'
import { deleteProduct } from "../../../service/database";
import Alert from 'react-bootstrap/Alert'

interface tableProps {
  showProductId: (key: string) => void
  productsData: productProps[]
}

export function Table({ productsData, showProductId }: tableProps) {

  const [products, setProducts] = useState<productProps[]>(productsData)
  const [productSearch, setProductSearch] = useState<string>('')

  //Estado dos Alertas
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    setProducts(productsData)
  }, [productsData])



  //Componente collapse personalizado
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
      <div
        className={styles.iconAddress}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }

  function handleAlert(status, message) {
    setAlert(true)
    setStatus(status)
    setMessage(message)

    setTimeout(() => {
      setAlert(false)

    }, 5000)
  }

  function deletarProduct(key: string) {
    deleteProduct(key)

    handleAlert('success', 'Produto excluído com sucesso!')
    setTimeout(() => {
      window.location.href = '/home'
    }, 5000)

  }


  function clearFilter() {
    setProductSearch('')
    setProducts(productsData)

  }

  function filterProducts(productSearch: string) {

    const filteredProducts = products.filter(product => {
      return product.um.includes(productSearch)
    })


    setProducts(filteredProducts)
  }


  return (
    <div className={styles.listContainer}>
      {/* Alert com retornos */}
      {alert ?
        <div className={styles.alert}>
          <Alert variant={status}>
            {message}
          </Alert>
        </div>
        :
        <div className={styles.alert}>
        </div>
      }

      <div className={styles.filterUser}>
        <h4>Filtrar Produtos:</h4>
        <div>
          <input
            type="text"
            onChange={(event) => setProductSearch(event.target.value)}
            maxLength={16}
            value={productSearch}
            placeholder="Buscar por 'um' do produto"
          />

          <div>
            <button onClick={() => clearFilter()}><AiOutlineClear /></button>
            <button onClick={() => filterProducts(productSearch)}>Buscar</button>

          </div>
        </div>
      </div>

      <h3>Lista de Produtos</h3>

      <div className={styles.usersContent}>
        <Accordion className={styles.customAccordion}>

          {
            products.map((data, index) => (
              <Card key={data.key}>
                <Card.Header>

                  <div >
                    <CustomToggle eventKey={data.key}> {<BsList />}</CustomToggle>
                  </div>

                  <div className={styles.accordionContent}>
                    {data.codigoCliente}
                  </div>


                  <div className={styles.accordionContent}>
                    {data.descricao}
                  </div>


                  <div className={styles.accordionContent}>
                    {data.um}
                  </div>

                  <div className={`${styles.accordionContent} ${styles.buttonsItemList}`} >
                    <button className={styles.editar} onClick={() => showProductId(data.key)}>
                      <span>Editar</span>

                      <AiTwotoneEdit />

                    </button>
                    <button className={styles.delete} onClick={() => deletarProduct(data.key)} >

                      <span>Deletar</span>
                      <AiFillDelete />

                    </button>
                  </div>

                </Card.Header>

                <Accordion.Collapse eventKey={data.key}>
                  <Card.Body bsPrefix={` py-3 ps-2 w-100`} style={{ backgroundColor: '#313142' }}>{

                    <div key={data.key} className={styles.collapseContent}>
                      <div>
                        <label>Código Cliente</label>
                        <span>{data.codigoCliente}</span>
                      </div>

                      <div>
                        <label>Descrição</label>
                        <span>{data.descricao}</span>
                      </div>

                      <div>
                        <label>Peso Bruto: </label>
                        <span>{data.pesoBruto}</span>
                      </div>

                      <div>
                        <label>Peso Líquido: </label>
                        <span>{data.pesoLiquido}</span>
                      </div>

                      <div>
                        <label>Grupo: </label>
                        <span>{data.grupo}</span>
                      </div>

                      <div>
                        <label>Um: </label>
                        <span>{data.um}</span>
                      </div>


                    </div>

                  }</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))
          }
        </Accordion>
      </div>
    </div>
  )
}


