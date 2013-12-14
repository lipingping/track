# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext,    Context, TemplateDoesNotExist
def dashIndexView(request):
	template_name = 'dashboard/index.html'
	return render_to_response(template_name, 
			context_instance=RequestContext(request))
