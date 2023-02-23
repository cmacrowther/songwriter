import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <div>
        <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        subtitle={data.subtitle}
        color={data.color}
        tags={data.tags}
        managed={data.managed}
        email={data.email}
        additional={data.additional}
        spotify={data.spotify}
        instagram={data.instagram}
        apple={data.apple}
        bandcamp={data.bandcamp}
        isCms={true}
        />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
