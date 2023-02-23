
import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { useArtist, useTrack } from 'react-spotify-api';

var songs;
var artists;

export const SongDataTemplate = (props) => {

  const {
    color,
    title,
  } = props;

  const { edges: posts } = props.data.allMarkdownRemark;

  const song_ids = [];
  const artists_ids = [];

  posts.map(({ node: post })=>{
    song_ids.push(post.frontmatter.url.split("track/").pop().split("?")[0]);
  })

  const songs_call = GetTracks(song_ids);
  if (songs_call) {
    songs = songs_call;
    songs_call.tracks.map((track)=>{
      track.artists.map((artist)=>{
        if (!artists_ids.contains(artist.id)) {
          artists_ids.push(artist.id);
        }
      })
    })
  }

  const artists_call = GetArtists(artists_ids);
  if (artists_call) {
    artists = artists_call;
  }

  return (
    <div>
      <section className="songs section section--gradient">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-two-thirds-desktop m-4">
              <div className="content">
                <div className="columns"> 
                  <div className="column is-12">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th className="has-text-weight-bold is-vcentered is-size-5">Latest release</th>
                          <th className="is-size-7 has-text-grey has-text-weight-normal is-vcentered is-uppercase">
                            <span className="is-hidden-mobile">
                              Release date
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="album level is-mobile media">
                              <div className="level-left">
                                <div className="media-left">
                                  <figure className="album-art image ml-0 mr-0 is-96x96">
                                    <img src={songs?.tracks[0].album.images[0].url} />
                                  </figure>
                                </div>
                                <div className="media-content">
                                  <p className="title has-text-weight-bold mb-5 is-6 is-6 is-size-6-mobile">{songs?.tracks[0].name}</p>
                                  <p className="subtitle has-text-grey is-6 is-6 is-size-6-mobile">{songs?.tracks[0].artists[0].name}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="is-vcentered is-hidden-mobile">
                            <p className="subtitle has-text-grey is-size-6 is-6 is-size-6-mobile">
                              {songs?.tracks[0].album.release_date}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th className="has-text-weight-bold is-vcentered is-size-5">{song_ids.length} songs written</th>
                          <th className="is-size-7 has-text-grey has-text-weight-normal is-vcentered is-uppercase">
                            <span className="is-hidden-mobile">
                              Release date
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          songs?.tracks.map(function (track, index, array) { 
                            return (
                              <tr>
                                <td>
                                  <div className="album level is-mobile media">
                                    <div className="level-left">
                                      <div className="media-left">
                                        <figure className="album-art image ml-0 mr-0 is-96x96">
                                          <img src={track.album.images[0].url} />
                                        </figure>
                                      </div>
                                      <div className="media-content">
                                        <p className="title has-text-weight-bold mb-5 is-6 is-6 is-size-6-mobile">{track.name}</p>
                                        <p className="subtitle has-text-grey is-6 is-6 is-size-6-mobile">{track.artists[0].name}</p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="is-vcentered is-hidden-mobile">
                                  <p className="subtitle has-text-grey is-size-6 is-6 is-size-6-mobile">
                                    {track.album.release_date}
                                  </p>
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="block mt-5 pt-3">
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-mobile is-success has-text-weight-bold is-rounded">Show More</button>
                  </div>
                </div>
              </div>

            </div>
            <div className="column m-4 is-one-thirds-desktop">
              <div className="block">
                <h3 className="has-text-weight-bold mt-3 is-size-5">
                  Top artist collaboraters
                </h3>
              </div>

              <div className="block">
                {
                  artists?.artists.map(function (artist, index, array) { 
                    
                    return (
                      <a href={artist.external_urls.spotify} className="collaborator media mb-0 mt-0 is-borderless is-mobile level">
                        <div className="level-left">
                          <div className="media-left">
                            <figure className="image is-rounded is-48x48">
                              <img className="is-rounded" src={artist.images[0].url} />
                            </figure>
                          </div>
                          <div className="media-content">
                            <p className="title has-text-weight-bold is-6 has-text-dark">{artist.name}</p>
                          </div>
                        </div>
                      </a>
                    )
                  })
                }
              </div>
              <div className="block mt-5 pt-3">
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-success has-text-weight-bold is-mobile is-rounded">Listen on Spotify</button>
                  </div>
                  <div className="control">
                    <button className="button has-text-weight-bold is-rounded">Share</button>
                  </div>
                </div>
              </div>
              <div className="block mt-5 pt-3">
                <p className="title has-text-weight-bold is-size-6 pb-1">This page is managed by {props.title}</p>
                <p className="subtitle has-text-grey is-size-6">This is an area for content speaking about how to get in contact with the artist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

SongDataTemplate.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }
  

export default function SongData(props) {
  return (
    <StaticQuery
      query={graphql`
      query songQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "song" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  song
                  url
                  templateKey
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <SongDataTemplate title={props.title} color={props.color} data={data} count={count} />}
    />
  );
}

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

function GetTracks(song_idsP) {
  const { data, error, loading } = useTrack(song_idsP)
  return data;
}

function GetArtists(artists_idsP) {
  const { data, error, loading } = useArtist(artists_idsP)
  return data;
}