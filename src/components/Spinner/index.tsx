import { FC } from 'react'
import './styles.css'

interface Props {
  loading: boolean
  text?: string
}

const Spinner: FC<Props> = ({ loading, text = '' }) => {
  return loading ? (
    <div id="loader-wrapper">
      <div id="loader"></div>
      {text.length > 0 ? <p>{text}</p> : null}
    </div>
  ) : null
}

export default Spinner
