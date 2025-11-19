"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os
from django.contrib import admin
from django.urls import path

def api_url(component):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    return f"https://{codespace_name}-8000.app.github.dev/api/{component}/"

urlpatterns = [
    path('admin/', admin.site.urls),
    # Example endpoint for activities
    # The actual view should be implemented in views.py and imported here
    # path('api/activities/', activities_view, name='activities'),
    # Example usage of api_url function:
    # print(api_url('activities'))
]
