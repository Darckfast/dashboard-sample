import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { UrlProcessDetails } from '../../components/processament-urls/UrlProcessDetail'

import { Button, Container, ContentHeader } from '../../styles/pages/Home'
import {
  Content,
  DatePickerContainer,
  DatePickerSpan,
  Pagination
} from '../../styles/pages/ProcessamentUrls'

const Home: React.FC = () => {
  const [itemProcessing, setItems] = useState([])

  useEffect(() => {
    const allItems = JSON.parse(localStorage.getItem('items') ?? '[]')

    setItems(() => allItems)
  }, [])

  return (
    <Container>
      <ContentHeader>
        <h2>Processamento</h2>
        <DatePickerSpan>
          data de envio:
          <DatePickerContainer>
            <DayPickerInput onDayChange={day => console.log(day)} />
          </DatePickerContainer>
        </DatePickerSpan>
        <Link href="/processamento/novo-relatorio">
          <Button>Novo relatório</Button>
        </Link>
      </ContentHeader>
      <Content>
        {itemProcessing.map(
          ({ finalStatus, percent, modules, fluxName, date, qtd }, index) => (
            <UrlProcessDetails
              key={index}
              finalStatus={finalStatus}
              percent={percent}
              modules={modules}
              fluxName={fluxName}
              date={date}
              qtd={qtd}
            />
          )
        )}
        <UrlProcessDetails finalStatus="processing" percent="90" />
        <UrlProcessDetails finalStatus="done" percent="100" />
        <UrlProcessDetails finalStatus="done" percent="100" />
        <UrlProcessDetails finalStatus="done" percent="100" />
        <UrlProcessDetails finalStatus="error" percent="0" />

        <Pagination>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </Pagination>
      </Content>
    </Container>
  )
}

export default Home
