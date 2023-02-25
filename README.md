# Songwriter

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
###
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/cmacrowther/songwriter)

    
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
1. Deploy the template to Netlify [clicking here](https://app.netlify.com/start/deploy?repository=https://gitlab.com/cmacrowther/songwriter). 
1. Enter the Spotify Client ID and Secret when prompted.
1. Allow the application to fully build and deploy
1. In Netlify, go to Site Settings > Identity and enable it
1. Under Identity settings, add an External Provider
1. Under Identity settings, enable Git Gateway and connect it to your repository

## Local Development
```sh
npm install
touch .env.development
```
1. Signup/Login to [Spotify for Developers](https://developer.spotify.com/dashboard)
1. Create a new application and take note of the Client ID and Client Secret
1. Enter/populate the following environment variables in `.env.devlopment`:
```
GATSBY_SPOTIFY_CLIENT_ID=
GATSBY_SPOTIFY_CLIENT_SECRET=
```
4. Then run the following
```sh
gatsby develop
```

# Contributing

[(Back to top)](#table-of-contents)

Your contributions are always welcome! Please submit a merge request. :tada:
