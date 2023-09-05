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
        print(f"<Username = {username} - email={email} - password={password}>")

        if username and password:
            try:
                Client.objects.create(username=username, password=password)
            except Exception as er:
                print(f"Error: {er}")
                context["error"] = er
                # raise Exception(er)

    return render(request, "notes/sign_in.html", context=context)
