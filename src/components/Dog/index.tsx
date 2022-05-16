import { FC } from 'react'
import { Dog } from 'services/interfaces'
import Button from 'components/Button'
import './styles.css'

interface Props {
  dog: Dog
  withLink?: boolean
}

const DogImg: FC<Props> = ({ dog, withLink = false }) => {
  const img = (
    <img 
      loading="lazy"
      className="App-dog"
      src={dog.img}
      alt={`${dog.breed} - ${dog.id.name}`}
    />
  )

  return withLink ? (
    <Button href={`/dog/${dog.breed}/${dog.id.name}/${dog.id.extension}`}>
      {img}
    </Button>
  ) : (
    img
  )
}

export default DogImg
