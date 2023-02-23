import React, { Component, PropTypes } from 'react';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import { SpotifyApiContext } from 'react-spotify-api';
import SongData from "../components/SongData";
import Skeleton from "../components/Skeleton";

const client_id = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const client_secret = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;

export default class SpotifyData extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  state = {
    token: ""
  };

  componentDidMount() {
    this.getData()
  }

  getData() {
    Token().then(AuthToken => 
      setTimeout(() => {
        this.setState({token: AuthToken})
      }, 1000)
    );
  }

  render() {
    return this.state.token && !this.props.isCms
      ? 
      <SpotifyApiContext.Provider value={this.state.token}>
        <SongData title={this.props.title} />
      </SpotifyApiContext.Provider>
      : 
      <Skeleton />
  }
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
      return credentials.access_token;
    }).catch((err) => {
    console.log(err.message);
  });
}
