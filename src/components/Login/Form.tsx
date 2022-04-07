import { useState } from 'react'

import styles from './form.module.scss'
import Alert from 'react-bootstrap/Alert'

import { ButtonsForm } from './ButtonsForm/ButtonsForm'
import { Input } from '../Globals/Input/Input'

export function Login({ users }) {

  //Campos Formulário
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  //Controles do formulário
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')


  //Realizando login de usuário
  function userLogin() {

    const user = users.find(data => data.username === username)

    if (user) {
      if (user.username === username && user.password === password) {
        setAlert(true)
        setStatus('success')
        setMessage('Login realizado com sucesso!')

        setTimeout(() => {
          setAlert(false)

        }, 5000)

        window.location.href = '/home'

      } else {
        setAlert(true)
        setStatus('danger')
        setMessage('Usuário ou senha incorretos!')
        setTimeout(() => {
          setAlert(false)

        }, 5000)
      }
    } else {
      setAlert(true)
      setStatus('danger')
      setMessage('Usuário não encontrado!')
      setTimeout(() => {
        setAlert(false)

      }, 5000)
    }

  }

  //Limpando campos do Formulário
  function clearInputs() {
    setUsername('')
    setPassword('')
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

        <div className={styles.formUser}>
          <h3>Login de Usuário </h3>
          <div>

            <Input
              title={'Nome'}
              value={username}
              setData={setUsername}
              maxLength={22}
              require={false}
            />

            <Input
              title={'Senha'}
              value={password}
              setData={setPassword}
              maxLength={14}
              require={false}
              type={'password'}

            />
          </div>
        </div>
      </div>

      {/* Controles do Form */}
      <ButtonsForm
        functions={{
          userLogin,
          clearInputs,

        }}
      />
    </form>

  )
}
