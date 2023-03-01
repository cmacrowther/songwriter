# Songwriter

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
###
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/cmacrowther/songwriter)
###
[![Netlify Status](https://api.netlify.com/api/v1/badges/77eb81ae-893c-4808-9efb-80df7d8e87a3/deploy-status)](https://app.netlify.com/sites/songwriter/deploys)

    
###

[Access the live demo](https://songwriter.netlify.app/)

###

Songwriter is a static-site template that serves as a personal portfolio of a musician's songwriting credits and collaborations. It is inspired by the [Spotify Songwriter](https://artists.spotify.com/en/blog/songwriter-pages) pages that are currently only available to popular/mainstream artists such as Justin Trantor, Meghan Trainor and Missy Elliot.

You can deploy directly to Netlify using the badge above.


# Table of contents

- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)

# Installation

[(Back to top)](#table-of-contents)

## Deploy to Netlify
1. Signup/Login to [Spotify for Developers](https://developer.spotify.com/dashboard)
1. Create a new application and take note of the Client ID and Client Secret
1. Deploy the template to Netlify [clicking here](https://app.netlify.com/start/deploy?repository=https://gitlab.com/cmacrowther/songwriter)
1. Enter the Spotify Client ID and Secret when prompted
1. Allow the application to fully build and deploy
1. In Netlify, go to Site Settings > Identity and enable it
1. Under Identity settings, add an External Provider
1. Under Identity settings, enable Git Gateway and connect it to your repository
    1. **OPTIONAL** I would recommend creating your own project access token that does not expire. Make sure to give Maintainer/Owner level rights

## Local Development
```sh
npm install
touch .env.development
```
1. Signup/Login to [Spotify for Developers](https://developer.spotify.com/dashboard)
1. Create a new application and take note of the Client ID and Client Secret
1. Enter/populate the following environment variables in `.env.devlopment`:
```
GATSBY_SPOTIFY_CLIENT_ID=**ENTER CLIENT ID**
GATSBY_SPOTIFY_CLIENT_SECRET=**ENTER SECRET**
GATSBY_SITE_URL=http://localhost:8000/
```
4. Then run the following
```sh
gatsby develop
```

# Usage

Once deployed you can view the application. Login to the CMS using your OAuth credentials and start adding songs using Spotify links. 

By default, Songwriter.js will use the 30-second Spotify preview. ***Beta Feature:*** Alternatively, you can provide a link to an MP3 file if you would rather Songwriter.js be able to play entire songs.

# Contributing

[(Back to top)](#table-of-contents)

Your contributions are always welcome! Please submit a merge request. :tada:
