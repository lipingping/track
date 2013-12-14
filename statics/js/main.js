$(document).ready(function() {
	/* set left menu hover*/
	var currPath = window.location.pathname;
	var menus = $('#left-menu > div > a ');
	var size = menus.size();
	for(;--size > -1;){
		var newPath = menus[size].pathname;
		var sel = "[href='"+ newPath + "']";
		$(sel).removeClass('active');
	}
	var pName = currPath.split('/');
	var sel = "[href='/"+ pName[1]+ "/']";
	$(sel).addClass('active');

	/* set Breadcrumbs */
	var currPath = window.location.pathname.split('/');
	var j=0;
	var newPath = currPath;
	var newPath = new Array();
	for(i in currPath)
		if( currPath[i].length>2){
			newPath[j]=currPath[i];
			j++;
		}

	for(i in newPath){
		var index = parseInt(i) +1;
		if( index == newPath.length ){
			var b = '<li class="active">' + newPath[i] + '</li>';
			$(".breadcrumb > span").before(b);
		}
		else{
			var b = '<li class=""> <a href="/'+ newPath[i] +'/">' + newPath[i] + '</a></li>';
			$(".breadcrumb >span").before(b);
		}
	}
});

