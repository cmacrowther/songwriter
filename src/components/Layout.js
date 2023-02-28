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
    color: shadeColor(this.children?.props.color, 20)
  }

  listenScrollEvent = e => {
    const title = document.querySelector('.songs');
    const percentage = 20 - (Math.ceil(20 * (window.scrollY/title.offsetTop)));

    if (window.scrollY > title.offsetTop) {
      this.setState({color: '#2b2523'});
    } else {
      this.setState({color: shadeColor(this.children.props.color, percentage)});
    }
  }

  componentDidMount() {
    this.setState({color: shadeColor(this.children.props.color, 20)});
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
            href={`${withPrefix("/")}assets/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}assets/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}assets/favicon-16x16.png`}
            sizes="16x16"
          />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}assets/og-image.jpg`}
          />
        </Helmet>
        <div>{this.children}</div>
      </div>
     )
   }
}

function shadeColor(color, percent) {

  if (color) {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
  } else {
    return null;
  } 
}