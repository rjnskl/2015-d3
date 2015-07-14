(function() {
    d3.fisheye = {
        scale: function(scaleType) {
            return d3_fisheye_scale(scaleType(), 3, 0);
        },
        ordinal: function() {
            return d3_fisheye_scale_ordinal(d3.scale.ordinal(), 3, 0)
        },
        circular: function() {
            var radius = 200,
                distortion = 2,
                k0,
                k1,
                focus = [0, 0];

            function fisheye(d) {
                var dx = d.x - focus[0],
                    dy = d.y - focus[1],
                    dd = Math.sqrt(dx * dx + dy * dy);
                if (!dd || dd >= radius) return {
                    x: d.x,
                    y: d.y,
                    z: 1
                };
                var k = k0 * (1 - Math.exp(-dd * k1)) / dd * .75 + .25;
                return {
                    x: focus[0] + dx * k,
                    y: focus[1] + dy * k,
                    z: Math.min(k, 10)
                };
            }

            function rescale() {
                k0 = Math.exp(distortion);
                k0 = k0 / (k0 - 1) * radius;
                k1 = distortion / radius;
                return fisheye;
            }

            fisheye.radius = function(_) {
                if (!arguments.length) return radius;
                radius = +_;
                return rescale();
            };

            fisheye.distortion = function(_) {
                if (!arguments.length) return distortion;
                distortion = +_;
                return rescale();
            };

            fisheye.focus = function(_) {
                if (!arguments.length) return focus;
                focus = _;
                return fisheye;
            };

            return rescale();
        },
    };

    function d3_fisheye_scale(scale, d, a) {

        function fisheye(_) {
            var x = scale(_),
                left = x < a,
                range = d3.extent(scale.range()),
                min = range[0],
                max = range[1],
                m = left ? a - min : max - a;
            if (m == 0) m = max - min;
            return (left ? -1 : 1) * m * (d + 1) / (d + (m / Math.abs(x - a))) + a;
        }

        fisheye.distortion = function(_) {
            if (!arguments.length) return d;
            d = +_;
            return fisheye;
        };

        fisheye.focus = function(_) {
            if (!arguments.length) return a;
            a = +_;
            return fisheye;
        };

        fisheye.copy = function() {
            return d3_fisheye_scale(scale.copy(), d, a);
        };

        fisheye.nice = scale.nice;
        fisheye.ticks = scale.ticks;
        fisheye.tickFormat = scale.tickFormat;
        return d3.rebind(fisheye, scale, "domain", "range");
    };

    function d3_fisheye_scale_ordinal(scale, d, a) {

        function scale_factor(x) {
            var
                left = x < a,
                range = scale.rangeExtent(),
                min = range[0],
                max = range[1],
                m = left ? a - min : max - a;

            if (m == 0) m = max - min;
            var factor = (left ? -1 : 1) * m * (d + 1) / (d + (m / Math.abs(x - a)));
            return factor + a;
        };

        function fisheye(_) {
            return scale_factor(scale(_));
        };

        fisheye.distortion = function(_) {
            if (!arguments.length) return d;
            d = +_;
            return fisheye;
        };

        fisheye.focus = function(_) {
            if (!arguments.length) return a;
            a = +_;
            return fisheye;
        };

        fisheye.copy = function() {
            return d3_fisheye_scale_ordinal(scale.copy(), d, a);
        };

        fisheye.rangeBand = function(_) {
            var band = scale.rangeBand(),
                x = scale(_),
                x1 = scale_factor(x),
                x2 = scale_factor(x + band);

            return Math.abs(x2 - x1);
        };


        fisheye.rangeRoundBands = function(x, padding, outerPadding) {
            var roundBands = arguments.length === 3 ? scale.rangeRoundBands(x, padding, outerPadding) : arguments.length === 2 ? scale.rangeRoundBands(x, padding) : scale.rangeRoundBands(x);
            fisheye.padding = padding * scale.rangeBand();
            fisheye.outerPadding = outerPadding;
            return fisheye;
        };

        return d3.rebind(fisheye, scale, "domain", "rangeExtent", "range");
    };

})();


var margin = {
    top: 20,
    right: 20,
    bottom: 10,
    left: 20
}

var timeline = d3.select('#timeline')
var timelineSVG = timeline.select('svg')

