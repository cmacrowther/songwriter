import React, { Component } from 'react';
import { encode as base64_encode } from 'base-64';
import { SpotifyApiContext } from 'react-spotify-api';
import SongData from "../components/SongData";
import Skeleton from "../components/Skeleton";
import Error from "../components/Error";

const client_id = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const client_secret = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;

export default class SpotifyData extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  state = {
    token: "",
    error: "",
    description: ""
  };

  componentDidMount() {
    this.getData()
  }

  getData() {
    if (!this.props.title) {
      const error = "Error encountered retrieving data from the CMS";
      const description = "This error can be rectified by accessing the admin panel and updating your 'Site Settings'"
      this.setState({error: error, description: description})
      return
    }

    Token().then(credentials => 
      setTimeout(() => {
        if (credentials.access_token) {
          this.setState({token: credentials.access_token})
        } else {
          const preamble = "Error encountered while generating Spotify Token: ";
          this.setState({error: preamble + credentials.error, description: credentials.error_description})
        }
      }, 1000)
    );
  }

  render() {
    return this.state.token && !this.props.isCms ?  renderSongData(this.props, this.state.token) : renderSkeleton(this.state.error, this.state.description);
  }
}

function renderSkeleton(error, description) {
  return (
    <div>
      { error ? <Error error={error} description={description} /> : <div></div> }
      <Skeleton />
    </div>
  )
}

function renderSongData(props, token) {
  return (
    <SpotifyApiContext.Provider value={token}>
      <SongData 
        managed={props.managed}
        additional={props.additional}
        email={props.email} />
    </SpotifyApiContext.Provider>
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
