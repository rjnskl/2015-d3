'use strict'
var initData = [
  {
    "key": "Los Angeles Police Department",
    "values": [
      {
        "date": "03/31/1991",
        "event": "Rodney King beaten by LAPD officers on camera",
        "id": "9",
        "name": "Los Angeles, CA",
        "type": "investigation start",
        "details": "Preliminary investigation opened by DOJ",
        "u": 838785600000
      },
      {
        "date": "08/13/1994",
        "event": "Violent Crime Control and Law Enforcement Act signed into law",
        "id": "9",
        "name": "United States",
        "type": "flag",
        "details": "LAPD anti-gang unit (RAMPART) scandal implicating ~70 officers, payments of ~$90M paid to settle civil lawsuits garners national attention",
        "u": 915166800000
      }
    ]
  }
]

var lapdData = [
  {
    "key": "Los Angeles Police Department",
    "values": [
      {
        "date": "1996-07-31T04:00:00.000Z",
        "event": "DOJ investigation",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "investigation start",
        "details": "Preliminary investigation opened by DOJ",
        "u": 838785600000
      },
      {
        "date": "1999-01-01T05:00:00.000Z",
        "event": "LAPD anti-gang unit scandal",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "flag",
        "details": "The LAPD anti-gang unit is embroiled in a scandal implicating more than 70 officers that garners national attention",
        "u": 915166800000
      },
      {
        "date": "1999-09-01T04:00:00.000Z",
        "event": "DOJ investigation findings announced, technical assistance letter issued",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "investigation end",
        "details": "DOJ investigation findings announced, technical assistance letter issued",
        "u": 936158400000
      },
      {
        "date": "1999-09-01T04:00:00.000Z",
        "event": "Negotiations",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "negotiation start",
        "details": "Negotiations",
        "u": 936158400000
      },
      {
        "date": "2000-09-01T04:00:00.000Z",
        "event": "Police union files motion to intervene, which is denied",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "countersuit",
        "details": "LA Police Protective League files motion to intervene, which was denied",
        "u": 967780800000
      },
      {
        "date": "2000-09-03T04:00:00.000Z",
        "event": "DOJ files complaint and consent decree signed",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "complaint",
        "details": "DOJ files complaint against LAPD, consent decree is signed",
        "u": 967953600000
      },
      {
        "date": "2001-06-15T04:00:00.000Z",
        "event": "",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "negotiation end",
        "details": "",
        "u": 992577600000
      },
      {
        "date": "2001-06-15T04:00:00.000Z",
        "event": "Consent decree begins",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "consent start",
        "details": "Consent decree begins",
        "u": 992577600000
      },
      {
        "date": "2009-07-17T04:00:00.000Z",
        "event": "Consent decree turns into transition agreement",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "consent edit",
        "details": "Consent decree ends and transition agreement begins, focusing on the gang units",
        "u": 1247803200000
      },
      {
        "date": "2013-05-16T04:00:00.000Z",
        "event": "Consent decree ends",
        "id": "9",
        "name": "Los Angeles Police Department",
        "type": "consent end",
        "details": "Case is dismissed",
        "u": 1368676800000
      }
    ]
  }
]

