import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import SpotifyData from "../components/SpotifyData";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

/* eslint-disable */

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  color,
  tags,
  managed,
  additional,
  email,
  spotify,
  apple,
  instagram,
  bandcamp,
  isCms,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="body-scroll">
      {
        isCms?
        <div className="notification mb-0 is-warning has-text-centered">
          This is a preview only. Spotify data is unable to load within this preview.
        </div>
        :
        <></>
      }
      <Hero 
        title={title} 
        subtitle={subtitle} 
        img={heroImage} 
        color={color} 
        tags={tags} />
      <SpotifyData 
        title={title} 
        managed={managed}
        additional={additional}
        email={email}
        color={color}
        isCms={isCms} />
      <Footer 
        spotify={spotify}
        apple={apple}
        instagram={instagram}
        bandcamp={bandcamp} />
    </div>
  );
};


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  tags: PropTypes.array,
  managed: PropTypes.string,
  email: PropTypes.string,
  additional: PropTypes.string,
  color: PropTypes.string,
  spotify: PropTypes.string,
  bandcamp: PropTypes.string,
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
        managed={frontmatter.managed}
        bandcamp={frontmatter.bandcamp}
        email={frontmatter.email}
        additional={frontmatter.additional}
        spotify={frontmatter.spotify}
        apple={frontmatter.apple}
        instagram={frontmatter.instagram}
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
        managed
        email
        additional
        spotify
        apple
        instagram
        bandcamp
      }
    }
  }
`;