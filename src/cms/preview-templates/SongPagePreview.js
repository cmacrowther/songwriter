import React, { useState, useEffect } from 'react';
import { encode as base64_encode } from 'base-64';
import { useTrack, SpotifyApiContext } from 'react-spotify-api'
import "../../styles/all.sass";

const client_id = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const client_secret = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;

const SongPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if(!data) {
    console.log("no data");
  }

  const song_id = data.url.split("track/").pop().split("?")[0];

  const [token, setToken] = useState([]);
  useEffect(() => { setToken() }, [] )

  if(!token) {
    Token().then(credentials => 
      setToken(credentials.access_token)
    );
  }

  if (data) {
    return (
      <div className="song-preview">
        <div className="notification mb-0 is-warning has-text-centered">
          Song data will be populated below once URL has been populated
        </div>
        <section className="hero m-6 mt-0 is-medium">
          <div className="hero-body pt-0 has-text-centered">
            <div className="container">
              <SpotifyApiContext.Provider value={token}>
                <TrackData token={token} song={song_id} />
              </SpotifyApiContext.Provider>
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default SongPagePreview

const TrackData = (props) => {
  const { data } = useTrack(props.song)
  return (
    <div className="card ml-6 mr-6">
      <div className="card-image">
        <figure className="image">
          <img src={ data?.album.images[0].url } alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title has-text-weight-bold is-size-3">{ data?.name }</p>
            <p className="subtitle is-4 has-text-weight-light">{ data?.artists[0].name }</p>
          </div>
        </div>
        <div className="content has-text-weight-light">
          { data?.album.release_date }
        </div>
      </div>
    </div>
  )
}

async function Token() {
  const token = await GetAuthTokenAsync();
  return token;
}

async function GetAuthTokenAsync() {
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + base64_encode(client_id + ':' + client_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials',
    json: true
  })
  .then((response) => response.json())
  .then(function (credentials) {
      return credentials;
    }).catch((err) => {
      console.log(err);
  });
}