import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import BasicTable from './tableLog/Index'
import Charts from './tableChart/Index'
import { connect } from 'react-redux'
import { setNavBarStatus } from '../reducersFolder/mainReducer'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`
  }
}

function LinkTab (props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '90%',
    paddingTop: 20,
    backgroundColor: theme.palette.background.paper,

    '& .MuiAppBar-colorPrimary': {
      backgroundColor: '#00bcd6'
    }
  }
}))

const mapStateToProps = store => {
  const { statusNavBar } = store.main
  return {
    statusNavBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNavBarStatusAction: statusNavBar => dispatch(setNavBarStatus(statusNavBar))
  }
}

function NavTabs (props) {
  const { setNavBarStatusAction } = props
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    setNavBarStatusAction(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="tasks log" href="/taskLog" {...a11yProps(0)} />
          <LinkTab label="tasks chart" href="/taskChart" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Charts/>
      </TabPanel>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavTabs)

NavTabs.propTypes = {
  setNavBarStatusAction: PropTypes.func.isRequired
}
