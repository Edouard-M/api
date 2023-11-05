from django.shortcuts import render


def index(request):
    return render(request, "api/index.html", context={"title": "API HOME"})

def test(request):
    context = {
        "title": "TEST",
    }

    return render(request, "api/test.html", context=context)
