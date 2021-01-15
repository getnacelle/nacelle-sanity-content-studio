import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

import { Heading, Box, TextInput, Inline, Button } from '@sanity/ui'
import NacelleDataFetcher from './NacelleDataFetcher'
import { GET_PRODUCTS, GET_COLLECTIONS } from '../queries'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

const HandleContext = React.createContext('')

const handleHailFrequencyData = (res, queryName) =>
  res && res.data && res.data[queryName] && res.data[queryName].items

const NacelleProducts = () => (
  <NacelleDataFetcher
    query={GET_PRODUCTS}
    dataHandler={(res) => handleHailFrequencyData(res, 'getProducts')}
  />
)

const NacelleCollections = () => (
  <NacelleDataFetcher
    query={GET_COLLECTIONS}
    dataHandler={(res) => handleHailFrequencyData(res, 'getCollections')}
  />
)

const Tab = ({ label, handler, active }) => {
  return (
    <button
      onClick={handler}
      style={{ backgroundColor: active ? '#cce8e4' : 'unset' }}
    >
      {label}
    </button>
  )
}

Tab.propTypes = {
  label: PropTypes.text,
  handler: PropTypes.func,
  active: PropTypes.bool
}

const Interface = ({ dataType, interfaceOpen, children }) => {
  const dataTypes = Array.isArray(dataType) ? dataType.sort() : [dataType]
  const multiTab = dataTypes.length > 1
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <Box style={{ display: interfaceOpen ? 'block' : 'none' }}>
        {multiTab &&
          dataTypes.map((type, idx) => (
            <Tab
              key={type}
              label={type}
              active={activeTab === idx}
              handler={() => setActiveTab(idx)}
            />
          ))}
        {[...children].sort()[activeTab]}
      </Box>
    </>
  )
}

Interface.propTypes = {
  dataType: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  interfaceOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

const NacelleLinker = ({ type, onChange }) => {
  const [interfaceOpen, setInerfaceOpen] = useState(false)
  const handle = useContext(HandleContext)
  const dataType = (type.options && type.options.dataType) || [
    'collections',
    'products'
  ]

  return (
    <HandleContext.Provider>
      <FormField>
        <Heading as="h2" size={1}>
          {type.title}
        </Heading>
        <Box>
          <Inline space={[4]} style={{ marginTop: '1em' }}>
            <TextInput
              value={handle}
              onChange={(event) =>
                onChange(createPatchFrom(event.target.value))
              }
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
        <Interface dataType={dataType} interfaceOpen={interfaceOpen}>
          {dataType.includes('collections') && <NacelleCollections />}
          {dataType.includes('products') && <NacelleProducts />}
        </Interface>
      </FormField>
    </HandleContext.Provider>
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
