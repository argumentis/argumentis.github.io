import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ContainedButtons from '../timerComponents/button'

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
  linkDecoration: {
    textDecoration: 'none',
    color: '#1432c8'
  }
}))

export default function Information (props) {
  const { infoObject } = props
  const classes = useStyles()
  return (
    <div className={classes.mainStyleBlock}>
      <div className={classes.h1Style}>Task information</div>
      <div className={classes.h2Style}><span className={classes.spanStyle}>{'Task name :'}</span> {infoObject.task}</div>
      <div className={classes.h2Style}><span className={classes.spanStyle}>{'Time start :'}</span> {infoObject.timeStart}</div>
      <div className={classes.h2Style}><span className={classes.spanStyle}>{'Time stop :'}</span> {infoObject.timeEnd}</div>
      <div className={classes.h2Style}><span className={classes.spanStyle}>{'Time spend :'}</span> {infoObject.timeSpend}</div>
      <Link className={classes.linkDecoration} to="/timer-task"><ContainedButtons name={'return'}/></Link>
    </div>
  )
}

Information.propTypes = {
  infoObject: PropTypes.array.isRequired
}
