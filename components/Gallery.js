import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

Gallery.propTypes = {
  data: PropTypes.array
}

export default Gallery
