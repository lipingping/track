from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from track.servers.views import ServerDetailView ,  ServerActionViewFunc

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
	url(r'^$|^index.html',  'track.servers.views.IndexView',  name='ServerList'),
	url(r'^(?P<server_id>\w+-\w+-\w+-\w+)/$',  ServerDetailView.as_view()), 
	url(r'^(?P<server_id>\w+-\w+-\w+-\w+)/(?P<action>\w+)',  ServerActionViewFunc), 
)
urlpatterns += staticfiles_urlpatterns()
