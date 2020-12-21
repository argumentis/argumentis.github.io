import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ContainedButtons from '../timerComponents/button'

const useStyles = makeStyles(() => ({
  mainStyleBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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

export default function Warning () {
  const classes = useStyles()
  return (
    <div className={classes.mainStyleBlock}>
    <div className={classes.h1StyleWarn}>WARNING!!!</div>
    <div className={classes.h2StyleWarn}>There is no such issue ID</div>
    <Link className={classes.linkDecoration} to="/timer-task"><ContainedButtons name={'return'}/></Link>
    </div>
  )
}
