import React from 'react'

export const Skeleton = () => {
  return (
    <div>
      <section className="songs section section--gradient">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-two-thirds-desktop m-4">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th className="has-text-weight-bold is-vcentered is-size-5">
                            Latest release
                          </th>
                          <th className="is-size-7 has-text-grey has-text-weight-normal is-vcentered is-uppercase">
                            <span className="is-hidden-mobile">
                              Release date
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="skeleton">
                              <div className="skeleton-left">
                                <div className="square"></div>
                              </div>
                              <div className="skeleton-right">
                                <div className="line"></div>
                                <div className="line-two"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th className="has-text-weight-bold is-vcentered is-size-5">
                            Songs written
                          </th>
                          <th className="is-size-7 has-text-grey has-text-weight-normal is-vcentered is-uppercase">
                            <span className="is-hidden-mobile">
                              Release date
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="skeleton">
                              <div className="skeleton-left">
                                <div className="square"></div>
                              </div>
                              <div className="skeleton-right">
                                <div className="line"></div>
                                <div className="line-two"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="block mt-5 pt-3">
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-mobile is-success has-text-weight-bold is-rounded is-loading">
                      Show more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="column m-4 is-one-thirds-desktop">
              <div className="block">
                <h3 className="has-text-weight-bold mt-3 is-size-5">
                  Top artist collaboraters
                </h3>
              </div>
              <div className="block">
                <div className="skeleton">
                  <div className="skeleton-left">
                    <div className="square circle"></div>
                  </div>
                  <div className="skeleton-right">
                    <div className="line"></div>
                  </div>
                </div>
              </div>
              <div className="block mt-5 pt-3">
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-success has-text-weight-bold is-mobile is-rounded is-loading">
                      Listen on Spotify
                    </button>
                  </div>
                  <div className="control">
                    <button className="button has-text-weight-bold is-rounded is-loading">
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <div className="block mt-5 pt-3">
                <div className="skeleton">
                  <div className="skeleton-right">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line-three"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skeleton
