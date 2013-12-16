$(document).ready(function () {
	$.getJSON('http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/load',  function(data){
		// Build the chart
		$('#loadInfo').highcharts({ 
			chart: {
				height: 150, 
				type: 'area',  
				zoomType: 'x', 
				plotBorderWidth:1, 
			}, 
			credits:{ enabled:false }, 
			title: null, 
			xAxis:{type: 'datetime',
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
				labels:{
					format: '{value:%M:%S}',
				}, 
			}, 
			yAxis:{ 
				title:null, max:100, tickPositions:[0, 50, 100], 
				labels:{ 
					format: '{value} % ', 
				}, 
				lineWidth:1
			},
			legend:{borderWidth:0, },
			tooltip: { 
				shared: true, crosshairs: true, valueSuffix: ' %', 
				pointFormat: '{series.name}: <b>{point.y:,.2f} %</b><br/>'
			},
			plotOptions: {
				area: {
    	                marker: {
    	                    enabled: true,
    	                    symbol: 'circle',
    	                    radius: 1,
    	                    states: { hover: { enabled: true } }
    	                }
    	            }
			},
			series: [ 
			{name: 'One minute Load', color: '#66CDCC', data: data , pointInterval: 3000, }, 
			{name: 'Two minute Load', color: '#66CDAA', data: data , pointInterval: 3000, }, 
		]

		});
	});
});
