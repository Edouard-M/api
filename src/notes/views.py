import json
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
    admin = ""
    if note_user.is_superuser:
        admin = "(admin)"

    tags = list(note_user.tags.all())
    all_notes = list(note_user.notes.all())

    if request.method == "POST":
        if 'delete' in request.POST:
            note_id = request.POST.get('delete')
            note = Note.objects.get(id=note_id)
            print(f"delete {note}")
            note.delete()
            return redirect('dashboard')
                #tag_selected = Tag.objects.get(id=tag_filter)
                #notes_tagged = list(note_user.notes.all().filter(tags=tag_selected))

    all_notes_json = []
    if all_notes:
        for note in all_notes:

            note_tags = note.tags.all()
            tags_array = []
            for note_tag in note_tags:
                tags_array.append(note_tag.id)

            note_dict = {
                "title": note.title,
                "code": note.code,
                "description": note.description,
                "tags": tags_array,
            }
            all_notes_json.append(note_dict)

    context = {
        "title": f"Dashboard: {note_user} {admin}",

        "tags": tags,

        "all_notes_json": all_notes_json,
    }

    return render(request, "notes/dashboard.html", context=context)


@login_required(login_url='new_note')
def new_note(request):
    user = request.user
    note_user = Note_User.objects.get(username=user.username)

    tags = list(note_user.tags.all())

    tags_selected = []

    if request.method == "POST":

        if 'delete' in request.POST:
            tag_id = request.POST.get('delete')
            tag = Tag.objects.get(id=tag_id)
            tag.delete()
            return redirect('new_note')
        else:

            new_tag_title = request.POST.get('Tag')

            if 'new_tag' in request.POST:
                if new_tag_title:
                    if len(list(filter(lambda tag: tag.title==new_tag_title, tags))) == 0:
                        try:
                            new_tag = Tag.objects.create(title=new_tag_title)
                            new_tag.save()
                            note_user.tags.add(new_tag)
                            note_user.save()
                            print(f"Tag created = {new_tag}")
                            return redirect('new_note')
                        except Exception as er:
                                messages.error(request, er)
                                print(f"Error = {er}")
                    else:
                        print(f"Error = Tag already exist")
            else:

                tags_selected = request.POST.getlist('tag_select')

                title = request.POST.get("title", None)
                code = request.POST.get("cmd", None)
                description = request.POST.get("description", None)

                tags_to_add = []
                for tag in tags_selected:
                    tags_to_add.append(Tag.objects.get(id=tag))

                if title and tags_to_add:
                    try:
                        note = Note.objects.create(title=title, code=code, description=description)
                        note.tags.set(tags_to_add)
                        note.save()
                        note_user.notes.add(note)
                        note_user.save()
                        print(f"Note created = {note}")
                        return redirect('dashboard')
                    except Exception as er:
                        messages.error(request, er)
                        print(f"Error = {er}")



    context = {
        "title": f"New Note {note_user}",
        "tags": tags,
    }

    return render(request, "notes/new_note.html", context=context)