$(document).ready(function () {
	$.getJSON('http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/network',  function(data){

		// Build the chart
		$('#networkInfo').highcharts({ 
			chart: { borderWidth:0, height: 160, type: 'area',  zoomType: 'x' }, 
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
				labels:{
					format: '{value:%H:%M}', 
					align: 'left', 
				}
			}, 
			yAxis:{ title:null, max:100, tickPositions:[0, 50, 100], labels:{ format: '{value} % ', } },
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
			series: [ {name: 'Sent', color:'#48D1CC',  data: data }]
		});
	});
});
