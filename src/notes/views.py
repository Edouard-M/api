from django.shortcuts import render
from .models import Client


def notes(request):

    context = {
        "title": "Notes App",
    }

    return render(request, "notes/index.html", context=context)


def log_in(request):

    context = {
        "title": "Log In",
    }

    if request.method == "POST":
        username = request.POST.get("username", None)
        password = request.POST.get("pwd", None)

        if username and password:
            client = Client.objects.get(username=username)
            print(f"Loged In: {client}>")

    return render(request, "notes/log_in.html", context=context)


def sign_in(request):

    context = {
        "title": "Sign In",
        "error": None,
    }

    if request.method == "POST":
        username = request.POST.get("username", None)
        email = request.POST.get("email", None)
        password = request.POST.get("pwd", None)

        if username and password:
            try:
                Client.objects.create(username=username, password=password)
                print(f"Signed In: <Username = {username} - email={email} - password={password}>")
            except Exception as er:
                context["error"] = er

    return render(request, "notes/sign_in.html", context=context)
