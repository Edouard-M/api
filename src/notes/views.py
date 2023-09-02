from django.shortcuts import render


def notes(request):

    context = {
        "title": "Notes App",
    }

    return render(request, "notes/index.html", context=context)
