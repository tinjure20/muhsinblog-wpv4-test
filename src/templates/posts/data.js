// src/templates/posts/data.js
const PostTemplateFragment = `
  fragment PostTemplateFragment on WpPost {
    id
    databaseId
    
    title
    excerpt
    content
    uri
    slug
    date
    
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
    featuredImage {
      node {
        altText
        uri
        sourceUrl
      }
    }
    author {
      node {
        id
        name
        slug
        avatar {
          url
        }
      }
    }
  }
`
module.exports.PostTemplateFragment = PostTemplateFragment
