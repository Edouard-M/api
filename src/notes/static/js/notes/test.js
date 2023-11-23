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

function testSection(idStr, size, xOffset, yOffset) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' rotate(' + size + '), translate(' + xOffset + ',' + yOffset + ')';
        domElemnt.setAttribute('transform', transformAttr);
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


    //skewSection("head", ratio*2);
    testSection("head", -ratio*3, ratio*2, 0);
    //rotateSection("head", -ratio*3);
    //skewSection("head", ratio*20);
}

//rotateSection("ear1", -2);
//rotateSection("ear2", 2);