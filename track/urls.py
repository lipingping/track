from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'track.views.home', name='home'),
    # url(r'^track/', include('track.foo.urls')),
    url(r'^docs/', 'track.tools.views.IndexView', name='home'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'track.views.home', name='home'),
    url(r'^accounts/', include('track.accounts.urls')),
    url(r'^servers/', include('track.servers.urls')),
    url(r'^dashboard/', include('track.dashboard.urls')),
)
urlpatterns += staticfiles_urlpatterns()
