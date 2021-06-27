import React, { useEffect } from 'react'
import Legend from './Legend'
import styles from './chart.module.css'

export default function PieChart({
  options,
  showLegendSeperately,
  inLineLegend
}) {
  const { data } = options

  useEffect(() => {
    let data1 = [],
      colors = []
    data.map((d) => {
      data1.push({ label: d.label, value: d.val })
      colors.push(d.color)
    })
    if (
      data1 &&
      data1.length > 0 &&
      colors &&
      colors.length > 0 &&
      data1.length === colors.length
    ) {
      var canvas = document.getElementById('pie')
      canvas.width = options.width
      canvas.height = options.height
      var context = canvas.getContext('2d')
      context.clearRect(0, 0, canvas.width, canvas.height)
      drawPieChart(data1, colors)
    } else {
      alert('data is missing')
    }
  }, [showLegendSeperately, inLineLegend, options])

  const drawPieChart = function (data, colors) {
    var canvas = document.getElementById('pie')
    var ctx = canvas.getContext('2d')
    var x = canvas.width / 2
    var y = canvas.height / 2
    var color,
      startAngle,
      endAngle,
      total = getTotal(data)
    var lastend = 0

    for (var i = 0; i < data.length; i++) {
      color = colors[i]
      startAngle = calculateStart(data, i, total)
      endAngle = calculateEnd(data, i, total)

      ctx.beginPath()
      ctx.fillStyle = color
      ctx.moveTo(x, y)
      ctx.arc(x, y, y, startAngle, endAngle)
      ctx.fill()

      //   ouside legend
      // if (showLegendSeperately) {
      //   console.log('inside')
      //   ctx.rect(canvas.width - 200, y - i * 30, 12, 12)
      //   ctx.fill()
      //   ctx.font = '13px sans-serif'
      //   ctx.fillText(
      //     data[i].label +
      //       ' - ' +
      //       data[i].value +
      //       ' (' +
      //       calculatePercent(data[i].value, total) +
      //       '%)',
      //     canvas.width - 200 + 20,
      //     y - i * 30 + 10
      //   )
      // }

      //inside legend
      if (inLineLegend) {
        var radius = y / 2
        var endAngle = lastend + Math.PI * (data[i].value / total)
        var setX = x + Math.cos(endAngle) * radius
        var setY = y + Math.sin(endAngle) * radius
        ctx.fillStyle = '#ffffff'
        ctx.font = '17px Arial'
        ctx.fillText(parseInt((data[i].value / total) * 100) + '%', setX, setY)
        lastend += Math.PI * 2 * (data[i].value / total)
      }
    }
  }

  const calculatePercent = function (value, total) {
    return ((value / total) * 100).toFixed(2)
  }

  const getTotal = function (data) {
    var sum = 0
    for (var i = 0; i < data.length; i++) {
      sum += data[i].value
    }

    return sum
  }

  const calculateStart = function (data, index, total) {
    if (index === 0) {
      return 0
    }

    return calculateEnd(data, index - 1, total)
  }

  const calculateEndAngle = function (data, index, total) {
    var angle = (data[index].value / total) * 360
    var inc = index === 0 ? 0 : calculateEndAngle(data, index - 1, total)

    return angle + inc
  }

  const calculateEnd = function (data, index, total) {
    return degreeToRadians(calculateEndAngle(data, index, total))
  }

  const degreeToRadians = function (angle) {
    return (angle * Math.PI) / 180
  }

  const onDownload = () => {
    var canvas = document.getElementById('pie')
    var image = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    var link = document.createElement('a')
    link.download = 'my-image.png'
    link.href = image
    link.click()
  }

  return (
    <div className={styles.chart_container}>
      <div
        style={{
          marginBottom: '10px'
        }}
      >
        <button onClick={() => onDownload()}>⬇️ Download</button>
      </div>
      <canvas id='pie' />
      <Legend data={options.data} visibility={showLegendSeperately}>
        {' '}
      </Legend>
    </div>
  )
}
