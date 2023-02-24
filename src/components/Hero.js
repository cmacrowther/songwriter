import React from "react";
import { getSrc  } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Hero(props) {
  const {
    color,
    img,
    title,
    subtitle,
    tags
  } = props;

  const theme_color = color;

  return (
    <section className="hero is-medium" style={{backgroundColor: theme_color}}>
      <div className="hero-head">
        <nav className="navbar">
          <section className="section mt-0 mb-0 pt-0 pb-0" style={{width: "100%"}}>
            <div className="container">
              <div className="columns">
                <div className="column p-5 is-12">
                  <div style={{width: "100%"}}>
                    <div className="level navbar-brand">
                      <a href="/" className="level-left navbar-item ml-0 pl-0" style={{color: pickSubtitleColor(theme_color)}}>
                        <h1 className="has-text-weight-light is-size-5">Songwriter<FontAwesomeIcon className="pl-1" size="1x" icon={brands('js')} /></h1>
                      </a>
                      <a href="/admin" className="admin-login level-right button has-text-weight-semibold mt-1 is-info" style={{backgroundColor: shadeColor(theme_color, -10) }}>
                        <span>Login</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns level is-hidden-desktop is-mobile is-centered">
            <div className="column is-12 has-text-centered">
              <figure className="image is-128x128 is-inline-block has-text-centered mb-3">
              {img?.url ? (
                <img
                  alt="Artist"
                  src={img}
                  className="is-rounded"
                />
              ) : (
                <img
                  alt="Artist"
                  src={getSrc(img)}
                  className="is-rounded"
                />
              )}
              </figure>
              <p className="title has-text-weight-bold is-size-2" style={{color: pickTitleColor(theme_color)}}>
                {title}
              </p>
              <p className="subtitle has-text-weight-light is-size-4" style={{color: pickSubtitleColor(theme_color)}}>
                {subtitle}
              </p>
              <div className="tags are-small is-centered">
                {tags.map(function (value, index) { return (<span key={index} className="tag is-info" style={{backgroundColor: shadeColor(theme_color, -10)}}>{value}</span>)})}
              </div>
            </div> 
          </div>

          <div className="columns level is-hidden-mobile is-hidden-touch">
            <div className="column is-12">
              <div className="media level" style={{width: "100%"}}>
                <div className="level-left" style={{width: "100%"}}>
                  <div className="media-left pr-4">
                    <figure className="image is-256x256">
                      {img?.url ? (
                        <img
                          alt="Artist"
                          src={img}
                          className="is-rounded"
                        />
                      ) : (
                        <img
                          alt="Artist"
                          src={getSrc(img)}
                          className="is-rounded"
                        />
                      )}
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title has-text-weight-bold is-size-1-tablet is-size-3-touch" style={{color: pickTitleColor(theme_color)}}>
                      {title}
                    </p>
                    <p className="subtitle has-text-weight-light is-size-3-tablet is-size-5-touch" style={{color: pickSubtitleColor(theme_color)}}>
                      {subtitle}
                    </p> 
                    <div className="tags are-medium">
                      {tags.map(function (value, index, array) { return (<span key={index} className="tag is-info" style={{backgroundColor: shadeColor(theme_color, -10)}}>{value}</span>)})}
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}

function shadeColor(color, percent) {

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
}

function pickTitleColor(bgColor) {
  var lightColor = "#ffffff";
  var darkColor = "#111111";
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 6), 16);
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L > 0.179) ? darkColor : lightColor;
}

function pickSubtitleColor(bgColor) {
  var lightColor = "#f4f4f4";
  var darkColor = "#363636";
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); 
  var g = parseInt(color.substring(2, 4), 16); 
  var b = parseInt(color.substring(4, 6), 16); 
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L > 0.179) ? darkColor : lightColor;
}