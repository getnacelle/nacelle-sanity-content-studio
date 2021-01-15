import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { MenuItem, Box, Text, Flex } from '@sanity/ui'
import { HandleContext, SearchQueryContext } from '../context'

const Thumb = ({ src }) => {
  return (
    <div style={{ width: '3rem', height: '3rem', background: `url(${src})` }} />
  )
}
Thumb.propTypes = {
  src: PropTypes.string
}

const Entry = ({ item }) => {
  const { setHandle } = useContext(HandleContext)
  const { searchQuery, setSearchQuery } = useContext(SearchQueryContext)
  const hidden = searchQuery ? !item.title.includes(searchQuery) : false

  return (
    <MenuItem
      paddingX={2}
      onClick={() => {
        setHandle(item.handle)
        setSearchQuery(null)
      }}
      style={{ display: hidden ? 'none' : null }}
    >
      <Flex>
        {item.featuredMedia && <Thumb src={item.featuredMedia.thumbnailSrc} />}
        <Box padding={3} flex={1}>
          <Text size={2}>
            {item.title} <span style={{ color: '#89a' }}>({item.handle})</span>
          </Text>
        </Box>
      </Flex>
    </MenuItem>
  )
}

Entry.propTypes = {
  item: PropTypes.object
}

export default Entry
