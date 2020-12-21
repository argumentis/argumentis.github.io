import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Warning from './warning'
import Information from './info'

const mapStateToProps = store => {
  const { tableLog } = store.main
  return {
    tableLog
  }
}

const Info = (props) => {
  const { tableLog } = props
  const { id } = useParams()
  const taskInfo = tableLog.filter(item => item.id === id)
  const newObj = taskInfo[0] || 'none'

  if (newObj === 'none') return <Warning/>
  return <Information infoObject={newObj}/>
}

export default connect(mapStateToProps)(Info)

Info.propTypes = {
  tableLog: PropTypes.array.isRequired
}
