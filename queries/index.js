export const GET_PRODUCTS = `
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

export const GET_COLLECTIONS = `
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
