import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Footer = (props) => {
  return (
    <footer className="footer mt-6 has-background-black has-text-white-ter">
      <section className="section pb-5 pt-0">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns footer-column pb-5">
              <div className="column footer-item is-8-touch is-12-mobile">
                <p className="has-text-weight-light has-text-grey-light is-size-6">
                  Powered by{' '}
                  <a
                    className="project-link"
                    href="//gitlab.com/cmacrowther/songwriter"
                  >
                    Songwriter
                    <FontAwesomeIcon
                      className="pl-1"
                      size="sm"
                      icon={brands('js')}
                    />
                  </a>
                </p>
              </div>

              <div className="column footer-item is-10-mobile has-text-right-desktop has-text-left-mobile social">
                {props.spotify ? (
                  <a href={props.spotify} className="ml-0">
                    <span className="fa-layers fa-fw fa-2x">
                      <FontAwesomeIcon icon={solid('circle')} />
                      <FontAwesomeIcon
                        icon={brands('spotify')}
                        color="black"
                        transform="shrink-7"
                      />
                    </span>
                  </a>
                ) : (
                  <></>
                )}
                {props.apple ? (
                  <a href={props.apple}>
                    <span className="fa-layers fa-fw fa-2x">
                      <FontAwesomeIcon icon={solid('circle')} />
                      <FontAwesomeIcon
                        icon={brands('apple')}
                        color="black"
                        transform="shrink-7"
                      />
                    </span>
                  </a>
                ) : (
                  <></>
                )}
                {props.bandcamp ? (
                  <a href={props.bandcamp}>
                    <span className="fa-layers fa-fw fa-2x">
                      <FontAwesomeIcon icon={solid('circle')} />
                      <FontAwesomeIcon
                        icon={brands('bandcamp')}
                        color="black"
                        transform="shrink-7"
                      />
                    </span>
                  </a>
                ) : (
                  <></>
                )}
                {props.instagram ? (
                  <a href={props.instagram}>
                    <span className="fa-layers fa-fw fa-2x">
                      <FontAwesomeIcon icon={solid('circle')} />
                      <FontAwesomeIcon
                        icon={brands('instagram')}
                        color="black"
                        transform="shrink-7"
                      />
                    </span>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
