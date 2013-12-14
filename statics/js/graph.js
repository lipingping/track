$(document).ready(function () {

	// Build the chart
	$('#instances-chart').highcharts({
		chart: {
			plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: true,
		height: 140,
		margin: [10,0,0,-60]
		},
		credits:{
			enabled:false
		},
		title: {
			useHTML:true,
		align:'center',
		text: "Server Summary",
		floating:true,
		style:{
			fontSize:'14px',
		},
		x:-25,
		y:1
		},
		legend:{
			useHTML:true,
			layout:'vertical',
			borderRadius:0,
			borderWidth:0,
			x:95,
			y:10,
			style:{
				fontSize:'10px',
			},
			title:{
				style:{
					fontSize:'11px',
				}
			},
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: { enabled: false },
				showInLegend: true
			}
		},
		series: [{
			type: 'pie',
			name: 'Server',
			data: [
				['ACTIVE',   45.0],
			['SUSPENDED',26.8],
			['ERROR',    8.5],
			['PAUSED',     6.2],
			]
		}]
	});
});
