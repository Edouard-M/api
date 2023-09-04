from django.shortcuts import render


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
    }

    return render(request, "notes/sign_in.html", context=context)
