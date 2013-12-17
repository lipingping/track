function drawGraphs(id, type, url, xAxis, yAxis, toolTip, plotOptions, callback){

	if(!yAxis){
		yAxis = {
			max:100, 
			points:[0, 50, 100], 
			units:'%', 
		}
	}
	if(!toolTip){
		toolTip = { units:'%', }
	}
	if(!plotOptions){
		plotOptions = {area:{stacking:''}}
	}

	$.getJSON(url,  function(data){
		$('#'+ id).highcharts({ 
			chart: {
				height: 160, 
				type: type,  zoomType: 'x', plotBorderWidth:1, 
				spacing: [10,  14,  15,  0], 
				showAxes:true, 
				alignTicks:true, 
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
				showFirstLabel:false, 
				showLastLabel:false, 
            	tickPositioner: function () {
            	    var positions = [],
            	        tick = Math.floor(this.dataMin),
            	        increment = Math.ceil((this.dataMax - this.dataMin) / 6);

            	    for (; tick - increment <= this.dataMax; tick += increment) {
            	        positions.push(tick);
            	    }
            	    return positions;
            	}
			}, 
			yAxis:{ 
				title:null, 
				max:yAxis['max'], 
				tickPositions:yAxis.points, 
				labels:{ format: '{value} '+ yAxis.units + " ", }, 
				lineWidth:0,
			},
			legend:{borderWidth:0,},
			tooltip: { 
				shared: true, crosshairs: true, valueSuffix: +yAxis.unis, 
				pointFormat: '{series.name}: <b>{point.y:,.2f} '+toolTip.units+'</b><br/>'
			},
			plotOptions: { 
				area: { 
					stacking: plotOptions['area']['stacking'], 
					//stacking: 'percent', 
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


	//function drawGraphs(id, type, url, xAxis, yAxis, toolTip, plotOptions, callback);
	var xAxis ={};
	var yAxis = {
		max:10, 
		units:null, 
		points:[0, 5, 10], 
	};

	var toolTip = {units:'Kbits/sec'};
	var plotOptions={area:{stacking:'normal'}};

	drawGraphs('cpuInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/cpu", null, null, null, plotOptions);

	/* Load info */
	var atoolTip = {units:''};
	var ayAxis = {
		max:10, 
		units:'', 
		points:[0, 5, 10], 
	};
	drawGraphs('loadInfo', 'line', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/load",xAxis,ayAxis,atoolTip);

	/* memoryInfo */
	yAxis.points = null;
	yAxis.units  = '%';
	toolTip.units = '%';

	drawGraphs('memoryInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/memory", 
		xAxis,null, null, null);


	/* disksInfo */
	drawGraphs('disksInfo', 'area', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/disks", 
		xAxis, null, null, null);

	/* networkInfo */
	yAxis = {
		max: 1024, 
		units:'', 
		points:[0, 256, 512, 768, 1024], 
	};
	toolTip.units = 'Kbits/sec';
	drawGraphs('networkInfo', 'line', "http://10.211.55.7:82/servers/acd0987-1afd-0089-a567/network", 
		null, yAxis, toolTip, null
	);
});