var detroitData = [
  {
    "key": "Detroit Police Department",
    "values": [
      {
        "date": "2000-08-29T04:00:00.000Z",
        "event": "Errol Shaw Sr., 48, fatally shot by police",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "flag",
        "details": "Errol Shaw Sr., a 48-year-old who cannot hear or speak, is fatally shot by police",
        "u": 967521600000
      },
      {
        "date": "2000-09-08T04:00:00.000Z",
        "event": "Dwight Turner, 49, fatally shot by police",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "flag",
        "details": "Dwight Turner, 49, is fatally shot by police",
        "u": 968385600000
      },
      {
        "date": "2000-09-22T04:00:00.000Z",
        "event": "Detroit mayor asks DOJ for investigation of police",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "flag",
        "details": "Detroit Mayor Dennis Archer requests DOJ investigation",
        "u": 969595200000
      },
      {
        "date": "2000-12-01T05:00:00.000Z",
        "event": "DOJ investigation",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "investigation start",
        "details": "DOJ investigation",
        "u": 975646800000
      },
      {
        "date": "2003-06-12T04:00:00.000Z",
        "event": "DOJ files complaint",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "complaint",
        "details": "DOJ files complaint",
        "u": 1055390400000
      },
      {
        "date": "2003-06-12T04:00:00.000Z",
        "event": "Consent decree begins",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "consent start",
        "details": "Entered into two consent judgments, one on Use of Force and Arrest and Witness Detention, the other relating to Conditions of Confinement",
        "u": 1055390400000
      },
      {
        "date": "2003-06-12T04:00:00.000Z",
        "event": "DOJ investigation findings announced",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "investigation end",
        "details": "DOJ investigation findings announced",
        "u": 1055390400000
      },
      {
        "date": "2003-06-18T04:00:00.000Z",
        "event": "Detroit City Council files countermotion",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "countersuit",
        "details": "Detroit City Council files countermotion",
        "u": 1055908800000
      },
      {
        "date": "2009-07-24T04:00:00.000Z",
        "event": "Independent monitor resigns",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "",
        "details": "Sheryl Robinson Wood resigns as monitor ",
        "u": 1248408000000
      },
      {
        "date": "2014-08-25T04:00:00.000Z",
        "event": "Consent decree ends, transition agreement begins",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "consent end",
        "details": "Consent decree ends",
        "u": 1408939200000
      },
      {
        "date": "2014-08-25T04:00:00.000Z",
        "event": "Transition agreement",
        "id": "25",
        "name": "Detroit Police Department",
        "type": "negotiation start",
        "details": "Transition agreement",
        "u": 1408939200000
      }
    ]
  }
]

var nolaData=[{
  "key": "New Orleans Police Department",
  "values": [
    {
      "date": "1996-04-15T04:00:00.000Z",
      "event": "DOJ investigation",
      "id": "7",
      "name": "New Orleans Police Department",
      "type": "investigation start",
      "details": "DOJ investigation",
      "u": 829540800000
    },
    {
      "date": "2004-03-23T05:00:00.000Z",
      "event": "Closed without agreement",
      "id": "7",
      "name": "New Orleans Police Department",
      "type": "investigation end",
      "details": "Closed without agreement",
      "u": 1080018000000
    },
    {
      "date": "2010-01-01T05:00:00.000Z",
      "event": "Mayor invites DOJ to review the NOPD",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "flag",
      "details": "Mayor invites DOJ to review the NOPD",
      "u": 1262322000000
    },
    {
      "date": "2010-05-15T04:00:00.000Z",
      "event": "DOJ investigation",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "investigation start",
      "details": "DOJ investigation",
      "u": 1273896000000
    },
    {
      "date": "2011-03-17T04:00:00.000Z",
      "event": "Negotiations",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "negotiation start",
      "details": "Negotiations",
      "u": 1300334400000
    },
    {
      "date": "2011-03-17T04:00:00.000Z",
      "event": "DOJ investigation findings announced",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "investigation end",
      "details": "DOJ investigation findings announced",
      "u": 1300334400000
    },
    {
      "date": "2012-07-24T04:00:00.000Z",
      "event": "DOJ files complaint, proposes consent decree",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "complaint",
      "details": "DOJ files complaint, proposes consent decree",
      "u": 1343102400000
    },
    {
      "date": "2013-01-11T05:00:00.000Z",
      "event": "District Court approves decree",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "consent start",
      "details": "District Court approves decree",
      "u": 1357880400000
    },
    {
      "date": "2013-01-11T05:00:00.000Z",
      "event": "",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "negotiation end",
      "details": "",
      "u": 1357880400000
    },
    {
      "date": "2013-01-31T05:00:00.000Z",
      "event": "City moves to stay the decree",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "countersuit",
      "details": "City moves to stay the decree",
      "u": 1359608400000
    },
    {
      "date": "2013-02-08T05:00:00.000Z",
      "event": "District Court denies city's motion",
      "id": "50",
      "name": "New Orleans Police Department",
      "type": "countersuit",
      "details": "District Court denies city's motion",
      "u": 1360299600000
    }
  ]
}]

