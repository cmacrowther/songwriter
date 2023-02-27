import React from 'react'
import { Helmet } from "react-helmet";
import "./all.sass";
import './styles.css';
import { withPrefix } from "gatsby";

export default class Layout extends React.Component{
  constructor({ children }) {
    super();
    this.props = children.props;
    this.children = children;
  }

  state = {
    color: '#2b2523'
  }

  listenScrollEvent = e => {
    const title = document.querySelector('.songs');

    if (window.scrollY > title.offsetTop) {
      this.setState({color: '#2b2523'});
    } else {
      this.setState({color: this.children.props.color});
    }
  }

  componentDidMount() {
    this.setState({color: this.children.props.color});
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const title = "Songwriter.js • " + this.children.props.title;

    return(
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={title} />
          <meta name="theme-color" content={this.state.color}></meta>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-16x16.png`}
            sizes="16x16"
          />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/og-image.jpg`}
          />
        </Helmet>
        <div>{this.children}</div>
      </div>
     )
   }
}