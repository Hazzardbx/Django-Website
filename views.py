from django.shortcuts import render

# Create your views here.
def home(request):
	return render(request, "home.html")
def about(request):
    return render(request, "about/about.html")
def recycling(request):
    return render(request, "recycling/recycling.html")
def partners(request):
    return render(request, "partners/partners.html")
