import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useSWR from 'swr'
import Gallery from './Gallery'

const fetcher = async (query, first, after) => {
  const res = await window
    .fetch('https://hailfrequency.com/v2/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-nacelle-space-id': process.env.SANITY_STUDIO_NACELLE_SPACE_ID,
        'x-nacelle-space-token': process.env.SANITY_STUDIO_NACELLE_SPACE_TOKEN
      },
      body: JSON.stringify({
        query,
        variables: { first, after }
      })
    })
    .then((res) => res.json())

  return res && res.data
}

const NacelleResults = ({
  query,
  dataHandler = (data) => data,
  title,
  first = 2000,
  after
}) => {
  const res = useSWR([query, first, after], fetcher)
  const [data, setData] = useState([])

  useEffect(() => {
    if (res.error) {
      throw new Error(res.error)
    }

    setData(dataHandler(res))
  })

  return (
    <div>
      <h2>{title}</h2>
      <Gallery data={data} />
    </div>
  )
}

NacelleResults.propTypes = {
  query: PropTypes.string.isRequired,
  dataHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  first: PropTypes.number,
  after: PropTypes.string
}

export default NacelleResults
