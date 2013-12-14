# Create your views here.
from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect,  HttpResponse,  Http404
from django.contrib import auth
from django.shortcuts import render_to_response
from django.template import RequestContext,   Context
from django.core.context_processors import csrf

def	IndexView(request):
	pass
def LoginView(request):
	username = request.POST.get('username')
	password = request.POST.get('password')
	print username, password
	user = auth.authenticate(username=username, password=password)
	if user is not None and user.is_active:
		auth.login(request, user)
		return HttpResponseRedirect('/dashboard/')
	else:
		msg = "Login fail!"
		return HttpResponse('<script>alert(\'' + msg + '\');history.go(-1)</script>')

def	LogoutView(request):
	pass
def	ProfileView(Request):
	pass
