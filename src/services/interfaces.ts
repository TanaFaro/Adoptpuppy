export interface Breed {
  name: string
  origins: string[]
}

interface DogId {
  name: string
  extension: string
}

export interface Dog {
  img: string
  protocol: string
  domain: string
  path: string
  breed: string
  id: DogId
}
