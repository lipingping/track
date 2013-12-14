// JavaScript Document
//google.load("visualization", "1", {packages:["corechart"]});
//google.load("visualization", "1", {packages:["corechart"]});
//google.load('visualization', '1', {packages:['orgchart']});
//google.setOnLoadCallback(drawChart);
//google.setOnLoadCallback(drawVisualization);
//google.setOnLoadCallback(drawChart);
//google.setOnLoadCallback(drawChart);
//google.setOnLoadCallback(drawPieChart);
//google.setOnLoadCallback(drawLineChart);
//document.write('<script src="https://www.google.com/jsapi"><\/script>');
google.load("visualization", "1", {packages:["corechart"]});
google.load('visualization', '1', {packages:['gauge']});
function drawPieChart(summary) {
  //var data = google.visualization.arrayToDataTable([
  //  ['Status', 'Nums' ],
  //  ['Warning',  10],
  //  ['Crital',  3],
  //  ['Unknown',  13], 
  //  ['Ok',  220]
  //]);
  var myobj=eval(summary);
  //alert(myobj.ok);
	var data = google.visualization.arrayToDataTable([
			['Status', 'Nums' ],
			['suspended',myobj.SUSPENDED],
			['active',myobj.ACTIVE],
			['error',myobj.ERROR],
			['paused',myobj.PAUSED],
			]);

	var options = {
		width: 300, height:150,
		title:'Instances Overview', 
		titleTextStyle: {fontSize: 12, margin:10}, 
		type:'pie',
		slices: {0: {color: 'orange'},1:{color:'green'},2:{color:'red'},3: {color: 'grey'}}
	};

	var chart = new google.visualization.AreaChart(document.getElementById('instances-chart'));
	chart.draw(data, options);
}
function drawLineChart() {
	var data = google.visualization.arrayToDataTable([
			['Date', 'In', 'Out'],
			['2013-11-12',  1000,      400],
			['2013-11-13',  1170,      460],
			['2013-11-14',  660,       1120],
			['2013-11-15',  1030,      540]
			]);
	var options = {
		title: "Traffic Graph(Kbit/sec)", 
		titleTextStyle: {fontSize: 14, }, 
		type:'line',
	};

	var chart = new google.visualization.AreaChart(document.getElementById('linechart'));
	chart.draw(data, options);
}

/*
   function drawUsageChart() {
   var data = google.visualization.arrayToDataTable([
   ['Label', 'Value'],
   ['Memory', 85],
   ['CPU', 40],
   ['Network', 68]
   ]);

   var options = {
   width: 500, height:300,
   greenFrom:0, greenTo:35,
   yellowFrom:35, yellowTo:70,
   redFrom:70, redTo:100,
   minorTicks:10 
   };

   var chart = new google.visualization.Gauge(document.getElementById('usagechart'));
   chart.draw(data, options);
   }
   function drawComboChart() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
['2004/05',  165,      938,         522,             998,           450,      614.6],
['2005/06',  135,      1120,        599,             1268,          288,      682],
['2006/07',  157,      1167,        587,             807,           397,      623],
['2007/08',  139,      1110,        615,             968,           215,      609.4],
['2008/09',  136,      691,         629,             1026,          366,      569.6]
]);

var options = {
title : 'Monthly Coffee Production by Country',
vAxis: {title: "Cups"},
hAxis: {title: "Month"},
seriesType: "bars",
//series: {5: {type: "line"}}
};

var chart = new google.visualization.ComboChart(document.getElementById('combochart'));
chart.draw(data, options);
}
function drawBubbleChart() {
var data = google.visualization.arrayToDataTable([
['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
['CAN',    80.66,              1.67,      'North America',  33739900],
['DEU',    79.84,              1.36,      'Europe',         81902307],
['DNK',    78.6,               1.84,      'Europe',         5523095],
['EGY',    72.73,              2.78,      'Middle East',    79716203],
['GBR',    80.05,              2,         'Europe',         61801570],
['IRN',    72.49,              1.7,       'Middle East',    73137148],
['IRQ',    68.09,              4.77,      'Middle East',    31090763],
['ISR',    81.55,              2.96,      'Middle East',    7485600],
['RUS',    68.6,               1.54,      'Europe',         141850000],
['USA',    78.09,              2.05,      'North America',  307007000]
]);

var options = {
title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
hAxis: {title: 'Life Expectancy'},
vAxis: {title: 'Fertility Rate'},
bubble: {textStyle: {fontSize: 11}}
};

var chart = new google.visualization.BubbleChart(document.getElementById('bubblechart'));
chart.draw(data, options);
}
function drawOrgChart() {
var data = new google.visualization.DataTable();
data.addColumn('string', 'Name');
data.addColumn('string', 'Manager');
data.addColumn('string', 'ToolTip');
data.addRows([
		[{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'}, '', 'The President'],
		[{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'}, 'Mike', 'VP'],
		['Alice', 'Mike', ''],
		['Bob', 'Jim', 'Bob Sponge'],
		['Carol', 'Bob', '']
		]);
var chart = new google.visualization.OrgChart(document.getElementById('orgchart'));
chart.draw(data, {allowHtml:true});
}
function drawSccChart() {
	var data = google.visualization.arrayToDataTable([
			['Age', 'Weight'],
			[ 8,      12],
			[ 4,      5.5],
			[ 11,     14],
			[ 4,      5],
			[ 3,      3.5],
			[ 6.5,    7]
			]);

	var options = {
		title: 'Age vs. Weight comparison',
		hAxis: {title: 'Age', minValue: 0, maxValue: 15},
		vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
		legend: 'none'
	};

	var chart = new google.visualization.ScatterChart(document.getElementById('sccchart'));
	chart.draw(data, options);
}
*/
