

var chart1 = c3.generate({
    bindto: '#chart1',

    tooltip: {
        position: function () {
            var position = c3.chart.internal.fn.tooltipPosition.apply(this, arguments);
            position.top = 0;
            return position;
        },
        grouped: false,
        format: {
            title: function (d) {return 'Hours ' + d;}
            //value: function (value, ratio, id) {console.log(value, ratio, id); return value;},
        },
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            d.forEach(function(element, index, array) {
                //d[index].id = d[index].id.split(';')[0];
                d[index]['name']=d[index]['name'].split(';')[0];
                //console.log(d[index]);
            });
            return this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color);
            }
            //value: d3.format(',') // apply this format to both y and y2
        },

    data: {
        x: 'x',
        columns: [
            ['x',0,0.5,1,2,4,8,12],
            //['y',0,0.1,0.1,0.2,0.4,0.8,0.9]
        ],
        type: 'spline',
        selection: {
            grouped: true
        },
        selection: {
            enabled: true
          },
    },
    point: {
        show: true,

        select: {
              r: 4
        }

    },
    zoom: {
        enabled: true,
    //    type: 'drag',
    //    rescale: true,
    },
    zoom: {
        enabled: true,
        rescale: true,
    },
    legend: {
        show: false
    },

    axis: {
        x: {
            label: {
                text: 'Hours',
                position: 'outer-center',
            },
            tick: {
                values: [0,2,4,6,8,12],
                fit: true
            },
            padding: {top:0, bottom:0},
            max: 12.5,
            min: -0.5,
        },
        y : {
            label: {
                text: 'Relative Abundance',
                position: 'outer-center',
            },
            max: 1.1,
            min: -0.1,
            tick: {
                format: function (d) { return d3.format('.2f')(d); }
            },
            padding: {top:5, bottom:0}
        }
    }

});

var chart2 = c3.generate({
    bindto: '#chart2',

    tooltip: {
        position: function () {
            var position = c3.chart.internal.fn.tooltipPosition.apply(this, arguments);
            position.top = 0;
            return position;
        },
        grouped: false,
        format: {
            title: function (d) {return 'Hours ' + d;}
            //value: function (value, ratio, id) {console.log(value, ratio, id); return value;},
        },
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            d.forEach(function(element, index, array) {
                //d[index].id = d[index].id.split(';')[0];
                d[index]['name']=d[index]['name'].split(';')[0];
                //console.log(d[index]);
            });
            return this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color);
            }
            //value: d3.format(',') // apply this format to both y and y2
        },

    data: {
        x: 'x',
        columns: [
            ['x',0,0.25,0.5,1,2,4,8,20,28],
            
        ],
        type: 'spline',
        selection: {
            grouped: true
        },
        selection: {
            enabled: true
          },
    },
    point: {
        show: true,

        select: {
              r: 4
        }
    },
    zoom: {
        enabled: true,
        //type: 'drag',
    //    rescale: true,
    },
    zoom: {
        enabled: true,
        rescale: true,
    },

    legend: {
        show: false
    },

    axis: {
        x: {
            label: {
                text: 'Hours',
                position: 'outer-center',
            },
            tick: {
                fit: true,
                values: [0,4,8,12,16,20,24,28],
            },
            padding: {top:0, bottom:0},
            max: 28.5,
            min: -0.5,
        },
        y : {
            label: {
                text: 'Relative Abundance',
                position: 'outer-center',
            },
            max: 1.1,
            min: -0.1,
            tick: {
                format: function (d) { return d3.format('.2f')(d); }
            },
            padding: {top:5, bottom:0}
        }
    }

});


var chart3 = c3.generate({
    bindto: '#chart3',

    tooltip: {
        position: function () {
            var position = c3.chart.internal.fn.tooltipPosition.apply(this, arguments);
            position.top = 0;
            return position;
        },
        grouped: false,
        format: {
            title: function (d) {return 'Fraction ' + d;}
            //value: function (value, ratio, id) {console.log(value, ratio, id); return value;},
        },
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            d.forEach(function(element, index, array) {
                //d[index].id = d[index].id.split(';')[0];
                d[index]['name']=d[index]['name'].split(';')[0];
                //console.log(d[index]);
            });
            return this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color);
            }
            //value: d3.format(',') // apply this format to both y and y2
        },

    data: {
        x: 'x',
        columns: [

        
            ['x',1],
            
        ],
        type: 'line',
        selection: {
            grouped: true
        },
        selection: {
            enabled: true
          },
    },
    point: {
        show: true,

        select: {
              r: 4
        }
    },
    zoom: {
        enabled: true,
        //rescale: true,
    },
    legend: {
        show: false
    },

    axis: {
        x: {
            type: 'category',
            label: {
                text: 'MW(Kd)',
                position: 'outer-center',
            },
            tick: {
                values: [7,13,21,25,31,39,44],
                fit: true,
                outer: false,
                multiline: false,
            },
            padding: {top:0, bottom:0},
            //max: 28.5,
            //min: -0.5,
        },
        y : {
            label: {
                text: 'Relative Abundance',
                position: 'outer-center',
            },
            //max: 1.1,
            //min: -0.1,
            tick: {
                format: function (d) { return d3.format('.2f')(d); }
            },
            padding: {top:5, bottom:0}
        }
    }

});


