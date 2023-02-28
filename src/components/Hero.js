import React from "react";
import { getSrc  } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import ColorHelper from "../utils/ColorHelper.js"

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
    <section className="hero is-medium" style={{background: 'linear-gradient(356deg, ' + theme_color + ' 0%, ' + ColorHelper.shadeColor(theme_color, 20) + ' 100%)'}}>
      <div className="hero-head">
        <nav className="navbar">
          <section className="section mt-0 mb-0 pt-0 pb-0" style={{width: "100%"}}>
            <div className="container">
              <div className="columns">
                <div className="column p-5 is-12">
                  <div style={{width: "100%"}}>
                    <div className="level navbar-brand">
                      <a href="/" className="level-left navbar-item ml-0 pl-0" style={{color: ColorHelper.pickSubtitleColor(theme_color)}}>
                        <h1 className="has-text-weight-light is-size-5">Songwriter<FontAwesomeIcon className="pl-1" size="1x" icon={brands('js')} flip style={{"--fa-animation-duration": "3s", "--fa-animation-iteration-count": "1"}} /></h1>
                      </a>
                      <a href="/admin" className="admin-login level-right button has-text-weight-semibold mt-1 is-info" style={{backgroundColor: ColorHelper.shadeColor(theme_color, -10) }}>
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
                <div className="artist-image" style={{ backgroundImage: "url(" + img + ")" }} />
              ) : (
                <div className="artist-image" style={{ backgroundImage: "url(" + getSrc(img) + ")" }} />
              )}
              </figure>
              <p className="title has-text-weight-bold is-size-2" style={{color: ColorHelper.pickTitleColor(theme_color)}}>
                {title}
              </p>
              <p className="subtitle has-text-weight-light is-size-4" style={{color: ColorHelper.pickSubtitleColor(theme_color)}}>
                {subtitle}
              </p>
              <div className="tags are-small is-centered">
                {tags.map(function (value, index) { return (<span key={index} className="tag is-info" style={{backgroundColor: ColorHelper.shadeColor(theme_color, -10)}}>{value}</span>)})}
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
                      <div className="artist-image" style={{ backgroundImage: "url(" + img + ")" }} />
                    ) : (
                      <div className="artist-image" style={{ backgroundImage: "url(" + getSrc(img) + ")" }} />
                    )}
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title has-text-weight-bold is-size-1-tablet is-size-3-touch" style={{color: ColorHelper.pickTitleColor(theme_color)}}>
                      {title}
                    </p>
                    <p className="subtitle has-text-weight-light is-size-3-tablet is-size-5-touch" style={{color: ColorHelper.pickSubtitleColor(theme_color)}}>
                      {subtitle}
                    </p> 
                    <div className="tags are-medium">
                      {tags.map(function (value, index, array) { return (<span key={index} className="tag is-info" style={{backgroundColor: ColorHelper.shadeColor(theme_color, -10)}}>{value}</span>)})}
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