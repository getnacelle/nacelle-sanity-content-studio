import React, { useContext } from 'react'
import PropTypes from 'prop-types'

// import styled from 'styled-components'
import { Container, Menu, MenuItem, Box, Text, Flex, studioTheme, ThemeProvider, Layer } from '@sanity/ui'
import { HandleContext } from '../context/handleContext'

const Thumb = ({ src }) => {
  return (
    <div style={{width: '3rem', height: '3rem', background: `url(${src})`}} />
  )
}
Thumb.propTypes = {
  src: PropTypes.string
}

const Entry = ({ item }) => {
  const { setHandle } = useContext(HandleContext)
  return (
    <MenuItem paddingX={2} onClick={() => setHandle(item.handle)}>
      <Flex>
        {item.featuredMedia &&
          <Thumb src={item.featuredMedia.thumbnailSrc} />
        }
        <Box padding={3} flex={1}>
          <Text size={2}>
            {item.title} <span style={{color: '#89a'}}>({item.handle})</span>
          </Text>
        </Box>
      </Flex>
    </MenuItem>
  )
}

Entry.propTypes = {
  item: PropTypes.object
}

const Gallery = ({ data }) => {
  return (
    <ThemeProvider theme={studioTheme}>
      <Layer>
        <Container overflow="auto" style={{maxHeight: '16rem', border: '1px solid #ddd', marginRight: '4px'}}>
          <Menu space={1} style={{marginTop: '1rem'}}>
            {data &&
              data.map((item) => <Entry item={item} key={item.globalHandle} />)}
          </Menu>
        </Container>
      </Layer>
    </ThemeProvider>
  )
}

Gallery.propTypes = {
  data: PropTypes.array
}

export default Gallery
