import { TFunctionResult } from 'i18next'
import { FC, ReactChild, ReactChildren } from 'react'
import { Link } from 'wouter'
import './styles.css'

interface Props {
  href?: string
  children: ReactChild | ReactChildren | TFunctionResult
}

const Button: FC<Props> = ({ children, href }) => {
  return href ? (
    <Link href={href}>{children}</Link>
  ) : (
    <button>{children}</button>
  )
}

export default Button
