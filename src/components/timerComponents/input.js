import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'

const mapStateToProps = store => {
  const { inputText } = store.main
  return {
    inputText
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: '50px',
      width: '25ch'
    },
    '& .MuiFormLabel-root': {
      color: '#1432c8',
      textAlign: 'center',
      marginLeft: '40px'
    }
  },
  underline: {
    '& ::before': {
      borderBottom: '1px solid rgba(212, 212, 212, 0.42)'
    }
  },
  inputStyle: {
    display: 'absolute',
    alignItems: 'center'
  }
}))

function InputTaskName (props) {
  const classes = useStyles()
  const { setInputText, inputText } = props
  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  return (
    <div id = 'mainInput' className={classes.inputStyle}>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField className={classes.underline} id="standard-basic" label="Name of your task" value={inputText} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default connect(mapStateToProps)(InputTaskName)

InputTaskName.propTypes = {
  setInputText: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired
}
