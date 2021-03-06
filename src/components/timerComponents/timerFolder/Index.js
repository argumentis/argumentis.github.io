import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ContainedButtons from '../button'
import NavTabs from '../../tableBar'
import InputTaskName from '../input'
import Alert from '../../alert'
import { connect } from 'react-redux'
import { setBtnName, setText, setLog } from '../../../reducersFolder/mainReducer'
import ContainedButtonsGenerate from '../../generate/Index'
import { arrPusher } from './helper'
import _ from 'lodash'

const useStylesTimer = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(20),
      borderRadius: '50%'
    }
  },
  positionMainBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  timerAlign: {
    display: 'flex',
    fontWeight: '500',
    fontSize: '18pt',
    color: '#1432c8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerBtnGenerate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: '80px'
  }
}))

const mapStateToProps = store => {
  const { btnName, inputText, tableLog, statusNavBar } = store.main
  return {
    btnName,
    inputText,
    tableLog,
    statusNavBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBtnNameAction: btnName => dispatch(setBtnName(btnName)),
    setInputTextAction: inputText => dispatch(setText(inputText)),
    setLogAction: tableLog => dispatch(setLog(tableLog))
  }
}

function Timer (props) {
  const { setBtnNameAction, btnName, setInputTextAction, inputText, setLogAction, tableLog, statusNavBar } = props
  const classesTimer = useStylesTimer()
  const currTime = Date.now()
  const [seconds, setSeconds] = useState(0)
  const [intervalID, setIntervalID] = useState(0)
  const [insideBtnStatus, setInsideBtnStatus] = useState(false)
  const resultTime = new Date(1, 1, 1, 0, 0, seconds, 0).toLocaleTimeString()
  const newData = _.cloneDeep(tableLog)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('timerStatus')) === null) {
      localStorage.setItem('timerStatus', false)
    }
    if (JSON.parse(localStorage.getItem('timerStatus')) === true) {
      setBtnNameAction('stop')
      setSeconds((currTime - JSON.parse(localStorage.getItem('dateTimerRun'))) / 1000)
      secondCounter()
    }
  }, [])

  const secondCounter = () => {
    setIntervalID(setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000))
  }

  const inputCheck = () => {
    if (inputText == false) {
      setInsideBtnStatus(true)
    } else {
      if (statusNavBar !== 1) {
        setBtnNameAction('start')
        clearInterval(intervalID)
        setLogAction(arrPusher(newData, currTime, inputText))
        setInputTextAction('')
        localStorage.setItem('timerStatus', false)
        setSeconds(0)
      }
    }
  }

  const timerLoader = () => {
    const TimeRun = Date.now()
    if (JSON.parse(localStorage.getItem('timerStatus')) === false) {
      secondCounter()
      setBtnNameAction('stop')
      localStorage.setItem('dateTimerRun', TimeRun)
      localStorage.setItem('timerStatus', true)
    } else {
      inputCheck()
    }
  }

  return (
    <div>
      <div className={classesTimer.positionMainBlock}>
        <InputTaskName setInputText={setInputTextAction}/>
        <div id='mainTimer' className={classesTimer.positionMainBlock}>
          <div className={classesTimer.root}>
            <Paper elevation={3} className={classesTimer.timerAlign}>{resultTime}</Paper>
          </div>
          <div onClick={timerLoader}><ContainedButtons name={btnName}/></div>
        </div>
        <NavTabs/>
      </div>
      <div className={classesTimer.containerBtnGenerate}>
        <ContainedButtonsGenerate/>
      </div>
      <Alert display={insideBtnStatus} setDisplay={setInsideBtnStatus}/>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)

Timer.propTypes = {
  setBtnNameAction: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
  setInputTextAction: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
  setLogAction: PropTypes.func.isRequired,
  tableLog: PropTypes.array.isRequired,
  statusNavBar: PropTypes.number.isRequired
}
