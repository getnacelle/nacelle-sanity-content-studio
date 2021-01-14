import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useSWR from 'swr'

import Gallery from './Gallery'

const spaceCredentials = {
  id: process.env.SANITY_STUDIO_NACELLE_SPACE_ID,
  token: process.env.SANITY_STUDIO_NACELLE_SPACE_TOKEN
}

const GET_PRODUCTS = `
  query getProducts($first: Int, $after: String) {
    getProducts(first: $first, after: $after) {
      items {
        featuredMedia {
          thumbnailSrc
        }
        handle
        globalHandle
        title
        tags
      }
      nextToken
    }
  }
`

const GET_COLLECTIONS = `
  query getCollections($first: Int, $after: String) {
    getCollections(first: $first, after: $after) {
      nextToken
      items {
        featuredMedia {
          thumbnailSrc
        }
        handle
        globalHandle
        title
        productLists {
          handles
        }
      }
    }
  }
`

const NacelleResults = ({ title, type, first = 2000, after }) => {
  let query, queryName
  if (type === 'product') {
    query = GET_PRODUCTS
    queryName = 'getProducts'
  } else if (type === 'collection') {
    query = GET_COLLECTIONS
    queryName = 'getCollections'
  }

  const fetcher = async (query) => {
    const res = await window
      .fetch('https://hailfrequency.com/v2/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-nacelle-space-id': spaceCredentials.id,
          'x-nacelle-space-token': spaceCredentials.token
        },
        body: JSON.stringify({
          query,
          variables: { first, after }
        })
      })
      .then((res) => res.json())

    return res && res.data
  }
  const res = useSWR(query, fetcher)
  const [data, setData] = useState([])

  useEffect(() => {
    if (res.error) {
      throw new Error(res.error)
    }

    setData(res && res.data && res.data[queryName] && res.data[queryName].items)
  })

  return (
    <div>
      <h2>{title}</h2>
      <Gallery data={data} />
    </div>
  )
}

NacelleResults.propTypes = {
  spaceCredentials: PropTypes.shape({
    id: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['product', 'collection']),
  first: PropTypes.number,
  after: PropTypes.string,
  endpoint: PropTypes.string
}

export default NacelleResults
