import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import {
  Button,
  ButtonInfo,
  Container,
  ContentHeader
} from '../../../styles/pages/Home'
import { Content } from '../../../styles/pages/ProcessamentUrls'
import { useDropzone } from 'react-dropzone'
import {
  DropZoneInput,
  FileDetail,
  FileFieldCheck,
  FileFieldsContainer,
  InputFieldCheckBox,
  RelatorioForm
} from '../../../styles/pages/processamento/NovoRelatorio'
import { parse } from 'papaparse'
import { useForm } from 'react-hook-form'
import { SearchInList } from '../../../components/processament-urls/SearchInList'

const NovoRelatorio: React.FC = () => {
  const { handleSubmit, register, reset, setValue } = useForm()
  const [csvFields, setCsvFields] = useState([])
  const [fileName, setFileName] = useState('Nenhum arquivo selecionado')
  const [fluxos] = useState([
    {
      name: 'Fluxo-1',
      modules: [{ module_name: 'Modulo-1' }]
    },
    {
      name: 'Fluxo-2',
      modules: [{ module_name: 'Modulo-2' }]
    },
    {
      name: 'Fluxo-3',
      modules: [{ module_name: 'Modulo-1' }, { module_name: 'Modulo-2' }]
    },
    {
      name: 'Fluxo-4',
      modules: [
        { module_name: 'Modulo-1' },
        { module_name: 'Modulo-2' },
        { module_name: 'Modulo-4' }
      ]
    }
  ])

  const [modulos] = useState([
    'Modulo-1',
    'Modulo-2',
    'Modulo-3',
    'Modulo-4',
    'Modulo-5',
    'Modulo-6',
    'Modulo-7',
    'Modulo-8',
    'Modulo-9'
  ])

  const onDrop = useCallback(([acceptedFiles]) => {
    setFileName(() => acceptedFiles.name)

    console.log(acceptedFiles)
    const res = parse(acceptedFiles, {
      complete: e => {
        const [data] = e.data as any
        setCsvFields(data)
      }
    })
    console.log(res)
    // Do something with the files
  }, [])

  const processar = e => {
    console.log(e)
    const { modulos, fluxName } = e
    const item = {
      id: 'id_incrivel',
      finalStatus: 'processing',
      date: new Date().toISOString(),
      modules: modulos.join(', '),
      fluxName,
      qtd: modulos.length
    }

    const allItems = JSON.parse(localStorage.getItem('items') ?? '[]')

    allItems.push(item)

    localStorage.setItem('items', JSON.stringify(allItems))
    reset()
  }

  const selectFlux = ({ modules, name }) => {
    setValue(
      'modulos',
      modules?.map(m => m.module_name)
    )
    setValue('fluxName', name)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Container>
      <ContentHeader>
        <h2>Novo relatório</h2>
        <Link href="/processamento">
          <ButtonInfo>Voltar</ButtonInfo>
        </Link>
      </ContentHeader>
      <Content>
        <RelatorioForm onSubmit={handleSubmit(processar)}>
          <DropZoneInput {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Solte aqui...</p>
            ) : (
              <p>Arraste o arquivo ou clique para fazer o upload</p>
            )}
          </DropZoneInput>
          <FileDetail>{fileName}</FileDetail>
          <span>Selection o campo da URL:</span>
          <FileFieldsContainer>
            {csvFields.map((csvField, index) => (
              <div key={index}>
                <InputFieldCheckBox
                  value={csvField}
                  name="field"
                  type="radio"
                  {...register('field')}
                  id={index + 'input_field'}
                />
                <FileFieldCheck htmlFor={index + 'input_field'}>
                  {csvField}
                </FileFieldCheck>
              </div>
            ))}
          </FileFieldsContainer>
          <span>Selecione os módulos:</span>
          <SearchInList
            onSelect={selectFlux}
            formProps={register('fluxName')}
            fluxes={fluxos}
          />

          <FileFieldsContainer>
            {modulos.map((modulo, index) => (
              <div key={index}>
                <InputFieldCheckBox
                  value={modulo}
                  name="field"
                  type="checkbox"
                  {...register('modulos')}
                  id={index + 'input_fluxo'}
                />
                <FileFieldCheck htmlFor={index + 'input_fluxo'}>
                  {modulo}
                </FileFieldCheck>
              </div>
            ))}
          </FileFieldsContainer>

          <Button type="submit">Enviar</Button>
        </RelatorioForm>
      </Content>
    </Container>
  )
}

export default NovoRelatorio
