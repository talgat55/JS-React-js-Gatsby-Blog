import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import { StaticQuery, graphql } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>

  </Layout>
);

export default IndexPage
