// src/templates/tags/archive.js
import React from 'react'
import Layout from '../../components/layout'
import PostEntry from '../../components/post-entry'
//import SEO from '../../components/seo'

const TagArchive = ({ pageContext: { name, posts } }) => (
  <Layout classNames="blog archive">
  {/*  <SEO
      title={`Tag - ${name}`}
      description={`A collection of posts from the ${name} tag.`}
  /> */}
    <section>
      <header className="entry-header">
        <h1 className="entry-title">
          Tag - <span>{name}</span>
        </h1>
      </header>
      {posts.nodes &&
        posts.nodes.map((post) => <PostEntry key={post.id} post={post} />)}
    </section>
  </Layout>
)
