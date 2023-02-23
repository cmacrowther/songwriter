import React from 'react'

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

export default SongPagePreview
