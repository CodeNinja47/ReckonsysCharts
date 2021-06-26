import React, { useEffect } from 'react'

export default function PieChart({ options }) {
  const { data, colors, legend } = options
  console.log(options)

  useEffect(() => {
    if (
      data &&
      data.length > 0 &&
      colors &&
      colors.length > 0 &&
      data.length === colors.length
    ) {
      drawPieChart(data, colors)
    } else {
      alert('data is missing')
    }
  }, [])

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
      ctx.arc(x, y, y - 100, startAngle, endAngle)
      ctx.fill()

      //ouside legend
      if (legend === 'outside') {
        ctx.rect(canvas.width - 200, y - i * 30, 12, 12)
        ctx.fill()
        ctx.font = '13px sans-serif'
        ctx.fillText(
          data[i].label +
            ' - ' +
            data[i].value +
            ' (' +
            calculatePercent(data[i].value, total) +
            '%)',
          canvas.width - 200 + 20,
          y - i * 30 + 10
        )
      }

      //inside legend
      if (legend === 'inline') {
        var radius = y / 3 //use suitable radius
        var endAngle = lastend + Math.PI * (data[i].value / total)
        var setX = x + Math.cos(endAngle) * radius
        var setY = y + Math.sin(endAngle) * radius
        ctx.fillStyle = '#ffffff'
        ctx.font = '14px sans-serif'
        ctx.fillText(data[i].value, setX, setY)
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

  return <canvas id='pie' width='800' height='500'></canvas>
}
