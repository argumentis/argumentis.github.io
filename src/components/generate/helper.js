export const GenerateFunc = () => {
  const uniqid = require('uniqid')
  const currTime = Date.now()
  const arr = []
  for (let i = 0; i < 10; i++) {
    const prevTimeEnd = i === 0 ? currTime - 36800000 : arr[i - 1]
    const timeStart = i === 0 ? prevTimeEnd : prevTimeEnd.timeEndMls + 600000
    const timeSpend = Math.floor(Math.random() * 5400000)
    const timeEnd = timeSpend + timeStart
    const date = new Date()
    const timeDay = date.getDate()
    const timeMonth = date.getMonth()
    arr.push({
      id: uniqid(),
      task: `task ${i + 1}`,
      timeStart: new Date(1, 1, 1, 0, 0, 0, timeStart).toLocaleTimeString(),
      timeEnd: new Date(1, 1, 1, 0, 0, 0, timeEnd).toLocaleTimeString(),
      timeSpend: new Date(1, 1, 1, 0, 0, 0, timeSpend).toLocaleTimeString(),
      timeStartMls: timeStart,
      timeEndMls: timeEnd,
      timeSpendMls: timeSpend,
      day: timeDay,
      month: timeMonth
    })
  }
  localStorage.setItem('arrLog', JSON.stringify(arr))
  return (arr)
}
