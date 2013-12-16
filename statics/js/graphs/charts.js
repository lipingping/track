function drawGraphs(id, type, url, yMax, xMax){
	if(yMax==null)
		yMax = 100;
	$.getJSON(url,  function(data){
		$('#'+ id).highcharts({ 
			chart: {height: 170, type: type,  zoomType: 'x', plotBorderWidth:1, 
				spacing: [10,  10,  15,  0], 
				showAxes:true, 
				//shadow:true, 
			}, 
			credits:{ enabled:false }, 
			title: null, 
			plotOptions:{
				area:{ }
			}, 
			xAxis:{
				type: 'datetime',
				categories: data['x'],
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
				tickWidth:0, 
				startOnTick: false, 
				maxPadding:0.01, 
				minPadding:10, 
			}, 
			yAxis:{ 
				title:null, max:yMax, tickPositions:[0, 50, 100], 
				labels:{ format: '{value} % ', }, 
				lineWidth:1,
				minPadding:-10, 
				startOnTick: false, 
			},
			legend:{borderWidth:0,},
			tooltip: { 
				shared: true, crosshairs: true, valueSuffix: ' %', 
				pointFormat: '{series.name}: <b>{point.y:,.2f} %</b><br/>'
			},
			plotOptions: { 
				area: { 
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
	//drawGraphs('cpuInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/cpu");
	drawGraphs('loadInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/load");
	drawGraphs('memoryInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/memory");
	drawGraphs('disksInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/disks");
	drawGraphs('networkInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/network");
});
