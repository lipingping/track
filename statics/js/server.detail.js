$(function () {
	// Tabular
	$('a[data-toggle="tab"]').on('shown', function (e) {
		//$('a[data-toggle="tab"]').attr('class','btn btn-warning');
		//$(this).attr('class','active btn btn-warning');
		e.target;
		e.relatedTarget;
		var curr_url = window.location.pathname;
		var href = $(this).attr('href');
		var id = href.split('=')[1]
		$("#server_detail_tab li a[data-target='" + id + "']").parents('li').addClass('active');
		var req = curr_url + href;
		alert(req);
		//$("#serverTabContent").load(req +" #"+id);
		$.get(req)
	})
	$(document).ready(function() {
		var curr_url = window.location.pathname;
		var href = $("#server_detail_tab li a").attr('href');
		var id = window.location.search.split('=')[1] || "server_overview"
		$("#server_detail_tab li a[data-target='" + id + "']").parents('li').addClass('active');
	});
});
