# Create your views here.
from django.http import HttpResponse
from .models import color
def IndexView(request):
	response = ["<table>"]
	i = 1
	for k in color.keys():
		response.append("<tr><td>" + str(i)  +"</td><td>"+ k +"</td><td>"+color[k]+"</td><td style=\"background:"+k+";width:200px\"></td></tr>")
		i+=1
	response.append("</table>")
	return HttpResponse(response)


