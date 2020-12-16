import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(0),
      height: theme.spacing(0)
    }
  },
  divRoot: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20%',
    outline: '0'
  },
  modelWiev: {
    width: '55%',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  h1Style: {
    color: '#bd3063',
    fontWeight: '500',
    fontSize: '15pt',
    marginLeft: '5%',
    marginTop: '20px'
  },
  h2Style: {
    color: '#525252',
    marginLeft: '5%',
    marginTop: '20px'
  },
  closeBtnStyle: {
    cursor: 'pointer',
    color: '#58daee',
    fontWeight: '400',
    fontSize: '14pt',
    marginLeft: '90%',
    marginTop: '20px'
  }
}))

export default function Alert (props) {
  const classes = useStyles()
  const { display, setDisplay } = props

  const btnClose = () => { setDisplay(false) }

  return (
   <Modal open={display} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
     <div className={classes.divRoot}>
       <Paper variant="outlined" square className={classes.modelWiev}>
         <div className={classes.h1Style}>Emty task name</div>
         <div className={classes.h2Style}>You are trying close your task without name, enter the title and try again!</div>
         <div className={classes.closeBtnStyle} onClick = {btnClose}>close</div>
       </Paper>
     </div>
   </Modal>
  )
}

Alert.propTypes = {
  setDisplay: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired
}
