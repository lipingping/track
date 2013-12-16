function drawGraphs(id, type, url, yMax, yPoints, yUnits){
	if(yMax==null)
		yMax = 100;
	if(yPoints==null)
		yPoints = [0, 50, 100];
	if(yUnits == null)
		yUnits = '%'

	$.getJSON(url,  function(data){
		$('#'+ id).highcharts({ 
			chart: {
				height: 160, 
				type: type,  zoomType: 'x', plotBorderWidth:1, 
				spacing: [10,  14,  15,  0], 
				showAxes:true, 
				//shadow:true, 
				alignTicks:false, 
			}, 
			credits:{ enabled:false }, 
			title: null, 
			xAxis:{
				type: 'datetime',
				dateTimeLabelFormats: {
					millisecond: '%H:%M:%S', 
					second: '%H:%M:%S', 
					minute: '%H:%M', 
					hour: '%H:%M', 
					day: '%d', 
					week: '%e. %b', 
					month: '%m', 
					year: '%Y'
				}, 
				labels:{ format: '{value:%M:%S}', }, 
				tickInterval:30, 
				tickPixelInterval:30, 
				tickWidth:0, 
				startOnTick: true, 
				minPadding:0, 
				maxPadding:0, 
            	tickPositioner: function () {
            	    var positions = [],
            	        tick = Math.floor(this.dataMin),
            	        increment = Math.ceil((this.dataMax - this.dataMin) / 5);

            	    for (; tick - increment <= this.dataMax; tick += increment) {
            	        positions.push(tick);
            	    }
            	    return positions;
            	}
			}, 
			yAxis:{ 
				title:null, max:yMax, 
				tickPositions:yPoints, 
				labels:{ format: '{value} '+yUnits+" ", }, 
				lineWidth:0,
				showFirstLabel:false,
				showLaseLabel:false,
			},
			legend:{borderWidth:0,},
			tooltip: { 
				shared: true, crosshairs: true, valueSuffix: ' %', 
				pointFormat: '{series.name}: <b>{point.y:,.2f} '+yUnits+'</b><br/>'
			},
			plotOptions: { 
				area: { 
					marker: { enabled: false, symbol: 'circle', radius: 2,  
						states: { hover: { enabled: true } } 
					} 
				}, 
				line: { 
					marker: { enabled: false, symbol: 'circle', radius: 2,  
						states: { hover: { enabled: true } } 
					} 
				}
			}, 
			series: data['series']
		});
	});
};
$(document).ready(function () {
	drawGraphs('cpuInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/cpu");
	drawGraphs('loadInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/load", 10, [0, 5, 10], '');
	drawGraphs('memoryInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/memory");
	drawGraphs('disksInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/disks");
	drawGraphs('networkInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/network", 1024, [0,256, 512, 768, 1024], '');
});