var pittData = [  {
    "key": "Pittsburgh Police Bureau",
    "values": [
      {
        "date": "1996-03-27T05:00:00.000Z",
        "event": "ACLU files lawsuit",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "flag",
        "details": "ACLU files a lawsuit against Pittsburgh police department",
        "u": 827902800000
      },
      {
        "date": "1996-04-01T05:00:00.000Z",
        "event": "DOJ investigation",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "investigation start",
        "details": "DOJ investigation",
        "u": 828334800000
      },
      {
        "date": "1997-01-01T05:00:00.000Z",
        "event": "DOJ investigation findings announced",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "investigation end",
        "details": "DOJ investigation findings announced",
        "u": 852094800000
      },
      {
        "date": "1997-01-01T05:00:00.000Z",
        "event": "Negotiations",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "negotiation start",
        "details": "Negotiations",
        "u": 852094800000
      },
      {
        "date": "1997-02-26T05:00:00.000Z",
        "event": "DOJ files complaint, proposes consent decree",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "proposed",
        "details": "DOJ files complaint with proposed consent decree",
        "u": 856933200000
      },
      {
        "date": "1997-03-03T05:00:00.000Z",
        "event": "Police union countersuit",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "countersuit",
        "details": "Allen Brunwasser and the police union (Fraternal Order of Police) file motions to intervene",
        "u": 857365200000
      },
      {
        "date": "1997-04-16T04:00:00.000Z",
        "event": "Consent decree begins",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "consent start",
        "details": "Consent decree",
        "u": 861163200000
      },
      {
        "date": "1997-04-16T04:00:00.000Z",
        "event": "",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "negotiation end",
        "details": "",
        "u": 861163200000
      },
      {
        "date": "2005-06-16T04:00:00.000Z",
        "event": "Consent decree ends",
        "id": "5",
        "name": "Pittsburgh Police Bureau",
        "type": "consent end",
        "details": "Consent decree endsd",
        "u": 1118894400000
      }
    ]
  }]
var dispatch = d3.dispatch(
  'init'
)

var imageHeight = 700
function size(){
	imageHeight = Math.min(.5*window.innerHeight, 650)
	d3.select('.bglede').style('height', imageHeight+'px')
}
size()

queue()
    .defer(function(done) {
      d3.csv("data/events.csv", function(error, data) {
          data.forEach(function(t) {
            t.date = new Date(t.date)
            t.u = t.date.getTime()
          })
        data.sort(d3.ascendingKey('u'))
        done(error, data)
      })
    })
    .defer(d3.csv, "data/cases.csv")
    .await(ready);

var pause = false

$('.slider').slick({
  prevArrow: '<img class="prev" src="img/arrow-left.png" alt="">',
  nextArrow: '<img class="next" src="img/arrow-right.png" alt="">',
});

