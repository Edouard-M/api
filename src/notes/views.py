from django.shortcuts import redirect, render
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

    request.session['client'] = None

    if request.method == "POST":
        username = request.POST.get("username", None)
        password = request.POST.get("pwd", None)

        if username and password:
            try:
                client = Client.objects.get(username=username)

                if password == client.password:
                    request.session['client'] = client.username
                    print(f"Loged In: {client}>")
                    return redirect("dashboard")
                else:
                    print("Wrong Password")

            except Exception as er:
                print(f"Wrong Username: {er}")
        else:
            print("Username and Password are mandatory")

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
                return redirect("dashboard")
            except Exception as er:
                context["error"] = er

    return render(request, "notes/sign_in.html", context=context)


def dashboard(request):

    client: Client = request.session.get('client')

    if not client:
        print("Access Denied")
        return redirect("notes")

    context = {
        "title": f"Dashboard: {client}",
    }

    return render(request, "notes/dashboard.html", context=context)
