$(document).ready(function () {
	$.getJSON('http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/cpu',  function(data){

		// Build the chart
		$('#cpuInfo').highcharts({ 
			chart: {
				style: {
					fontFamily: '"Lucida Grande",  "Lucida Sans Unicode",  Verdana,  Arial,  Helvetica,  sans-serif',  // default font
					fontSize: '14px', 
				}, 
				plotBorderWidth:1,  borderWidth:0, height: 160, type: 'area',  zoomType: 'x' }, 
			credits:{ enabled:false }, 
			title: null, 
			xAxis:{type: 'datetime',
				dateTimeLabelFormats: {
					millisecond: '%H:%M:%S.%L', 
					second: '%H:%M:%S', 
					minute: '%H:%M', 
					hour: '%H:%M', 
					day: '%e. %b', 
					week: '%e. %b', 
					month: '%b \'%y', 
					year: '%Y'
				}, 
				startOnTick: true, 
				minPadding: -0.01, 
				showEmpty:false, 
				labels:{
					format: '{value:%H:%M}', 
					align: 'left', 
				}
				, showLastLabel:true, showFirstLabel:true
			}, 
			yAxis:{ title:null, max:100, tickPositions:[0, 50, 100], labels:{ format: '{value} % ', } 
				, showEmpty:false
			},
			legend:{ useHTML:true, borderRadius:0, borderWidth:0, },
			tooltip: { shared: true, crosshairs: true, valueSuffix: ' %'
				//pointFormat: '{series.name}:<b>{point.y:,.0f}%</b><br/>time: {point.x}'
			},
			plotOptions: {
				area: {
    	                marker: {
    	                    enabled: false,
    	                    symbol: 'circle',
    	                    radius: 2,
    	                    states: { hover: { enabled: true } }
    	                }
    	            }
			},
			series: [ {name: 'System', data: [0, 9, 3, 5, 1, 7, 8, 19] }]
		});
	});
});
