import React from 'react'
import { Helmet } from 'react-helmet'
import '../../styles/all.sass'
import '../../styles/styles.css'
import { withPrefix } from 'gatsby'
import ColorHelper from '../../utils/ColorHelper.js'

const site_url = process.env.GATSBY_SITE_URL ? process.env.GATSBY_SITE_URL : ''

export default class Layout extends React.Component {
  constructor({ children }) {
    super()
    this.children = children
  }

  state = {
    color: ColorHelper.shadeColor(this.children?.props.color, 20),
  }

  listenScrollEvent = (e) => {
    const title = document.querySelector('.songs')
    const percentage = 20 - Math.ceil(20 * (window.scrollY / title.offsetTop))

    if (window.scrollY > title.offsetTop) {
      this.setState({ color: '#2b2523' })
    } else {
      this.setState({
        color: ColorHelper.shadeColor(this.children.props.color, percentage),
      })
    }
  }

  componentDidMount() {
    this.setState({
      color: ColorHelper.shadeColor(this.children.props.color, 20),
    })
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const title = 'SongwriterJS • ' + this.children.props.title
    const description =
      this.children.props.subtitle +
      '. View their entire profile on SongwriterJS.'
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content={this.state.color}></meta>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          ></meta>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}assets/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}assets/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}assets/favicon-16x16.png`}
            sizes="16x16"
          />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={site_url} />
          <meta property="og:description" content={description}></meta>
          <meta
            property="og:image"
            content={site_url + `${withPrefix('/')}assets/og-image.png`}
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content={site_url} />
          <meta property="twitter:url" content={site_url} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={site_url + `${withPrefix('/')}assets/og-image.png`}
          />
        </Helmet>
        <div>{this.children}</div>
      </div>
    )
  }
}