var chart4 = c3.generate({
    bindto: '#chart4',

    tooltip: {
        position: function () {
            var position = c3.chart.internal.fn.tooltipPosition.apply(this, arguments);
            position.top = 0;
            return position;
        },
        grouped: false,
        format: {
            title: function (d) {return 'Fraction ' + d;}
            //value: function (value, ratio, id) {console.log(value, ratio, id); return value;},
        },
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            d.forEach(function(element, index, array) {
                //d[index].id = d[index].id.split(';')[0];
                d[index]['name']=d[index]['name'].split(';')[0];
                //console.log(d[index]);
            });
            return this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color);
            }
            //value: d3.format(',') // apply this format to both y and y2
        },

    data: {
        x: 'x',
        columns: [

        
            ['x',1],
            
        ],
        type: 'line',
        selection: {
            grouped: true
        },
        selection: {
            enabled: true
          },
    },
    point: {
        show: true,

        select: {
              r: 4
        }
    },
    zoom: {
        enabled: true,
        //rescale: true,
    },
    legend: {
        show: false
    },

    axis: {
        x: {
            type: 'category',
            label: {
                text: 'MW(Kd)',
                position: 'outer-center',
            },
            tick: {
                values: [30,36,45],
                fit: true,
                outer: false,
                multiline: false,
            },
            padding: {top:0, bottom:0},
            //max: 28.5,
            //min: -0.5,
        },
        y : {
            label: {
                text: 'Relative Abundance',
                position: 'outer-center',
            },
            //max: 1.1,
            //min: -0.1,
            tick: {
                format: function (d) { return d3.format('.2f')(d); }
            },
            padding: {top:5, bottom:0}
        }
    }

});


var chart5 = c3.generate({
    bindto: '#chart5',

    tooltip: {
        position: function () {
            var position = c3.chart.internal.fn.tooltipPosition.apply(this, arguments);
            position.top = 0;
            return position;
        },
        grouped: false,
        format: {
            title: function (d) {return 'Fraction ' + d;}
            //value: function (value, ratio, id) {console.log(value, ratio, id); return value;},
        },
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            d.forEach(function(element, index, array) {
                //d[index].id = d[index].id.split(';')[0];
                d[index]['name']=d[index]['name'].split(';')[0];
                //console.log(d[index]);
            });
            return this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color);
            }
            //value: d3.format(',') // apply this format to both y and y2
        },

    data: {
        x: 'x',
        columns: [

        
            ['x',1],
            
        ],
        type: 'line',
        selection: {
            grouped: true
        },
        selection: {
            enabled: true
          },
    },
    point: {
        show: true,

        select: {
              r: 4
        }
    },
    zoom: {
        enabled: true,
        //rescale: true,
    },
    legend: {
        show: false
    },

    axis: {
        x: {
            type: 'category',
            label: {
                text: 'Fraction',
                position: 'outer-center',
            },
            tick: {
                values: [19,39,59,79],
                fit: true,
                outer: false,
                multiline: false,
            },
            padding: {top:0, bottom:0},
            //max: 28.5,
            //min: -0.5,
        },
        y : {
            label: {
                text: 'Relative Abundance',
                position: 'outer-center',
            },
            //max: 1.1,
            //min: -0.1,
            tick: {
                format: function (d) { return d3.format('.2f')(d); }
            },
            padding: {top:5, bottom:0}
        }
    }

});


var chart6 = c3.generate({
    bindto: '#chart6',

    tooltip: {
        position: function () {
            var position = c3.chart.internal.fn.tooltipPosition.apply(this, arguments);
            position.top = 0;
            return position;
        },
        grouped: false,
        format: {
            title: function (d) {return 'Fraction ' + d;}
            //value: function (value, ratio, id) {console.log(value, ratio, id); return value;},
        },
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            d.forEach(function(element, index, array) {
                //d[index].id = d[index].id.split(';')[0];
                d[index]['name']=d[index]['name'].split(';')[0];
                //console.log(d[index]);
            });
            return this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color);
            }
            //value: d3.format(',') // apply this format to both y and y2
        },

    data: {
        x: 'x',
        columns: [

        
            ['x',0.5, 3, 5, 6, 7, 8, 9, 10, 11],
            
        ],
        type: 'spline',
        selection: {
            grouped: true
        },
        selection: {
            enabled: true
          },
    },
    point: {
        show: true,

        select: {
              r: 4
        }
    },
    zoom: {
        enabled: true,
        //rescale: true,
    },
    legend: {
        show: false
    },

    axis: {
        x: {
            //type: 'category',
            label: {
                text: 'Hours',
                position: 'outer-center',
            },
            tick: {
                values: [0, 2, 4, 6, 8, 10, 12],
                fit: true,
                outer: false,
                multiline: false,
            },
            padding: {top:0, bottom:0},
            max: 12.5,
            min: 0,
        },
        y : {
            label: {
                text: 'Relative Abundance',
                position: 'outer-center',
            },
            max: 1.1,
            min: -0.1,
            tick: {
                format: function (d) { return d3.format('.2f')(d); }
            },
            padding: {top:5, bottom:0}
        }
    }

});