var timelineG = timelineSVG.append("g")
    .on("mousemove", function() {
        var mouse = d3.mouse(this);

        deptScale.focus(mouse[1]);

        d3.selectAll('.background, rect.event')
            .attr({
                'y': function(d) {
                    return deptScale(safeD(d).name);
                },
                'height': function(d) {
                    return deptScale.rangeBand(safeD(d).name);
                }
            });

        d3.selectAll('circle.event')
            .attr({
                'cy': function(d) {
                    return deptScale(d.name) + (deptScale.rangeBand(d.name) / 2)
                },
                'r': function(d) {
                    return deptScale.rangeBand(safeD(d).name) / 2;
                }
            });
    })
    .on("touchmove", function() {
        var mouse = d3.mouse(this);

        deptScale.focus(mouse[1]);

        d3.selectAll('.background, .event')
            .attr({
                'y': function(d) {
                    return deptScale(safeD(d).name);
                },
                'height': function(d) {
                    return deptScale.rangeBand(safeD(d).name);
                }
            });
    })

var xAxisG = timelineG.append("g")
    .attr('class', 'x axis')

var casesG = timelineG.append("g").attr('id', 'cases')

var isMobile = false;

var parseDate = d3.time.format('%m/%d/%y').parse
var formatDate = d3.time.format('%b %d, %Y')

var safeId = function(d) {
    return d.trim().toLowerCase().replace(/\W+/g, "-")
}
var safeD = function(d) {
    return ((d instanceof Array) ? d[0] : d)
}

var xAxis = d3.svg.axis()

var yAxis = d3.svg.axis()
    .orient("right");

var deptScale = d3.fisheye.ordinal().distortion(1.2)
var timeScale = d3.time.scale();
var adminColorScale = d3.scale.category10()

var cases, events;

var tooltip = d3.select('#timeline-tooltip')

queue()
    .defer(d3.csv, 'data/cases.csv')
    .defer(d3.csv, 'data/events.csv')
    .await(function(error, caseData, eventData) {
        eventData.map(function(d) {
            d.token = safeId(d.name)
            d.dateObj = parseDate(d.date)
            d.dateStr = (d.dateObj) ? formatDate(d.dateObj) : ''

            return d;
        })

        caseData.map(function(d1) {
            d1.events = eventData.filter(function(d2) {
                return d1.id == d2.id
            })

            d1.startDateObj = parseDate(d1.start_date)
            d1.startDateStr = formatDate(d1.startDateObj)

            if (d1.close_date) {
                d1.endDateObj = parseDate(d1.close_date)
                d1.endDateStr = formatDate(d1.endDateObj)
            }
        })

        cases = d3.nest().key(function(d) {
                return d.name
            })
            .entries(caseData)

        cases.sort(function(a, b) {
            var at = d3.min(a.values, function(d) {
                return d.startDateObj
            })
            var bt = d3.min(b.values, function(d) {
                return d.startDateObj
            })

            return d3.ascending(at, bt);
        })

        depts = cases.map(function(d) {
            return d.key
        })

        admins = d3.set(cases.map(function(d) {
            return d.start_admin
        })).values();

        adminColorScale.domain(admins)

        times = d3.merge(cases.map(function(d) {
            return d.values.map(function(d) {
                return d.startDateObj
            })
        }));

        timeDomain = d3.extent(times);

        setup()
    })

function setup() {
    width = parseInt(timeline.style('width')) - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    isMobile = (width < 568)

    deptScale.domain(depts).rangeRoundBands([0, height])
    timeScale.domain(timeDomain).range([0, width])

    timelineSVG
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    timelineG.attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    xAxis
        .scale(timeScale)
        .ticks(d3.time.year, (isMobile) ? 2 : null)
        .tickSize(height)
        .tickFormat((isMobile) ? d3.time.format('"%y') : null)
        .orient('bottom')

    xAxisG.call(xAxis);

    casesG.selectAll('g.case').remove()

    var caseG = casesG.selectAll('g.case').data(cases)

    var newCaseG = caseG.enter()
        .append('g')
        .attr('class', function(d) {
            return 'case ' + safeId(d.key)
        })

    newCaseG.each(function(d) {
        var caseG = d3.select(this)

        caseG.append('rect')
            .datum(d.values[0])
            .attr({
                'class': 'background',
                'x': function(d) {
                    return 0
                },
                'y': function(d) {
                    return deptScale(d.name)
                },
                'width': width,
                'height': function(d) {
                    return deptScale.rangeBand(d.name)
                }
            })
            .on('mouseover', function(d) {
                d3.select('#name').text(d.name)
                d3.select('#event').text('')
                d3.select('#date').text(d.startDateStr + ' – ' + ((d.endDateStr) ? d.endDateStr : 'now'))

                highlight(d)
                updateTooltip(this)
            })
            .on('mouseout', function(d) {
                unhighlight()
            })

        var eventsG = caseG.append('g').attr('class', 'long-events')

        for (var i = 0; i < d.values.length; i++) {
            var events = d.values[i].events;

            longEventRect(eventsG, events, 'negotiation')
            longEventRect(eventsG, events, 'investigation')
            longEventRect(eventsG, events, 'consent')
            longEventRect(eventsG, events, 'moa')
        }

        var events = d3.merge(d.values.map(function(d) {
            return d.events
        }))

        eventsG = caseG.append('g').attr('class', 'short-events')

        shortEventRect(eventsG, events.filter(function(d) {
            return d.type != 'flag'
        }))

        eventsG = caseG.append('g').attr('class', 'short-events')

        shortEventCirc(eventsG, events.filter(function(d) {
            return d.type == 'flag'
        }))
    })
}

