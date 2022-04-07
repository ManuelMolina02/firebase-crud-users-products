import { useEffect, useState } from 'react'
import { productProps } from '../../../service/types'
import { setNewProduct, updateProduct } from '../../../service/database'

import { ButtonsForm } from './ButtonsForm/ButtonsForm'
import { FormProduct } from './/FormProduct/FormProduct'
import Alert from 'react-bootstrap/Alert'

import styles from './form.module.scss'



interface formProps {
  productId: string
  products: productProps[]
}

export function Form({ products, productId }: formProps) {

  //Produto
  const [codigoCliente, setCodigoCliente] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')
  const [pesoBruto, setPesoBruto] = useState<number>(0)
  const [pesoLiquido, setPesoLiquido] = useState<number>(0)
  const [grupo, setGrupo] = useState<string>('')
  const [um, setUm] = useState<string>('')


  //Estado dos Botões Dinâmicos
  const [updateUserBtn, setUpdateUserBtn] = useState<boolean>(false)
  const [newAdressBtn, setNewAddressBtn] = useState<boolean>(false)

  //Estado dos Alertas
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const productData = {
    codigoCliente,
    descricao,
    pesoBruto,
    pesoLiquido,
    grupo,
    um,
  }

  //Atualizando Dados de Produto para Formulário
  useEffect(() => {
    if (productId) {
      const product = products.find(data => data.key === productId)
      setCodigoCliente(product?.codigoCliente)
      setDescricao(product?.descricao)
      setPesoBruto(product?.pesoBruto)
      setPesoLiquido(product?.pesoLiquido)
      setGrupo(product?.grupo)
      setUm(product?.um)


      setUpdateUserBtn(true)
    }
  }, [productId])


  //Controles do Forumulário
  function clearInputs() {
    setCodigoCliente('')
    setDescricao('')
    setPesoBruto(0)
    setPesoLiquido(0)
    setGrupo('')
    setUm('')
  }

  function cancelProductEdit() {
    setUpdateUserBtn(false)
    clearInputs()
  }

  function handleInputsNewAddress() {
    setUpdateUserBtn(false)
    clearInputs()

  }

  //Reproduzir Alerta em Tela
  function handleAlert(status, message) {
    setAlert(true)
    setStatus(status)
    setMessage(message)

    setTimeout(() => {
      setAlert(false)

    }, 5000)
  }

  //Salvar Novo Produto
  function addNewProduct() {
    if (codigoCliente === '' || descricao === '' || pesoBruto === null || pesoLiquido === null || grupo === '' || um === '') {
      handleAlert('warning', 'Preencha todos os campos')
    } else {
      if (products.find((data) => data.codigoCliente === codigoCliente)) {
        handleAlert('warning', 'Código de cliente já cadastrado')
      } else {
        const produto = productData
        setNewProduct({ produto })

        handleAlert('success', 'Produto cadastrado com sucesso')
        setTimeout(() => {
          setUpdateUserBtn(false)
          clearInputs()
        }, 5000)

        window.location.href = '/home'
      }
    }
  }

  //Atualizar Produto
  function updateProducts() {
    if (codigoCliente === '' || descricao === '' || pesoBruto === null || pesoLiquido === null || grupo === '' || um === '') {
      handleAlert('warning', 'Preencha todos os campos')
    } else {
      const produto = productData
      updateProduct(produto, productId)


      handleAlert('success', 'Produto atualizado com sucesso')
      setTimeout(() => {
        setUpdateUserBtn(false)
        clearInputs()
      }, 5000)

      window.location.href = '/home'

    }
  }



  return (
    <form
      className={styles.form}
    >

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
      <div className={styles.row}>

        {/* Formulários */}
        <FormProduct
          values={{
            codigoCliente,
            descricao,
            pesoBruto,
            pesoLiquido,
            grupo,
            um
          }}

          setValues={{
            setCodigoCliente,
            setDescricao,
            setPesoBruto,
            setPesoLiquido,
            setGrupo,
            setUm
          }}
        />
      </div>

      {/* Controles do Form */}
      <ButtonsForm

        stateButtons={{
          updateUserBtn,
          newAdressBtn
        }}

        functions={{
          clearInputs,
          addNewProduct,
          updateProducts,
          cancelProductEdit,
          handleInputsNewAddress
        }}
      />
    </form>

  )
}
