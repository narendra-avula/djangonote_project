from django.shortcuts import render

# Create your views here.
def home_view(request):
    return render(request, "home.html")

def upload_data(request):
    return render(request, "uploadData.html")