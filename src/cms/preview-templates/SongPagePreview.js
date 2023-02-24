import React from 'react'
import "../../components/all.sass";

const SongPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <div style={{ backgroundColor: '#f4f4f4', borderBottom: '3px solid #333333;' }}>
        <div className="notification mb-0 is-warning has-text-centered">
          Song data will be populated below once URL has been populated
        </div>
        <section class="hero m-6 mt-0 is-medium">
          <div class="hero-body pt-0 has-text-centered">
            <div class="container">
              <div class="card ml-6 mr-6">
              <div>
                <div class="card-image">
                  <figure class="image">
                    <img src="https://i.scdn.co/image/ab67616d0000b273a4c23346f7cccfac336e5ebd" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title has-text-weight-bold is-size-3">Chin Up</p>
                      <p class="subtitle is-4 has-text-weight-light">Heather</p>
                    </div>
                  </div>
                  <div class="content has-text-weight-light">
                    <time datetime="2016-1-1">Date Released</time>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default SongPagePreview