function ready(error,events,cases) {
  var pdData = d3.nest().key(function(d){return d.name}).entries(events)
  var boxloop = function(sel,index) {
    var dates = _.uniq(_.flatten(d3.selectAll(sel+' .pd').data().map(function(d){return d.values.map(ƒ('date'))})))
    dates.sort(function(a,b){
      a = new Date(a)
      b = new Date(b)
      return d3.ascending(a,b)
    })

    if(!pause) {
      if(index<dates.length){
        d3.selectAll(sel+' .pd').each(function(d) {
          var el = d3.select(this)
          var ev = d.values.filter(function(d) {return  d.date == dates[index]})

          if(ev.length > 0 && ev[0].date == dates[index] && !el.classed('hover')){
            el.selectAll('div').classed('fade',false)
            el.selectAll('.text').classed('fade-out',false)
            el.style('opacity',1)
            el.classed('active',true)
            el.classed('closed',false)
            el.select('.who').text(ev[0].name)
            el.select('.text').text(ev[0].event)
            el.select('.date').classed('fade',false).text(time(new Date(ev[0].date)))
            setTimeout(function(){
              el.selectAll('div').classed('fade',true)
            },100)

            setTimeout(function(){
              el.selectAll('.text').classed('fade-out',true)
            },2000)

            if(ev[0].type=="consent start"){
              el.classed('decree',true)
            }
          }

          if(d3.max(d.values.map(ƒ('date')))<dates[index]){
            setTimeout(function(){
              el.classed('closed',true)
            },3000)
          }

        })
        index++
      }else{
        setTimeout(function(){
          d3.selectAll(sel+' .pd')
            .style('opacity',function(){
              var el = d3.select(this)
              return (d3.select(el.node().parentNode).classed('single'))?1:0
            })
            .classed('closed',false)
            .classed('decree',false)
            .classed('active',false)
        },3000)
        index=0
      }
    }
    return index
  }

  var boxSpeed = 500
  var initIndex = 0
  var initBox = new Box('.init', 'la', initData)

  var laIndex = 0
  // var laBox = new Box('.lapd', 'la', nolaData.concat(lapdData).concat(detroitData))
  var laBox = new Box('.lapd', 'la', pittData.concat(nolaData))

  var boxIndex = 0
  var boxes = new Box('.all-boxes', 'all', pdData)


  var images = d3.shuffle(_.uniq(cases.filter(function(c){return c.img}))).slice(0,8)
  d3.select('.images').selectAll('div.img')
    .data(images)
    .enter()
    .append('div')
    .style('background-image',function(d){return 'url(img/'+d.img+')'})
    .attr('class', function(d,i){
      var hidden = (i==0)?'':' hidden'
      return 'img '+toSlug(d.name)+hidden
    })
    .append('div.dek')
    .text(function(d){
      return d.name
    })

  var imgLoop = function(fn,duration){
    function runFn(){
      fn()
      setTimeout(runFn, duration)
    }
    runFn()
    return this
  }

  var imgIndex = 0
  imgLoop(function(){
    var curImg = images[imgIndex%(images.length-1)]
    d3.selectAll('.bglede .img').classed('hidden',true)
    d3.select('.'+toSlug(curImg.name))
      .classed('hidden',false)
      .transition()
      .duration(0)
      .style({
        opacity:1
      })
    imgIndex = (imgIndex+1)%(images.length)
  },3000)

  var scrollTriggers = [
    {
      sel: d3.select('.init'),
      playFn: function(){
          initBox.loop(function(){
            initIndex = boxloop('.init',initIndex)
          },3*boxSpeed)
        }
    },
    {
      sel: d3.select('.lapd'),
      playFn: function(){
          laBox.loop(function(){
            laIndex = boxloop('.lapd',laIndex)
            d3.selectAll('.lapd .pd').style('opacity',1)
          },3*boxSpeed)
        }
    },
    {
      sel: d3.select('.all-boxes'),
      playFn: function(){
        boxes.loop(function(){
          boxIndex = boxloop('.all-boxes',boxIndex)
        },boxSpeed)
      }
    }
  ]

  scrollTriggers.forEach(function(d){
    d.startPos = d.sel.node().getBoundingClientRect().top + pageYOffset
    d.started = false
  })

  window.onscroll = _.debounce(function(){
      scrollTriggers
        .filter(function(d){ return !d.started && d.startPos-window.innerHeight < pageYOffset })
        .forEach(function(d){
          d.playFn()
          d.started = true
        })
  },50)

}

window.onresize = _.debounce(function(){
  size()
},250)

