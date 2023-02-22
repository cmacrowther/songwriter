import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Hero from "../components/Hero";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  color,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <Hero title={title} subtitle={subtitle} img={heroImage} color={color} />
      <section className="section mt-5 section--gradient">
        <div className="container mt-5">
          <div className="columns is-desktop">
            <div className="column is-two-thirds-desktop">
              <div className="content">
                <div className="columns"> 
                  <div className="column pr-5 is-12">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th className="has-text-weight-bold is-vcentered is-size-5">Latest release</th>
                          <th className="is-size-7 has-text-grey has-text-weight-normal is-vcentered is-uppercase is-hidden-mobile">Release date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="level is-mobile media">
                              <div className="level-left">
                                <div class="media-left">
                                  <figure class="image ml-0 mr-0 is-96x96">
                                    <img src={"https://i.scdn.co/image/ab67616d0000b2737aa7bd73fd81e577ef8b74a7"} />
                                  </figure>
                                </div>
                                <div class="media-content">
                                  <p class="title has-text-weight-bold mb-5 is-6">Bring The Whole Hood</p>
                                  <p class="subtitle has-text-grey is-6">Evvie McKinney</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="is-vcentered is-hidden-mobile">
                            <p className="subtitle has-text-grey is-size-6">
                              Sep 30, 2022
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="columns">
                  <div className="column pr-5 is-12">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th className="has-text-weight-bold is-vcentered is-size-5">104 songs written</th>
                          <th className="is-size-7 has-text-grey has-text-weight-normal is-vcentered is-hidden-mobile is-uppercase">Release date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="level is-mobile media">
                              <div className="level-left">
                                <div class="media-left">
                                  <figure class="image ml-0 mr-0 is-96x96">
                                    <img src={"https://i.scdn.co/image/ab67616d0000b2737aa7bd73fd81e577ef8b74a7"} />
                                  </figure>
                                </div>
                                <div class="media-content">
                                  <p class="title has-text-weight-bold mb-5 is-6">Bring The Whole Hood</p>
                                  <p class="subtitle has-text-grey is-6">Evvie McKinney</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="is-vcentered">
                            <p className="subtitle has-text-grey is-hidden-mobile is-size-6">
                              Sep 30, 2022
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="level is-mobile media">
                              <div className="level-left">
                                <div class="media-left">
                                  <figure class="image ml-0 mr-0 is-96x96">
                                    <img src={"https://i.scdn.co/image/ab67616d0000b2737aa7bd73fd81e577ef8b74a7"} />
                                  </figure>
                                </div>
                                <div class="media-content">
                                  <p class="title has-text-weight-bold mb-5 is-6">Bring The Whole Hood</p>
                                  <p class="subtitle has-text-grey is-6">Evvie McKinney</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="is-vcentered">
                            <p className="subtitle has-text-grey is-hidden-mobile is-size-6">
                              Sep 30, 2022
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="level is-mobile media">
                              <div className="level-left">
                                <div class="media-left">
                                  <figure class="image ml-0 mr-0 is-96x96">
                                    <img src={"https://i.scdn.co/image/ab67616d0000b2737aa7bd73fd81e577ef8b74a7"} />
                                  </figure>
                                </div>
                                <div class="media-content">
                                  <p class="title has-text-weight-bold mb-5 is-6">Bring The Whole Hood</p>
                                  <p class="subtitle has-text-grey is-6">Evvie McKinney</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="is-vcentered">
                            <p className="subtitle has-text-grey is-hidden-mobile is-size-6">
                              Sep 30, 2022
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>

              <div className="block mt-5 pt-3">
                <div className="field is-grouped">
                  <div className="control">
                    <button class="button is-mobile is-success has-text-weight-bold is-rounded">Show More</button>
                  </div>
                </div>
              </div>

            </div>
            <div className="column pl-5 is-one-thirds-desktop">
              <div className="block">
                <h3 className="has-text-weight-bold mt-3 is-size-5">
                  Top artist collaboraters
                </h3>
              </div>
              <div className="block">
                <div className="media mb-0 mt-0 is-borderless is-mobile level">
                  <div className="level-left">
                    <div className="media-left">
                      <figure className="image is-rounded is-48x48">
                        <img className="is-rounded" src={"https://i.scdn.co/image/ab6761610000e5ebaed3c717bf1753ab928ea88d"} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title has-text-weight-bold is-6">Meghan Trainor</p>
                    </div>
                  </div>
                </div>
                <div className="media mb-0 mt-0 is-borderless is-mobile level">
                  <div className="level-left">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img className="is-rounded" src={"https://i.scdn.co/image/ab67616d0000b2737aa7bd73fd81e577ef8b74a7"} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title has-text-weight-bold is-6">Common Kings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block mt-5 pt-3">
                <div className="field is-grouped">
                  <div className="control">
                    <button class="button is-success has-text-weight-bold is-mobile is-rounded">Listen on Spotify</button>
                  </div>
                  <div className="control">
                    <button class="button has-text-weight-bold is-rounded">Share</button>
                  </div>
                </div>
              </div>
              <div className="block mt-5 pt-3">
                <p className="title has-text-weight-bold is-size-6 pb-1">This page is managed by {title}</p>
                <p className="subtitle has-text-grey is-size-6">Publishers are working with Spotify to enable songwriter pages. Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
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
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
      }
    }
  }
`;