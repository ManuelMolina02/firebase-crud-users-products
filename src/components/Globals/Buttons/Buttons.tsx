import { FormEvent } from 'react'
import { AiOutlineClear } from 'react-icons/ai'
import { MdClear } from 'react-icons/md'
import styles from './buttons.module.scss'

interface ButtonProps {
  title?: string,
  theme: string,
  action?: (event: FormEvent<Element>) => void
}

export function Button({ theme, action, title }: ButtonProps) {

  const typeTheme = selectType(theme)

  return (

    <button
      className={`${styles.createUser} ${typeTheme.style}`}
      onClick={action}
      type='button'
    >
      {title}
      {typeTheme.content}
    </button>

  )
}

function selectType(type: string) {
  if (type === 'create') {
    return {
      content: 'Criar',
      style: styles.createUser
    }
  } else if (type === 'update') {
    return {
      content: 'Atualizar',
      style: styles.updateUser
    }
  } else if (type === 'delete') {
    return {
      content: <MdClear />,
      style: styles.clearData
    }
  } else if (type === 'clear') {
    return {
      content: <AiOutlineClear />,
      style: styles.clearData
    }
  } else if (type === 'updateAddress') {
    return {
      style: styles.updateAddress
    }
  } else if (type === 'login') {
    return {
      content: 'Entrar',
      style: styles.createUser
    }
  }
}
