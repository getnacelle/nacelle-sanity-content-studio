import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Stack, Box, Text, Button } from '@sanity/ui'
import { HandleContext } from '../context/handleContext'

const Entry = ({ item }) => {
  const { setHandle } = useContext(HandleContext)
  return (
    <Box>
      <Text size={4}>{item.handle}</Text>
      <Button onClick={() => setHandle(item.handle)}>Select</Button>
    </Box>
  )
}

Entry.propTypes = {
  item: PropTypes.object
}

const Gallery = ({ data }) => {
  return (
    <Stack space={5}>
      {data &&
        data.map((item) => <Entry item={item} key={item.globalHandle} />)}
    </Stack>
  )
}

Gallery.propTypes = {
  data: PropTypes.array
}

export default Gallery
