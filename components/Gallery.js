import React from 'react'
import PropTypes from 'prop-types'

import { Stack, Box, Text } from '@sanity/ui'

const Entry = ({ item }) => (
  <Box>
    <Text size={4}>{item.handle}</Text>
  </Box>
)

Entry.propTypes = {
  item: PropTypes.object
}

const Gallery = ({ data }) => {
  return (
    <Stack space={5}>
      {data.map((item) => (
        <Entry item={item} key={item.globalHandle} />
      ))}
    </Stack>
  )
}

Gallery.propTypes = {
  data: PropTypes.array
}

export default Gallery
