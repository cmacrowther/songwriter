import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import SpotifyData from "../components/SpotifyData";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Overscroller from "../components/Overscroller";

/* eslint-disable */

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  color,
  tags,
  isCms,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div style={{ overflow: 'hidden' }}>
      {
        isCms?
        <div className="notification mb-0 is-warning has-text-centered">
          This is a preview only. Spotify data is unable to load within this preview.
        </div>
        :
        <></>
      }
      <Hero title={title} subtitle={subtitle} img={heroImage} color={color} tags={tags} />
      <SpotifyData title={title} isCms={isCms} />
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
      <Overscroller />
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