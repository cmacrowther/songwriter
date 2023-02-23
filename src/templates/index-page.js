import React from "react";
import PropTypes from "prop-types";
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { SpotifyApiContext } from 'react-spotify-api';

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SongData from "../components/SongData";

/* eslint-disable */

var client_id = process.env.SPOTIFY_CLIENT_ID;
var client_secret = process.env.SPOTIFY_CLIENT_SECRET;
var spotify_token;

console.log(client_id)
console.log(client_secret)

let callApi = async () => {
  const result = await this.getSpotifyApiToken();
  await this.getReq();
};

/*const songs = [];
const artists = [];
tags.skills.map((item)=>{
  console.log(item.skills.name.en);
})*/

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
      {spotify_token}
      <SpotifyApiContext.Provider value={spotify_token}>
        <SongData title={title} color={color} />
      </SpotifyApiContext.Provider>
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

async function getSpotifyApiToken() {
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + base64_encode(client_id + ':' + client_secret),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials',
    json: true
  })
  .then((response) => response.json())
  .then((data) => {
    return spotify_token = data.access_token;
  })
  .catch((err) => {
    console.log(err.message);
  });
}