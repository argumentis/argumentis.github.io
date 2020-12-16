import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ContainedButtons from '../timerComponents/button'
import ContainedButtonsDelete from './buttonDelete'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  linkDecoration: {
    textDecoration: 'none',
    color: '#1432c8'
  }
})

const mapStateToProps = store => {
  const { tableLog } = store.main
  return {
    tableLog
  }
}

function BasicTable (props) {
  const { tableLog } = props
  const classes = useStyles()
  const uniqid = require('uniqid')

  useEffect(() => {
    if (tableLog.length === 0) {
      localStorage.setItem('arrLog', JSON.stringify([]))
    } else {
      localStorage.setItem('arrLog', JSON.stringify(tableLog))
    }
  }, [tableLog])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">№</TableCell>
            <TableCell align="center">Task</TableCell>
            <TableCell align="center">Time start</TableCell>
            <TableCell align="center">Time end</TableCell>
            <TableCell align="center">time spend</TableCell>
            <TableCell align="center">info</TableCell>
            <TableCell align="center">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableLog.map((row, id) => (
            <TableRow key={uniqid()}>
              <TableCell component="th" scope="row" > {id + 1} </TableCell>
              <TableCell align="center">{row.task}</TableCell>
              <TableCell align="center">{row.timeStart}</TableCell>
              <TableCell align="center">{row.timeEnd}</TableCell>
              <TableCell align="center">{row.timeSpend}</TableCell>
              <TableCell align="center">
                <Link className={classes.linkDecoration} to={`/info/${row.id}`}> <ContainedButtons name={'info'}/></Link>
              </TableCell>
              <TableCell align="center"><ContainedButtonsDelete idTask = {row.id}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default connect(
  mapStateToProps
)(BasicTable)

BasicTable.propTypes = {
  tableLog: PropTypes.array.isRequired
}