var debounce = function(fn, timeout) {
    var timeoutID = -1;
    return function() {
        if (timeoutID > -1) {
            window.clearTimeout(timeoutID);
        }
        timeoutID = window.setTimeout(fn, timeout);
    }
};

var debouncedSetup = debounce(function() {
    setup()
  }, 250);

$(window).resize(debouncedSetup)

function shortEventRect(g, events) {
    g.selectAll('.event')
        .data(events)
        .enter()
        .append('rect')
        .attr({
            'class': function(d) {
                return 'event ' + d.type;
            },
            'x': function(d) {
                return timeScale(d.dateObj) + 'px'
            },
            'y': function(d) {
                return deptScale(d.name)
            },
            'width': '4px',
            'height': function(d) {
                // debugger
                return deptScale.rangeBand(d.name)
            }
        })
        .on('mouseover', function(d) {
            d3.select('#name').text(d.name)
            d3.select('#event').text(d.event)
            d3.select('#date').text(d.dateStr)

            highlight(d)
            updateTooltip(this)
        })
        .on('mouseout', function(d) {
            unhighlight()
        })
}

function shortEventCirc(g, events) {
    g.selectAll('.event')
        .data(events)
        .enter()
        .append('circle')
        .attr({
            'class': function(d) {
                return 'event ' + d.type;
            },
            'cx': function(d) {
                return timeScale(d.dateObj) + 'px'
            },
            'r': function(d) {
                return (deptScale.rangeBand(d.name) / 2)
            },
            'cy': function(d) {
                return deptScale(d.name) + (deptScale.rangeBand(d.name) / 2)
            }
        })
        .on('mouseover', function(d) {
            d3.select('#name').text(d.name)
            d3.select('#event').text(d.event)
            d3.select('#date').text(d.dateStr)

            highlight(d)
            updateTooltip(this)
        })
        .on('mouseout', function(d) {
            unhighlight()
        })
}

function longEventRect(g, events, category) {
    var categories = events.filter(function(d) {
        return d.type.indexOf(category + ' start') > -1 || d.type.indexOf(category + ' end') > -1
    })

    for (var i = 0; i < categories.length; i += 2) {
        var bar = g.append('rect')
            .datum([categories[i], categories[i + 1]])
            .attr({
                'class': 'event ' + category,
                'x': function(d) {
                    var x = timeScale(d[0].dateObj);
                    return x + 'px'
                },
                'y': function(d) {
                    return deptScale(d[0].name)
                },
                'width': function(d) {
                    var x1 = timeScale(parseDate(d[0].date));
                    var x2 = (d[1]) ? timeScale(d[1].dateObj) : width;
                    return (x2 > x1) ? (x2 - x1) + 'px' : x1
                },
                'height': function(d) {
                    return deptScale.rangeBand(d[0].name)
                }
            })
            .on('mouseover', function(d) {
                d3.select('#name').text(d[0].name)
                d3.select('#event').text((category == 'moa' || category == 'mou') ? category.toUpperCase() : toTitleCase(category))
                d3.select('#date').text(d[0].dateStr + ' – ' + ((d[1]) ? d[1].dateStr : 'now'));

                highlight(d)
                updateTooltip(this)
            })
            .on('mouseout', function(d) {
                unhighlight()
            })
    }
}

function highlight(d) {
    var id = safeId(safeD(d).name)

    d3.select('.case.' + id).classed('disabled', false)
    d3.selectAll('.case:not(.' + id + ')').classed('disabled', true)
}

function unhighlight() {
    d3.selectAll('.case').classed('disabled', false)
    tooltip.style('opacity', 0)
}

function updateTooltip(e) {
    tooltip.style('opacity', 1)

    var pos = d3.mouse(d3.select('body').node())
    var posT = d3.mouse(d3.select('#timeline').node())
    var offset = d3.select('body').node().getBoundingClientRect()

    var tt = tooltip.node().getBoundingClientRect()


    tooltip
        .transition()
        .duration(100)
        .style({
            left: pos[0] - tt.width / 2 + 'px',
            top: pos[1] - tt.height - 25 + 'px',
        })
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

