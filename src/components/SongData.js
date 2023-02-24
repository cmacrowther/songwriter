
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { useArtist, useTrack } from 'react-spotify-api';
import AudioPlayer from 'react-h5-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

var songs;
var artists;

export const SongDataTemplate = (props) => {

  const itemsPerPage = 10;
  const [counter, setCounter] = useState(0);
  useEffect(() => { setCounter(itemsPerPage) }, [itemsPerPage] )

  const [current_song, setCurrentSong] = useState("");
  useEffect(() => { setCurrentSong() }, [] )

  const { edges: posts } = props.data.allMarkdownRemark;

  const song_ids = [];
  const artists_ids = [];

  posts.map(({ node: post })=>(
    song_ids.push(post.frontmatter.url.split("track/").pop().split("?")[0])
  ))

  const songs_call = GetTracks(song_ids);
  if (songs_call) {
    songs = songs_call;
    songs_call.tracks.map((track)=>(
      track.artists.map((artist)=>(
        !doesContain(artists_ids, artist.id) ? artists_ids.push(artist.id) : false
      ))
    ))
  }

  const artists_call = GetArtists(artists_ids);
  if (artists_call) {
    artists = artists_call;
  }

  return (
    <div>
      <section className="songs section section--gradient">
        <div className="container">
          <div id="audio-bar">
            <AudioPlayer
              src={current_song}
              layout="horizontal-reverse"
              showJumpControls={false}
              customVolumeControls={[]}
              customAdditionalControls={[]}
              autoPlayAfterSrcChange={true}
              customIcons={{
                play: (
                  <FontAwesomeIcon size="sm" color={props.color} icon={solid('circle-play')} style={{ verticalAlign: '10px' }} />
                ),
                pause: (
                  <FontAwesomeIcon size="sm" color={props.color} icon={solid('circle-pause')} style={{ verticalAlign: '10px' }} />
                )
              }}
            />
          </div>
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
                          <td style={{ minWidth: '500px' }}>
                            <div className="album level is-mobile media">
                              <div className="level-left">
                                <div className="media-left">
                                  <button className="album-art image ml-0 mr-0 is-96x96" onClick={() => setCurrentSong(songs?.tracks[0].preview_url)} onKeyDown={() => setCurrentSong(songs?.tracks[0].preview_url)}>
                                    <img alt={songs?.tracks[0].name} src={songs?.tracks[0].album.images[0].url} />
                                    <div className="control-hover">
                                      <FontAwesomeIcon size="3x" color="white" icon={solid('circle-play')} />
                                    </div>
                                  </button>
                                </div>
                                <div className="media-content">
                                  <p className="title has-text-weight-bold mb-5 is-6 is-6 is-size-6-mobile"><a className="song-link" href={songs?.tracks[0].external_urls.spotify}>{songs?.tracks[0].name}</a></p>
                                  <p className="subtitle has-text-grey is-6 is-6 is-size-6-mobile"><a className="song-link" href={songs?.tracks[0].artists[0].external_urls.spotify}>{songs?.tracks[0].artists[0].name}</a></p>
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
                          songs?.tracks.map(function (track, index) { 
                            return (
                              index < counter ?
                              <tr key={index}>
                                <td style={{ minWidth: '500px' }}>
                                  <div className="album level is-mobile media">
                                    <div className="level-left">
                                      <div className="media-left">
                                        <button className="album-art image ml-0 mr-0 is-96x96" onClick={() => setCurrentSong(track.preview_url)} onKeyDown={() => setCurrentSong(track.preview_url)}>
                                          <img alt={track.name} src={track.album.images[0].url} />
                                          <div className="control-hover">
                                            <FontAwesomeIcon size="3x" color="white" icon={solid('circle-play')} />
                                          </div>
                                        </button>
                                      </div>
                                      <div className="media-content">
                                        <p className="title has-text-weight-bold mb-5 is-6 is-6 is-size-6-mobile"><a className="song-link" href={track.external_urls.spotify}>{track.name}</a></p>
                                        <p className="subtitle has-text-grey is-6 is-6 is-size-6-mobile"><a className="song-link" href={track.artists[0].external_urls.spotify}>{track.artists[0].name}</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="is-vcentered is-hidden-mobile">
                                  <p className="subtitle has-text-grey is-size-6 is-6 is-size-6-mobile">
                                    {track.album.release_date}
                                  </p>
                                </td>
                              </tr> : <></>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {
                counter < songs?.tracks.length ?
                <div className="block mt-5 pt-3">
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-mobile is-success has-text-weight-bold is-rounded" onClick={() => setCounter(counter + itemsPerPage)}>Show More</button>
                    </div>
                  </div>
                </div> : <></>
              }
            </div>
            <div className="column m-4 is-one-thirds-desktop">
              <div className="block">
                <h3 className="has-text-weight-bold mt-3 is-size-5">
                  Top artist collaboraters
                </h3>
              </div>

              <div className="block artist-list">
                {
                  artists?.artists.map(function (artist, index) { 
                    
                    return (
                      <a key={index} href={artist.external_urls.spotify} className="collaborator media mb-0 mt-0 is-borderless is-mobile level">
                        <div className="level-left">
                          <div className="media-left">
                            <figure className="image is-rounded is-48x48">
                              <img alt={artist.name} className="is-rounded" src={artist.images[0].url} />
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
                    <a href={ 'mailto:' + props.email }><button className="button has-text-weight-bold is-rounded">Contact</button></a>
                  </div>
                </div>
              </div>
              <div className="block mt-5 pt-3">
                <p className="title has-text-weight-bold is-size-6 pb-1">This page is managed by { props.managed }</p>
                <p className="subtitle has-text-grey is-size-6">{ props.additional }</p>
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
      render = {
        (data, count) => <SongDataTemplate 
                            title={props.title} 
                            color={props.color} 
                            managed={props.managed}
                            additional={props.additional}
                            email={props.email}
                            data={data} 
                            count={count} />
      }
    />
  );
}

function doesContain(array, element){
  return array.indexOf(element) > -1;
};

function GetTracks(song_idsP) {
  const { data } = useTrack(song_idsP)
  return data;
}

function GetArtists(artists_idsP) {
  const { data } = useArtist(artists_idsP)
  return data;
}