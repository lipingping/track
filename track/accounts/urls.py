from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
	
urlpatterns = patterns('',
	# Examples:
	# url(r'^$', 'track.views.home', name='home'),
	# url(r'^track/', include('track.foo.urls')),
	# Uncomment the admin/doc line below to enable admin documentation:
	# url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
	# Uncomment the next line to enable the admin:
	# url(r'^admin/', include(admin.site.urls)),
	url(r'^$|^index.html',  'track.accounts.views.IndexView',  name='accountIndex'),
	url(r'^login/',  'track.accounts.views.LoginView',  name='accountLogin'),
	url(r'^logout/',  'track.accounts.views.LogoutView',  name='accountLogout'),
	url(r'^profile/',  'track.accounts.views.ProfileView',  name='accountProfile'),
)
urlpatterns += staticfiles_urlpatterns()
