import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useHailFrequency } from '../hooks'
import { SearchOptionsContext } from '../context'
import Gallery from './Gallery'

const NacelleResults = ({ query, dataHandler, first, after, active }) => {
  const data = useHailFrequency({ query, dataHandler, first, after })
  const { setSearchOptions } = useContext(SearchOptionsContext)

  useEffect(() => {
    if (active) {
      setSearchOptions(
        data &&
          data.map((entry) => ({
            ...entry,
            value: entry.title
          }))
      )
      return () => {
        setSearchOptions([])
      }
    }
  }, [data, active])

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
