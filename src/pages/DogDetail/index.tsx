import { FC, useEffect } from 'react';
import { DefaultParams, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Button from 'components/Button';
import DogImg from 'components/Dog';
import checkImage from 'services/checkImage';
import { Dog } from 'services/interfaces';
import './styles.css';

interface Params extends DefaultParams {
  breed: string
  id: string
  ext: string
}

interface Props {
  params: Params
}

const DogDetail: FC<Props> = ({ params }) => {
  const [, setLocation] = useLocation()
  const { t } = useTranslation()

  const dog: Dog = {
    img: `https://images.dog.ceo/breeds/${params.breed}/${params.id}.${params.ext}`,
    protocol: 'https://',
    domain: 'images.dog.ceo',
    breed: params.breed,
    path: 'breeds',
    id: {
      name: params.id,
      extension: params.ext
    }
  }

  useEffect(() => {
    checkImage(dog.img).then((res) => {
      if (!res) setLocation('/404')
    })
  }, [setLocation, dog.img])

  return (
    <section className="App-page">
      <Helmet>
        <title>
          {dog.id.name} | {t('common.title')}
        </title>
      </Helmet>
      <h2>{t('dogDetail.title')}</h2>
      <div className="App-back">
        <Button href="/">{t('dogDetail.backToHome')}</Button>
      </div>
      <div>
        <DogImg dog={dog} />
      </div>
    </section>
  )
}

export default DogDetail
