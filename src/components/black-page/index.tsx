import React from 'react'
import { Container, ContentHeader } from '../../styles/pages/Home'
import { Content } from '../../styles/pages/ProcessamentUrls'

const Pagina: React.FC = () => {
  return (
    <Container>
      <ContentHeader>
        <h2>Minha página incrível</h2>
      </ContentHeader>
      <Content>Meu conteúdo incrível</Content>
    </Container>
  )
}

export default Pagina
