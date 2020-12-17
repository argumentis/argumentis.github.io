import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import ContainedButtons from './timerComponents/button'
import { useParams, Link } from 'react-router-dom'

const mapStateToProps = store => {
  const { tableLog } = store.main
  return {
    tableLog
  }
}

const useStyles = makeStyles(() => ({
  h2Style: {
    color: '#1432c8',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    paddingTop: '30px'
  },
  h1Style: {
    color: 'black',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '28px',
    fontWeight: '500',
    paddingTop: '70px'
  },
  mainStyleBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  spanStyle: {
    color: 'black'
  },
  h2StyleWarn: {
    color: 'black',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    paddingTop: '30px'
  },
  h1StyleWarn: {
    color: 'rgb(189, 48, 99)',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '28px',
    fontWeight: '500',
    paddingTop: '70px'
  },
  linkDecoration: {
    textDecoration: 'none',
    color: '#1432c8'
  }
}))

const Info = (props) => {
  const { tableLog } = props
  const { id } = useParams()
  const taskInfo = tableLog.filter(item => item.id === id)
  const newObj = taskInfo[0] || 'none'
  const classes = useStyles()

  if (newObj === 'none') {
    return (
      <div className={classes.mainStyleBlock}>
        <div className={classes.h1StyleWarn}>WARNING!!!</div>
        <div className={classes.h2StyleWarn}>There is no such issue ID</div>
        <Link className={classes.linkDecoration} to="/timer-task"><ContainedButtons name={'return'}/></Link>
      </div>
    )
  } else {
    return (
      <div className={classes.mainStyleBlock}>
        <div className={classes.h1Style}>Task information</div>
        <div className={classes.h2Style}><span className={classes.spanStyle}>{'Task name :'}</span> {newObj.task}</div>
        <div className={classes.h2Style}><span className={classes.spanStyle}>{'Time start :'}</span> {newObj.timeStart}</div>
        <div className={classes.h2Style}><span className={classes.spanStyle}>{'Time stop :'}</span> {newObj.timeEnd}</div>
        <div className={classes.h2Style}><span className={classes.spanStyle}>{'Time spend :'}</span> {newObj.timeSpend}</div>
        <Link className={classes.linkDecoration} to="/timer-task"><ContainedButtons name={'return'}/></Link>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Info)

Info.propTypes = {
  tableLog: PropTypes.array.isRequired
}
