'use strict'
window.Box = window.Box || {}

Box = function(parentEl, chartId, data) {
  var self = {},
      data,
      parentEl,
      parent,
      chart,
      isAnimating=false,
      timeFormat = d3.time.format("%b %Y"),
      opacityF = 1,
      opacityD = .3,
      pause = false


  self.data = function(newData) {
    if (!arguments.length) return data
    data = newData
    return this
  }

  self.draw = function(parentEl, chartId) {
    d3.select('.box-container.'+toSlug(chartId)).remove()
    d3.select('#'+toSlug(chartId)).remove()

    parent = d3.select(parentEl).classed('boxes '+toSlug(chartId), true)
      .style({
        position: 'relative',
        margin: '0 auto'
      })

    var pds = parent.selectAll('div.pd')
      .data(data)
      .enter()
      .append('div.pd')
      .attr('class', function(d) {
        return 'pd '+toSlug(d.key)
      })
      .on('mousemove',mousemove)
      .on('mouseout',mouseout)

    pds.append('div.time.who')
    pds.append('div.time.text')
    pds.append('div.time.date')

    pds.append('div.hov.who')
    pds.append('div.hov.text')
    pds.append('div.hov.date')
    pds.append('div.hov.scrub')
    pds.append('div.hov.prog')

    return self
  }

  function mousemove (d) {

    var el = d3.select(this)
    var datum = el.datum()
    if(el.classed('active')){
      pause = true
      var w = parseInt(el.style('width'))
      var ex = d3.extent(datum.values.map(function(d){return new Date(d.date)}))

      var x = d3.time.scale()
          .domain(ex)
          .range([0, w])

      el.select('.prog').style('width', (d3.mouse(this)[0]/w)*100+'%')

      var curDate = x.invert(d3.mouse(this)[0])
      var diff = datum.values.map(function(d){return Math.abs((new Date(d.date)) - curDate)})
      var minDist = d3.min(diff)

      parent.selectAll('.pd').classed('hover',false)
      el.classed('hover',true)
      var scrubData = datum.values[diff.indexOf(minDist)]

      el.selectAll('.time').style('display','none')
      el.select('.hov.who').text(scrubData.name)
      el.select('.hov.text').text(scrubData.event)
      el.select('.hov.date').classed('fade',false).text(time(new Date(scrubData.date)))

      el.selectAll('.hov').style('opacity',1)

      setTimeout(function(){
        el.classed('hover',false)
        el.selectAll('.hov').style('opacity',0)
        el.selectAll('.time').style('display','block')
        pause = false
      },3500)
    }
  }

  function mouseover(d) {
  }

  function mouseout(d) {
    parent.selectAll('.pd').classed('hover',false)
    parent.selectAll('.hov').style('opacity',0)
    parent.selectAll('.time').style('display','block')
    pause = false
  }


  self.loop = function(fn,duration){
    function runFn(){
      var t = new Date()
      fn(d3.time.format("%b-%e-%H:%M")(t))
      var s = t.getSeconds()
      // setTimeout(runFn, (80 - s)*1000)
      setTimeout(runFn, duration)
    }
    runFn()
    return this
  }

  self.draw(parentEl, chartId)

  d3.rebind(self,dispatch,'on')
  return self;
}
