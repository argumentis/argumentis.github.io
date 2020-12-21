export const arrPusher = (arr, currTime, inputText) => {
  const uniqid = require('uniqid')
  const date = new Date()
  const timeDay = date.getDate()
  const timeMonth = date.getMonth()
  arr.push({
    id: uniqid(),
    task: inputText,
    timeStart: new Date(1, 1, 1, 0, 0, 0, JSON.parse(localStorage.getItem('dateTimerRun')) + 7200000).toLocaleTimeString(),
    timeEnd: new Date(currTime).toLocaleTimeString(),
    timeSpend: new Date(1, 1, 1, 0, 0, 0, currTime - JSON.parse(localStorage.getItem('dateTimerRun'))).toLocaleTimeString(),
    timeStartMls: JSON.parse(localStorage.getItem('dateTimerRun')) + 7200000,
    timeEndMls: currTime,
    timeSpendMls: currTime - JSON.parse(localStorage.getItem('dateTimerRun')),
    day: timeDay,
    month: timeMonth
  })
  localStorage.setItem('arrLog', JSON.stringify(arr))
  return (arr)
}
