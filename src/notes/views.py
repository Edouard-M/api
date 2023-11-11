from django.shortcuts import redirect, render
from django.contrib import messages
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User, BaseUserManager
from django.contrib.auth.decorators import login_required


def notes(request):

    if request.user.is_authenticated:
        return redirect("dashboard")

    context = {
        "title": "Notes App",
    }

    return render(request, "notes/index.html", context=context)


def log_in(request):

    if request.user.is_authenticated:
        return redirect("dashboard")

    context = {
        "title": "Log In",
    }

    if request.method == "POST":
        username = request.POST.get("username", None)
        password = request.POST.get("pwd", None)

        try:
            user = User.objects.get(username=username)
        except Exception as er:
            messages.error(request, 'User does not exist')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            messages.error(request, 'username OR password does not exist')

    return render(request, "notes/log_in.html", context=context)


def sign_in(request):

    if request.user.is_authenticated:
        return redirect("dashboard")

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
                user = User.objects.create_user(username=username, email=email, password=password)
                print(f"user created = {user}")
                return redirect('dashboard')
            except Exception as er:
                messages.error(request, er)
                print(f"Error = {er}")

    return render(request, "notes/sign_in.html", context=context)


def logout_user(request):
    logout(request)
    return redirect("notes")


@login_required(login_url='notes')
def dashboard(request):

    user = request.user

    context = {
        "title": f"Dashboard: {user}",
        "user": f"{user}"
    }

    return render(request, "notes/dashboard.html", context=context)
