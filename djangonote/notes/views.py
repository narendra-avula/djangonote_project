from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
def home_view(request):
    return render(request, "home.html")

def upload_data(request):
    return render(request, "uploadData.html")


class UploadPaySlips(APIView):
    def post(self, request):
        return Response({"result":"success"}, 200)
