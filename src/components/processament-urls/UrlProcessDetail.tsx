import React, { useState, useEffect } from 'react'
import { ChevronIcon } from '../../styles/icons/chevronIcon'
import { Button } from '../../styles/pages/Home'
import {
  UrlProcess,
  UrlProcessExpandDetails,
  UrlProcessStatus
} from '../../styles/pages/ProcessamentUrls'

export const UrlProcessDetails: React.FC<any> = ({
  reportId,
  finalStatus,
  modules,
  fluxName,
  date,
  qtd
}) => {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState(null)
  const [percent, setPercent] = useState(0)

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  useEffect(() => {
    setStatus(finalStatus)
  }, [])

  useEffect(() => {
    if (percent < 100 && finalStatus === 'processing') {
      const timeout = setTimeout(() => {
        setPercent(perc => {
          if (perc >= 100) {
            setStatus('done')
            return 100
          }

          return perc + 1
        })
      }, getRandomInt(500, 1000))

      return () => {
        clearTimeout(timeout)
      }
    }

    if (percent >= 100 && status === 'processing') {
      setStatus('done')
    }

    if (finalStatus === 'done') {
      setPercent(100)
    }
  }, [percent])

  return (
    <div>
      <UrlProcess>
        <span>ID: {reportId ?? 'id_do_relatorio'}</span>
        <span>{percent}%</span>
        <UrlProcessStatus className={status}>{status}</UrlProcessStatus>
        <ChevronIcon
          className={open ? 'open' : ''}
          onClick={() => setOpen(open => !open)}
        />
      </UrlProcess>
      <UrlProcessExpandDetails className={open ? 'open' : ''}>
        <span className="detalhe">
          Data do envio:<span>{date ?? '25/08/2021'}</span>
        </span>
        <span className="detalhe">
          Fluxo:<span>{fluxName ?? 'Fluxo custom'}</span>
        </span>
        <span className="detalhe">
          Módulos executados:
          <span>{modules}</span>
        </span>

        <span className="detalhe">
          Quantidade Urls:<span>{qtd ?? 15513}</span>
        </span>

        <Button className="detalhe" disabled={status !== 'done'}>
          Baixar resultado
        </Button>
      </UrlProcessExpandDetails>
    </div>
  )
}
