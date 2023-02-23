import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
  
    return (
      <footer className="footer mt-6 has-background-black has-text-white-ter">
        <section className="section pb-5 pt-0">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns footer-column pb-5">
              <div className="column m-4 is-8-touch is-12-mobile">
                <p className="has-text-weight-light has-text-grey-light is-size-6">Powered by <a className="project-link" href="#">Songwriter<FontAwesomeIcon className="pl-1" icon={brands('js')} /></a></p>
              </div>

              <div className="column m-4 is-10-mobile has-text-right-desktop has-text-left-mobile social">
                <a className="ml-0" href="#">
                  <span className="fa-layers fa-fw fa-2x">
                    <FontAwesomeIcon icon={solid('circle')} />
                    <FontAwesomeIcon icon={brands('spotify')} color="black" transform="shrink-7" />
                  </span>
                </a>
                <a href="#">
                  <span className="fa-layers fa-fw fa-2x">
                    <FontAwesomeIcon icon={solid('circle')} />
                    <FontAwesomeIcon icon={brands('apple')} color="black" transform="shrink-7" />
                  </span>
                </a>
                <a href="#">
                  <span className="fa-layers fa-fw fa-2x">
                    <FontAwesomeIcon icon={solid('circle')} />
                    <FontAwesomeIcon icon={brands('instagram')} color="black" transform="shrink-7" />
                  </span>
                </a>
                <a href="#">
                  <span className="fa-layers fa-fw fa-2x">
                    <FontAwesomeIcon icon={solid('circle')} />
                    <FontAwesomeIcon icon={brands('bandcamp')} color="black" transform="shrink-7" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>
      </footer>
    );
};

export default Footer;
