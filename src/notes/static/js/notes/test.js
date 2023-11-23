let fox = document.getElementById('fox');
let ear1 = document.getElementById('ear1');
let ear2 = document.getElementById('ear2');

function moveSection(idStr, xOffset, yOffset) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' translate(' + xOffset + ',' + yOffset + ')';
        domElemnt.setAttribute('transform', transformAttr);
    }
}

function rotateSection(idStr, deg) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' rotate(' + deg + ')';
        domElemnt.setAttribute('transform', transformAttr);
    }
}

function sizeSection(idStr, size) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' scale(' + size + ')';
        domElemnt.setAttribute('transform', transformAttr);
    }
}

function skewSection(idStr, size) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' skew(' + size + ')';
        domElemnt.setAttribute('transform', transformAttr);
    }
}

function testSection(idStr, rotate, x, y, skew, size) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' rotate(' + rotate + 'deg) translate(' + x + 'rem,' + y + 'rem) skew(' + skew + 'deg) scale(' + size + ')';
        //domElemnt.setAttribute('transform', transformAttr);
        domElemnt.style.transform = transformAttr;

    }
}

function getCursor(event) {
    let x = event.clientX - event.currentTarget.offsetLeft;
    //let y = event.clientY - event.currentTarget.offsetTop;

    let ratio = (x)/(500);
    if(ratio > 1)
        ratio = 1;
    else if(ratio < 0)
        ratio = 0;
    ratio = -(ratio-0.5)*2;


    rotateSection("ear1", ratio*4);
    rotateSection("ear2", ratio*4);
    sizeSection("ear1", -((ratio)/20)+1);
    sizeSection("ear2", ((ratio)/20)+1);

    sizeSection("eye1", -((ratio)/20)+1);
    sizeSection("eye2", ((ratio)/20)+1);

    sizeSection("mustache1", -((ratio)/20)+1);
    sizeSection("mustache2", ((ratio)/20)+1);

    rotateSection("hair", -ratio*4);
    rotateSection("noze", -ratio*4);
    rotateSection("mouth", -ratio*4);



    testSection("head", rotate=(-ratio*2), x=(ratio*0.1), y=(0), skew=(ratio*2), size=(1));
    testSection("head", rotate=(-ratio*2), x=(ratio*0.18), y=(0), skew=(-ratio*5), size=(1));
    testSection("noze", rotate=(-ratio*2), x=(ratio*0.12), y=(0), skew=(ratio*8), size=1+Math.abs(ratio)/80);
    testSection("mouth", rotate=(-ratio*2), x=(ratio*0.1), y=(0), skew=(ratio*8), size=1);

    testSection("eye1", rotate=(-ratio*2), x=(ratio*0.1), y=(-((ratio)/15)), skew=(ratio*8), size=-((ratio)/15)+1);
    testSection("eye2", rotate=(-ratio*2), x=(ratio*0.1), y=(((ratio)/15)), skew=(ratio*8), size=((ratio)/15)+1);

    testSection("mustache1", rotate=(-ratio*2), x=(ratio*0.2), y=(-((ratio)/15)), skew=(ratio*8), size=-((ratio)/15)+1);
    testSection("mustache2", rotate=(-ratio*2), x=(ratio*0.2), y=(((ratio)/15)), skew=(ratio*8), size=((ratio)/15)+1);

    testSection("ear1", rotate=(-ratio*2), x=(ratio*0.1), y=(-((ratio)/15)), skew=(0), size=-((ratio)/15)+1);
    testSection("ear2", rotate=(-ratio*2), x=(ratio*0.1), y=(((ratio)/15)), skew=(0), size=((ratio)/15)+1);


    let testElem = document.getElementById("test");
    ratio
    testElem.innerText = Math.round(ratio * 100) / 100;
}

//rotateSection("ear1", -2);
//rotateSection("ear2", 2);