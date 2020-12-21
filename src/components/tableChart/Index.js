import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import _ from 'lodash'

const mapStateToProps = store => {
  const { tableLog } = store.main
  return {
    tableLog
  }
}

const Charts = (props) => {
  const initialArr = new Array(24)
  const [tableChart, setTableChart] = useState(initialArr.fill(0, 0))
  const { tableLog } = props
  const date = new Date()
  const currDay = date.getDate()
  const currMonth = date.getMonth()
  const taskInfo = tableLog.filter(item => item.day === currDay && item.month === currMonth)

  useEffect(() => {
    setTableChart(initialArr.fill(0, 0))
    timeSort()
  }, [tableLog])

  const mathFunc = (arrStr, matchNum, i) => {
    const copyArr = tableChart
    const stringTimeSpend = arrStr.timeSpendMls
    const intTimeSpend = stringTimeSpend / 60000
    const remainsTime = (intTimeSpend - (60 - +matchNum[1]))
    const remainsTimeHours = Math.floor(remainsTime / 60)
    const currItem = +matchNum[0]
    let nextItem = currItem + 1

    if (stringTimeSpend < (60 - +matchNum[1]) * 60000) {
      copyArr[currItem + 1] += parseFloat(intTimeSpend.toFixed())
    } else {
      copyArr[currItem + 1] += (parseFloat(intTimeSpend.toFixed()) - parseFloat((remainsTime).toFixed()))
      if (remainsTimeHours > 0) {
        for (let i = 0; i < remainsTimeHours; i++) {
          nextItem++
          copyArr[nextItem] = 60
        }
      }
      copyArr[nextItem + 1] = parseFloat((remainsTime % 60).toFixed())
      setTableChart(copyArr)
    }
  }

  const timeSort = () => {
    for (let i = 0; i < taskInfo.length; i++) {
      const currArrayString = taskInfo[i]
      const stringTimeStart = currArrayString.timeStart
      const settings = /\d+/g
      const matchingNumbers = stringTimeStart.match(settings)
      if ((+matchingNumbers[0] + 1) < 24) {
        mathFunc(currArrayString, matchingNumbers, i)
      }
    }
  }

  const options = {
    title: {
      text: 'Time Chart',
      style: {
        color: '#1432c8'
      }
    },
    series: [{
      type: 'column',
      data: tableChart
    }],

    legend: {
      enabled: false
    },
    xAxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
        '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    }
  }

  const DrawChart = () => {
    return (
      <div>
        <HighchartsReact
          onChange={timeSort()}
          highcharts={Highcharts}
          constructorType={'chart'}
          options={options}
        />
     </div>
    )
  }

  return (
      <div>
        <DrawChart/>
      </div>
  )
}

export default connect(mapStateToProps)(Charts)

Charts.propTypes = {
  tableLog: PropTypes.array.isRequired
}
