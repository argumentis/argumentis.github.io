import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { GenerateFunc } from './helper'
import { connect } from 'react-redux'
import { setLog } from '../../reducersFolder/mainReducer'

const mapStateToProps = store => {
  const { tableLog, statusNavBar } = store.main
  return {
    tableLog,
    statusNavBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogAction: tableLog => dispatch(setLog(tableLog))
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      borderRadius: '0px'
    },
    '& .MuiButton-containedSecondary': {
      color: '#1432c8',
      backgroundColor: 'white'
    }
  }
}))

function ContainedButtonsGenerate (props) {
  const classes = useStyles()
  const { setLogAction, statusNavBar } = props

  const handleClick = () => {
    if (statusNavBar !== 1) {
      setLogAction(GenerateFunc())
    }
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={handleClick}> generate </Button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainedButtonsGenerate)

ContainedButtonsGenerate.propTypes = {
  setLogAction: PropTypes.func.isRequired,
  statusNavBar: PropTypes.number.isRequired
}
