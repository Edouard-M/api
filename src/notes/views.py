from django.shortcuts import redirect, render
from django.contrib import messages
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User, BaseUserManager
from django.contrib.auth.decorators import login_required
from .models import Tag, Note, Note_User


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
            user = Note_User.objects.get(username=username)
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
                user = Note_User.objects.create_user(username=username, email=email, password=password)
                user.is_staff = True
                user.is_superuser = True
                user.save()
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
    note_user = Note_User.objects.get(username=user.username)
    test = 0
    tag = 0
    note = 0

    #user = Note_User.objects.get(username="edouard")
    #test = Tag.objects.all()
    tags = list(note_user.tags.all())
    notes = list(note_user.notes.all())
    notes_tagged = list(note_user.notes.all().filter(tags=tags[1]))
    #note = Note.objects.filter(tags=tag[1])

    all_tags = list(tags)
    all_notes = list(notes)

    admin = ""

    if note_user.is_superuser:
        admin = "(admin)"

    context = {
        "title": f"Dashboard: {note_user} {admin}",
        "test": f"Test = {notes_tagged}",
        "tag": f"Tag = {all_tags}",
        "note": f"Note = {all_notes}"
    }

    return render(request, "notes/dashboard.html", context=context)
