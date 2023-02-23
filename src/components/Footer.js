import * as React from "react";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  
    return (
      <footer className="footer mt-6 has-background-black has-text-white-ter">
        <section className="section pb-5 pt-0">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns pb-5">
              <div className="column m-4 is-8-touch is-12-mobile">
                <p className="has-text-weight-light has-text-grey-light is-size-7">Copyright • <a href="admin">Login</a></p>
              </div>

              <div className="column m-4 is-10-mobile has-text-right-desktop has-text-left-mobile social">
                <a title="facebook" className="ml-0" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
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
