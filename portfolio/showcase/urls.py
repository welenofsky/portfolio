from django.conf.urls import url
from django.contrib import admin

from .views import homepage

urlpatterns = [
    url(r'^$', homepage)
]
