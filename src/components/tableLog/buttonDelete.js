import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { removeRowLog } from '../../reducersFolder/mainReducer'

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

const mapStateToProps = store => {
  const { taskId } = store.main
  return {
    taskId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeRowLogAction: taskId => dispatch(removeRowLog(taskId))
  }
}

function ContainedButtonsDelete (props) {
  const classes = useStyles()
  const { idTask, removeRowLogAction } = props

  const deleteRow = () => {
    removeRowLogAction(idTask)
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={deleteRow}>{'delete'}</Button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainedButtonsDelete)

ContainedButtonsDelete.propTypes = {
  removeRowLogAction: PropTypes.func.isRequired,
  idTask: PropTypes.string.isRequired
}
