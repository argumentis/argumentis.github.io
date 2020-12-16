import _ from 'lodash'

const SET_STATUS = 'SET_STATUS'
const SET_BTNNAME = 'SET_BTNNAME'
const SET_INPUTTEXT = 'SET_INPUTTEXT'
const SET_LOG = 'SET_LOG'
const REMOVE_ROW_LOG = 'REMOVE_ROW_LOG'
const SET_NAV_BAR = 'SET_NAV_BAR'

const initialState = {
  status: false,
  btnName: 'start',
  inputText: '',
  dataObject: {},
  tableLog: JSON.parse(localStorage.getItem('arrLog')) || [],
  taskId: 0,
  statusNavBar: 0
}

export function mainReducer (state = initialState, action) {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.payload }

    case SET_BTNNAME:
      return { ...state, btnName: action.payload }

    case SET_INPUTTEXT:
      return { ...state, inputText: action.payload }

    case SET_LOG:
      return { ...state, tableLog: action.payload }

    case SET_NAV_BAR:
      return { ...state, statusNavBar: action.payload }

    case REMOVE_ROW_LOG:
      return {
        ...state,
        tableLog: _.filter(state.tableLog, function (item) { return item.id !== action.payload })
      }

    default:
      return state
  }
}

export function setText (inputText) {
  return {
    type: 'SET_INPUTTEXT',
    payload: inputText
  }
}

export function setStatus (status) {
  return {
    type: 'SET_STATUS',
    payload: status
  }
}

export function setBtnName (btnName) {
  return {
    type: 'SET_BTNNAME',
    payload: btnName
  }
}

export function setLog (tableLog) {
  return {
    type: 'SET_LOG',
    payload: tableLog
  }
}

export function removeRowLog (taskId) {
  return {
    type: 'REMOVE_ROW_LOG',
    payload: taskId
  }
}

export function setNavBarStatus (statusNavBar) {
  return {
    type: 'SET_NAV_BAR',
    payload: statusNavBar
  }
}
