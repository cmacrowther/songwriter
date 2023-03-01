import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Error(props) {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-weight-light">
            Songwriter
            <FontAwesomeIcon className="pl-1" size="1x" icon={brands('js')} />
          </p>
        </header>
        <section className="modal-card-body">
          <div className="block">
            <p className="has-text-weight-light is-size-5">
              Thank you for using SongwriterJS. We've noticed the following
              issues with the current instance:
            </p>
          </div>
          <div className="highlight">
            <p className="pb-1">
              <code>Error: {props.error}</code>
            </p>
            <p>
              <code>Description: {props.description}</code>
            </p>
          </div>
          <p className="mt-5 mb-3 has-text-weight-light is-size-5">
            Please refer to the most up-to-date README for Songwriter.js{' '}
            <a href="//gitlab.com/cmacrowther/songwriter">here</a>.
          </p>
        </section>
        <footer className="modal-card-foot">
          <a className="button" href="//gitlab.com/cmacrowther/songwriter">
            <FontAwesomeIcon
              className="mr-3"
              size="1x"
              color="#dba541"
              icon={brands('gitlab')}
            />
            <span style={{ marginLeft: '10px', marginRight: '5px' }}>
              View README
            </span>
          </a>
          <a className="button" href="/admin">
            Admin
          </a>
          <button className="button" onClick={refreshPage}>
            Reload
          </button>
        </footer>
      </div>
    </div>
  )
}

function refreshPage() {
  window.location.reload(false)
}
