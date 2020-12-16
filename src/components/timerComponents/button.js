import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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

export default function ContainedButtons (props) {
  const classes = useStyles()
  const { name } = props

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary">{name}</Button>
    </div>
  )
}

ContainedButtons.propTypes = {
  name: PropTypes.string.isRequired
}
