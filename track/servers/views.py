# Create your views here.
from django.utils import simplejson
from django.http import HttpResponseRedirect,   HttpResponse,   Http404
from django.shortcuts import render_to_response
from django.template import RequestContext,    Context, TemplateDoesNotExist
from django.views.generic.base import TemplateView, View

from django.contrib.auth.decorators import login_required
servers = [
			{
				'id':'acd0987-1afd-0089-a567', 
				'name': 'track-db-0001', 
				'cpu':{'ratio':18.5, 'cores':4}, 
				'mem':{'ratio':40, 'used':3250,'total':8000}, 
				'disk': {'ratio':28, 'used':132.9, 'total':2130}, 
				'net':{'ratio':12.3, 'in':123.34, 'out':56.8}, 
			}, 
			{
				'id':'acd0987-1afd-1189-a567', 
				'name': 'track-db-0002', 
				'cpu':{'ratio':35.5, 'cores':8}, 
				'mem':{'ratio':10.12, 'used':620,'total':16000}, 
				'disk': {'ratio':78, 'used':8132.9, 'total':12130}, 
				'net':{'ratio':40.3, 'in':600.34, 'out':300.8}, 
			}, 
		]


#@login_required
def IndexView(request):
	template_name = "servers/index.html"
	return render_to_response(template_name, 
			{'servers':servers}, 
			context_instance=RequestContext(request))


class ServerDetailView(TemplateView):
	template_name = "servers/detail.html"

	def	get_context_data(self, **kwargs):
		context = super(ServerDetailView,  self).get_context_data(**kwargs)
		self.server_id   = kwargs['server_id']
		if self.request.GET.has_key('tab'):
			tab = self.request.GET['tab']
		else:
			tab = 'server_overview'
		print tab
		print kwargs

		context['tab'] = tab
		ss = servers
		for s in ss:
			if s['id'] == self.server_id:
				context['curr_server'] = s
		context['servers'] = ss
		return context

def ServerActionViewFunc(request,server_id,action):
	template_name = "servers/detail.html"
	print action
	servers = None
	return render_to_response(template_name, 
			{'servers':servers}, 
			context_instance=RequestContext(request))
