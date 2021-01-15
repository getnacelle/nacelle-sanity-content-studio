import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

import { Heading, Box, TextInput, Inline, Button, Tab, TabList } from '@sanity/ui'
import NacelleDataFetcher from './NacelleDataFetcher'
import { GET_PRODUCTS, GET_COLLECTIONS } from '../queries'
import { HandleContext } from '../context/handleContext'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

const handleHailFrequencyData = (res, queryName) =>
  res && res.data && res.data[queryName] && res.data[queryName].items

const DataFetcherTab = styled(NacelleDataFetcher)`
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`

const NacelleProducts = () => (
  <DataFetcherTab
    query={GET_PRODUCTS}
    dataHandler={(res) => handleHailFrequencyData(res, 'getProducts')}
  />
)

const NacelleCollections = () => (
  <DataFetcherTab
    query={GET_COLLECTIONS}
    dataHandler={(res) => handleHailFrequencyData(res, 'getCollections')}
  />
)

// const TabButton = styled(Button)`
//   color: '#000000';
//   padding: '1em';
// `

const TabItem = ({ label, handler, active }) => {
  return (
    <Tab
      className="tablinks"
      onClick={handler}
      style={{ backgroundColor: active ? '#cce8e4' : 'unset' }}
      label={label}
    />
  )
}

TabItem.propTypes = {
  label: PropTypes.string,
  handler: PropTypes.func,
  active: PropTypes.bool
}

// const TabContainer = styled.div`
//   overflow: hidden;
//   border: 1px solid #ccc;
// `

const Interface = ({ dataType, interfaceOpen, children }) => {
  const dataTypes = Array.isArray(dataType) ? dataType.sort() : [dataType]
  const multiTab = dataTypes.length > 1
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Box style={{ display: interfaceOpen ? 'block' : 'none' }}>
      {multiTab && (
        <TabList className="tab">
          {dataTypes.map((type, idx) => (
            <TabItem
              key={type}
              label={type}
              active={activeTab === idx}
              handler={() => setActiveTab(idx)}
            />
          ))}
        </TabList>
      )}
      {[...children].sort()[activeTab]}
    </Box>
  )
}

Interface.propTypes = {
  dataType: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  interfaceOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

const NacelleLinker = ({ type, onChange }) => {
  const [interfaceOpen, setInerfaceOpen] = useState(false)
  const [handle, setHandle] = useState('')

  const selectItem = (handle) => {
    setHandle(handle)
    setInerfaceOpen(false)
  }

  const dataTypeFromOptions = type.options && type.options.dataType
  let dataType

  if (!dataTypeFromOptions) {
    dataType = ['collections', 'products']
  } else {
    dataType = Array.isArray(dataTypeFromOptions)
      ? dataTypeFromOptions
      : [dataTypeFromOptions]
  }

  return (
    <FormField>
      <Heading as="h2" size={1}>
        {type.title}
      </Heading>
      <Box>
        <Inline space={[4]} style={{ marginTop: '1em' }}>
          <TextInput
            value={handle}
            onChange={(event) => onChange(createPatchFrom(event.target.value))}
            disabled
          />
          <Button
            fontSize={[2, 2, 3]}
            mode="ghost"
            padding={[2, 2, 3]}
            text={interfaceOpen ? 'X' : 'Select'}
            tone={interfaceOpen ? 'critical' : 'default'}
            onClick={() => setInerfaceOpen(!interfaceOpen)}
          />
        </Inline>
      </Box>
      <HandleContext.Provider value={{ handle, setHandle: selectItem }}>
        <Interface dataType={dataType} interfaceOpen={interfaceOpen}>
          {dataType.includes('collections') && (
            <NacelleCollections className="tabContent" />
          )}
          {dataType.includes('products') && (
            <NacelleProducts className="tabContent" />
          )}
        </Interface>
      </HandleContext.Provider>
    </FormField>
  )
}

NacelleLinker.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    options: PropTypes.shape({
      dataType: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    })
  }).isRequired,
  onChange: PropTypes.func.isRequired
}

export default React.forwardRef((props, ref) => (
  <NacelleLinker {...props} forwardedRef={ref} />
))
