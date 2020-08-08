import React from "react"

import { Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import "./postNav.css"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  return (
    <Layout>
      <Heading as="h1" size="xl" mb={5}>
        {title}
      </Heading>

      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
        <Box mb={5}>
          <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
        </Box>
      )}

      <p dangerouslySetInnerHTML={{ __html: content }} />

      <br />
      {/* add pagination styling */}
      
      <div className="post-navigation">
     <div className="nav-links"> 

      {!!nextPage && (
          <Link className="nav_next" to={normalizePath(nextPage.uri)}>Next: {nextPage.title}</Link>
        )}
        <br />
        {!!previousPage && (
          <Link className="nav_previous" to={normalizePath(previousPage.uri)}>
            Previous: {previousPage.title}
          </Link>
        )}
    </div> 
    </div>

    </Layout>
  )
}

export default BlogPost
