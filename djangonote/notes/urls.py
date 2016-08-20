from django.conf.urls import patterns, include, url
from django.contrib import admin

from notes.views import home_view, upload_data

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'djangonote.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # url(r'^admin/', include(admin.site.urls)),

    url(r'^$', home_view, name='home'),
    url(r'^upload', upload_data, name='upload'),
    url(r'^notes/', include('notes.urls', namespace='notes')),
)
