import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import SpotifyData from "../components/SpotifyData";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

/* eslint-disable */

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  color,
  tags
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <Hero title={title} subtitle={subtitle} img={heroImage} color={color} tags={tags} />
      <SpotifyData title={title} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  tags: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        color={frontmatter.color}
        tags={frontmatter.tags}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        color
        tags
      }
    }
  }
`;