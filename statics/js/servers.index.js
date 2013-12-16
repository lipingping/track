$(function () {
	// Check or uncheck all checkboxes ,used at servers/tabs.html:6L
	$('.check_all').click(function() {
		var selected = $(this).is(':checked');
		$(this).parents('table').find('input:checkbox').attr('checked', $(this).is(':checked'));   
		if(selected == true){
			$('button[value="soft_reboot"]').removeClass('disabled');
			$('button[value="terminate_server"]').removeClass('disabled');
		}
		else{
			$('button[value="soft_reboot"]').addClass('disabled');
			$('button[value="terminate_server"]').addClass('disabled');
		}

	});
	// Instances tr selector , used at servers/tabs.html:19L,
	$('.server_chooser').click(function() {
		var selected = $(this).find('input').is(':checked');
		$(this).find('input:checkbox').attr('checked', selected);
		if(selected == false)
			$('button[data-toggle="button"]').addClass('disabled');
		else
			$('button[data-toggle="button"]').removeClass('disabled');
	});
	// Instances action button ,used at servers/_index.html:9-11L
	$('button[data-toggle="button"]').click(function(){
			var action_type = $(this).val();
			var form = $(this).parents('div').parents('div').parents('form');
			var tr = form.find('tr').find('input:checked').parents('tr');
			var server_id = tr.attr('server_id');
			if(server_id==null)
				return;
			var url = form.attr('action') + server_id + '/'+ action_type; 

			var status_td = tr.find('td[id="server_status"]');

			$.get(url,null,function(result){
				status_td.html('rebooting <div class="pull-middle progress progress-vm-status progress-striped active"> <div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"> <span class="sr-only">45% Complete</span></div> </div>');
			});
	})
});

$(document).ready(function() {
/* DataTables Extensions for Bootstrap */
/* Default class modification */
$.extend( $.fn.dataTableExt.oStdClasses, {
	"sSortAsc": "header headerSortDown",
	"sSortDesc": "header headerSortUp",
	"sSortable": "header"
} );

/* API method to get paging information */
$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
{
	return {
		"iStart":         oSettings._iDisplayStart,
		"iEnd":           oSettings.fnDisplayEnd(),
		"iLength":        oSettings._iDisplayLength,
		"iTotal":         oSettings.fnRecordsTotal(),
		"iFilteredTotal": oSettings.fnRecordsDisplay(),
		"iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
		"iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
	};
}

/* Bootstrap style pagination control */
$.extend( $.fn.dataTableExt.oPagination, {
	"bootstrap": {
		"fnInit": function( oSettings, nPaging, fnDraw ) {
			var oLang = oSettings.oLanguage.oPaginate;
			var fnClickHandler = function ( e ) {
				e.preventDefault();
				if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
					fnDraw( oSettings );
				}
			};

			$(nPaging).addClass('pagination').append(
				'<ul class="dataTables_paginate paging_bootstrap pagination">'+
					'<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+
					'<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+
				'</ul>'
			);
			var els = $('a', nPaging);
			$(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
			$(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
		},

		"fnUpdate": function ( oSettings, fnDraw ) {
			var iListLength = 5;
			var oPaging = oSettings.oInstance.fnPagingInfo();
			var an = oSettings.aanFeatures.p;
			var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

			if ( oPaging.iTotalPages < iListLength) {
				iStart = 1;
				iEnd = oPaging.iTotalPages;
			}
			else if ( oPaging.iPage <= iHalf ) {
				iStart = 1;
				iEnd = iListLength;
			} else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
				iStart = oPaging.iTotalPages - iListLength + 1;
				iEnd = oPaging.iTotalPages;
			} else {
				iStart = oPaging.iPage - iHalf + 1;
				iEnd = iStart + iListLength - 1;
			}

			for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
				// Remove the middle elements
				$('li:gt(0)', an[i]).filter(':not(:last)').remove();

				// Add the new list items and their event handlers
				for ( j=iStart ; j<=iEnd ; j++ ) {
					sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
					$('<li '+sClass+'><a href="#">'+j+'</a></li>')
						.insertBefore( $('li:last', an[i])[0] )
						.bind('click', function (e) {
							e.preventDefault();
							oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
							fnDraw( oSettings );
						} );
				}

				// Add / remove disabled classes from the static elements
				if ( oPaging.iPage === 0 ) {
					$('li:first', an[i]).addClass('disabled');
				} else {
					$('li:first', an[i]).removeClass('disabled');
				}

				if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
					$('li:last', an[i]).addClass('disabled');
				} else {
					$('li:last', an[i]).removeClass('disabled');
				}
			}
		}
	}
} );

});
/* Table initialisation */
//"sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-6'i><'col-lg-6'p>>",
$(document).ready(function() {
	$('.btn').button();
	$('.bootstrap-datatable').dataTable( {
		"sDom": "<'col-lg-4 filter'f>rt<'col-lg-4 pull-left'i><'col-lg-8 pull-right'p>",
		"sPaginationType": "bootstrap",
		"oLanguage": {
			"sLengthMenu": "_MENU_ records per page"
		}
	} );
	$(".filter >div >label").css({"margin":"3px 0 0 -9px","width":"180px","height":"30px"});
	$(".filter >div >label input").css({"height":"30px"});
	$(".filter >div >label >input").addClass("form-control");
	$(".filter >div >label >input").attr("placeholder","Enter to filter");
	$("#datatable_info").css({'margin':'0px 0 0 -15px','color':'#666666'});
});
