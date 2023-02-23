import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const SongPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <div>
        <h1>TODO: Update this view to grab realtime spotify information</h1>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
