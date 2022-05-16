import { API_URL } from './constants'
import { Breed, Dog } from './interfaces'

const messageToDogs = (message: []): Dog[] => {
  return message.map((m: string) => {
    const [protocol, , domain, path, breed, id] = m.split('/')
    const [name, extension] = id.split('.')

    return {
      img: m,
      protocol: `${protocol}//`,
      domain,
      path,
      breed,
      id: { name, extension }
    }
  })
}

export const getDogs = (breed: Breed['name']): Promise<Dog[]> => {
  return fetch(`${API_URL}/breed/${breed}/images/random/10`)
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `Unexpected error when trying to obtain the dogs of the breed ${breed}`
        )

      return res.json()
    })
    .then((res) => {
      const { message } = res

      return messageToDogs(message)
    })
}
