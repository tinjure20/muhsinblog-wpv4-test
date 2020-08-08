// src/templates/categories/archive.js
import React from 'react'
import Layout from '../../components/layout'
//import SEO from '../../components/seo'
import PostEntry from '../../components/post-entry'

const CategoryArchive = ({ pageContext: { name, posts } }) => (
  <Layout classNames="blog archive">
  {/*  <SEO
      title={`Category - ${name}`}
      description={`A collection of posts from the ${name} category.`}
  /> */}

    <header className="entry-header">
      <h1 className="entry-title">
        Category - <span>{name}</span>
      </h1>
    </header>

    <section id="blog">
      {posts &&
        posts.nodes &&
        posts.nodes.map((post) => (
          <PostEntry key={post.id} databaseId={post.databaseId} post={post} />
        ))}
    </section>
  </Layout>
)

export default CategoryArchive
