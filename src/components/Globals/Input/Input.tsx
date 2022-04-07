interface InputProps {
  title: string,
  value: any,
  setData: (data: any) => void,
  maxLength?: number,
  require?: boolean,
  type?: string,
  isSelect?: boolean,

}

export function Input({ title, value, setData, maxLength, require, type }: InputProps) {

  function selectType(type) {
    if (!type) {
      return 'text'
    } else {
      return type
    }
  }

  return (

    <div>
      <label>{title} {require ? <p>*Obrigatório</p> : ''}</label>
      <input
        type={selectType(type)}
        required

        value={value}
        onChange={(event) => setData(event.target.value)}
        maxLength={maxLength}
      />
    </div>

  )
}