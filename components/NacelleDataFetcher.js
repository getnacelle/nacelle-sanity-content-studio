import React from 'react'
import PropTypes from 'prop-types'

import useHailFrequency from '../hooks/useHailFrequency'
import Gallery from './Gallery'

const NacelleResults = ({ query, dataHandler, first, after, active }) => {
  const data = useHailFrequency({ query, dataHandler, first, after })

  return <Gallery data={data} active={active} />
}

NacelleResults.propTypes = {
  query: PropTypes.string.isRequired,
  dataHandler: PropTypes.func.isRequired,
  first: PropTypes.number,
  after: PropTypes.string,
  active: PropTypes.bool
}

export default NacelleResults
