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
        var transformAttr = ' rotate(' + rotate + 'deg) translate(' + x + 'rem,' + y + 'rem) skew(' + skew + 'deg,'+ -skew + 'deg) scale(' + size + ')';
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
    testSection("noze", rotate=(-ratio*2), x=(ratio*0.12), y=(((Math.abs(ratio))/10)), skew=(ratio*8), size=1+Math.abs(ratio)/80);
    testSection("mouth", rotate=(-ratio*2), x=(ratio*0.1), y=(((Math.abs(ratio))/10)), skew=(ratio*8), size=1);
    testSection("mouth_left", rotate=(-ratio*2), x=(ratio*0.1), y=(((Math.abs(ratio))/10)), skew=(ratio*8), size=-((ratio)/3.5)+1);
    testSection("mouth_right", rotate=(-ratio*2), x=(ratio*0.1), y=(((Math.abs(ratio))/10)), skew=(ratio*10), size=((ratio)/3.5)+1);

    testSection("eye1", rotate=(-ratio*2), x=(ratio*0.2 + 0), y=(-((ratio)/15)), skew=(ratio*8), size=-((ratio)/10)+1);
    testSection("eye2", rotate=(-ratio*2), x=(ratio*0.2), y=(((ratio)/15)), skew=(ratio*8), size=((ratio)/10)+1);

    testSection("mustache1", rotate=(-ratio*2), x=(ratio*0.2), y=(-((ratio)/15)), skew=(ratio*8), size=-((ratio)/10)+1);
    testSection("mustache2", rotate=(-ratio*2), x=(ratio*0.2), y=(((ratio)/15)), skew=(ratio*8), size=((ratio)/10)+1);

    testSection("ear1", rotate=(-ratio*6), x=(ratio*0.1), y=(-((ratio)/15)), skew=(0), size=-((ratio)/10)+1);
    testSection("ear2", rotate=(-ratio*6), x=(ratio*0.1), y=(((ratio)/15)), skew=(0), size=((ratio)/10)+1);

    let noze_path = document.getElementById("noze_path");
    noze_path.setAttribute('d', `M ${ratio*0.8-2.3} -5.7 C -1.6 -6.4 1.6 -6.4 ${ratio*0.8+2.3} -5.7 C 1.6 -3.6 -1.6 -3.6 ${ratio*0.8-2.3} -5.7`);

    let mouth_right_path = document.getElementById("mouth_right_path");
    mouth_right_path.setAttribute('d', `M ${ratio*1+3} -2 C 2 0 0 -1 0 -4`);
    let mouth_left_path = document.getElementById("mouth_left_path");
    mouth_left_path.setAttribute('d', `M ${ratio*1-3} -2 C -2 0 0 -1 0 -4`);

    let head_white_path = document.getElementById("head_white_path");
    head_white_path.setAttribute('d', `m -18 4 C -21 1 -22 -2 -22 ${ratio*4-3} C -20 ${ratio*6-5} -18 -4 -14 -3 C -8 -1 -6 -2 ${-ratio*0.2-5} ${ratio*0.1-4} C ${-ratio*0.2-3} ${ratio*0.1-8} ${-ratio*0.2+3} ${-ratio*0.1-8} ${ratio*0.2+5} ${-ratio*0.1-4} C 6 -2 8 -1 14 ${-ratio*0-3} C 18 -4 20 ${-ratio*6-5} 22 ${-ratio*4-3} C 22 -2 21 1 18 4 C 14 7 13 8 9 10 C 4 13 -4 13 -9 10 C -13 8 -14 7 -18 4`);

    let head_purple_path = document.getElementById("head_purple_path");
    head_purple_path.setAttribute('d', `m -18 4 C -21 1 -21 0 -21 0 C -18 ${ratio*4-1} -17 ${ratio*1+2} -15 ${ratio*1+3} C ${ratio*1-4} ${Math.abs(ratio)*2+10} ${ratio*1+4} ${Math.abs(ratio)*2+10} 15 ${-ratio*1+3} C 17  ${-ratio*1+2} 18  ${-ratio*4-1} 21 0 C 21 0 21 1 18 4 C 14 7 13 8 9 10 C 4 13 -4 13 -9 10 C -13 8 -14 7 -18 4`);

    let head_stroke_path = document.getElementById("head_stroke_path");
    head_stroke_path.setAttribute('d', `m -18 4 C ${ratio*1.5-21} 1 ${ratio*1.5-22} -2 ${ratio*1.5-22} -3 C ${ratio*1.5-22} -6 ${ratio*1.5-22} -10 ${ratio*1.5-20} -13 C ${ratio*1.5-11} -28 ${ratio*1.5+11} -28 ${ratio*1.5+20} -13 C ${ratio*1.5+22} -10 ${ratio*1.5+22} -6 ${ratio*1.5+22} -3 C ${ratio*1.5+22} -2 ${ratio*1.5+22} 1 18 4 C 14 7 13 8 9 10 C 4 13 -4 13 -9 10 C -13 8 -14 7 -18 4`);

    let head_fill_path = document.getElementById("head_fill_path");
    head_fill_path.setAttribute('d', `m -18 4 C ${ratio*1.5-21} 1 ${ratio*1.5-22} -2 ${ratio*1.5-22} -3 C ${ratio*1.5-22} -6 ${ratio*1.5-22} -10 ${ratio*1.5-20} -13 C ${ratio*1.5-11} -28 ${ratio*1.5+11} -28 ${ratio*1.5+20} -13 C ${ratio*1.5+22} -10 ${ratio*1.5+22} -6 ${ratio*1.5+22} -3 C ${ratio*1.5+22} -2 ${ratio*1.5+22} 1 18 4 C 14 7 13 8 9 10 C 4 13 -4 13 -9 10 C -13 8 -14 7 -18 4`);

    let testElem = document.getElementById("test");
    testElem.innerText = Math.round(ratio * 100) / 100;












    //testSection("test_head", rotate=(-ratio*2), x=(ratio*0.18), y=(0), skew=(-ratio*5), size=(1));
    testSection("test_noze", rotate=(-ratio*2), x=(ratio*0.12), y=(((Math.abs(ratio))/10)), skew=(ratio*8), size=1+Math.abs(ratio)/80);
    testSection("test_mouth_left", rotate=(-ratio*2), x=(ratio*0.1), y=(((Math.abs(ratio))/10)), skew=(ratio*8), size=-((ratio)/3.5)+1);
    testSection("test_mouth_right", rotate=(-ratio*2), x=(ratio*0.1), y=(((Math.abs(ratio))/10)), skew=(ratio*10), size=((ratio)/3.5)+1);

    testSection("test_eye1", rotate=(-ratio*2), x=(ratio*0.2 + 0), y=(-((ratio)/15)), skew=(ratio*8), size=-((ratio)/10)+1);
    testSection("test_eye2", rotate=(-ratio*2), x=(ratio*0.2), y=(((ratio)/15)), skew=(ratio*8), size=((ratio)/10)+1);

    testSection("test_ear1", rotate=(-ratio*6), x=(ratio*0.1), y=(-((ratio)/15)), skew=(0), size=-((ratio)/10)+1);
    testSection("test_ear2", rotate=(-ratio*6), x=(ratio*0.1), y=(((ratio)/15)), skew=(0), size=((ratio)/10)+1);




    let test_head_fill_path = document.getElementById("test_head_fill_path");
    //test_head_fill_path.setAttribute('d', `M -18 4 C -19.7 3.5 -21.5 3.7 -23.3 3.5 C -24 3.4 -24.1 2.7 -23.4 2.4 C -22.9 2.1 -21.9 1.4 -21.9 0.7 C -23 0.7 -23.9 0.5 -24.8 0 C -25.9 -0.5 -26.1 -0.9 -25 -1.7 C -23.2 -3 -22.5 -4.1 -22 -6 C -21.6 -8.5 -22 -10 -20 -13 C -11 -28 12 -28 20 -13 C 22 -10 21.6 -8.5 22 -6 C 22.5 -4.1 23.2 -3 25 -1.7 C 26.1 -0.9 25.9 -0.5 24.8 0 C 23.9 0.5 23 0.7 21.9 0.7 C 21.9 1.4 22.9 2.1 23.4 2.4 C 24.1 2.7 24 3.4 23.3 3.5 C 21.5 3.7 19.7 3.5 18 4 C 15 5 13 8 9 10 C 4 13 -4 13 -9 10 C -13 8 -15.2 5 -18 4`);
                                    //     M -18 4 C -19.7 3.5 -21.5 3.7 -23.3 3.5 C -24 3.4 -24.1 2.7 -23.4 2.4 C -22.9 2.1 -21.9 1.4 -21.9 0.7 C -23 0.7 -23.9 0.5 -24.8 0 C -25.9 -0.5 -26.1 -0.9 -25 -1.7 C -23.2 -3 -22.5 -4.1 -22 -6 C -21.6 -8.5 -22 -10 -20 -13 C -11 -28 12 -28 20 -13 C 22 -10 21.6 -8.5 22 -6 C 22.5 -4.1 23.2 -3 25 -1.7 C 26.1 -0.9 25.9 -0.5 24.8 0 C 23.9 0.5 23 0.7 21.9 0.7 C 21.9 1.4 22.9 2.1 23.4 2.4 C 24.1 2.7 24 3.4 23.3 3.5 C 21.5 3.7 19.7 3.5 18 4 C 15 5 13 8 9 10 C 4 13 -4 13 -9 10 C -13 8 -15.2 5 -18 4
    test_head_fill_path.setAttribute('d',
        `M -18 4 C -19.7 3.5 -21.5 3.7
        -23.3 3.5 C -24 3.4 -24.1 2.7
        -23.4 2.4 C -22.9 2.1 -21.9 1.4
        -21.9 0.7 C -23 0.7 -23.9 0.5
        -24.8 0 C -25.9 -0.5 -26.1 -0.9
        -25 -1.7 C -23.2 -3 -22.5 -4.1 -22
        -6 C -21.6 -8.5 -22 -10 -20 -13 C
        -11 -28 12 -28 20 -13 C 22 -10
        21.6 -8.5 22 -6 C 22.5 -4.1 23.2
        -3 25 -1.7 C 26.1 -0.9 25.9 -0.5
        24.8 0 C 23.9 0.5 23 0.7 21.9 0.7
        C 21.9 1.4 22.9 2.1 23.4 2.4 C
        24.1 2.7 24 3.4 23.3 3.5 C 21.5
        3.7 19.7 3.5 18 4 C 15 5 13 8 9 10
        C 4 13 -4 13 -9 10 C -13 8 -15.2 5
        -18 4`
    );

    let test_head_stroke_path = document.getElementById("test_head_stroke_path");
    test_head_stroke_path.setAttribute('d',
        `M ${ratio*3-18} 4 C ${ratio*3-19.7} 3.5 ${ratio*3-21.5} 3.7
        ${ratio*6-23.3} 3.5 C ${ratio*6-24} 3.4 ${ratio*6-24.1} 2.7
        ${ratio*6-23.4} 2.4 C ${ratio*6-22.9} 2.1 ${ratio*6-21.9} 1.4
        ${ratio*6-21.9} 0.7 C ${ratio*6-23} 0.7 ${ratio*6-23.9} 0.5
        ${ratio*6-24.8} 0 C ${ratio*6-25.9} -0.5 ${ratio*6-26.1}-0.9
        ${ratio*6-25} -1.7 C ${ratio*6-23.2} -3 ${ratio*6-22.5} -4.1 ${ratio*6-22}
        -6 C ${ratio*5-21.6} -8.5 ${ratio*5-22} -10 ${ratio*4-20} -13 C
        ${ratio*4 -11} -28 12 -28 20 -13 C 22 -10
        21.6 -8.5 22 -6 C 22.5 -4.1 23.2
        -3 25 -1.7 C 26.1 -0.9 25.9 -0.5
        24.8 0 C 23.9 0.5 23 0.7 21.9 0.7
        C 21.9 1.4 22.9 2.1 23.4 2.4 C
        24.1 2.7 24 3.4 23.3 3.5 C 21.5
        3.7 19.7 3.5 18 4 C 15 5 13 8 9 10
        C 4 13 -4 13 -9 10 C -13 8 ${ratio*3-15.2} 5
        ${ratio*3-18} 4`
    );

    let test_noze_path = document.getElementById("test_noze_path");
    test_noze_path.setAttribute('d', `M ${ratio*0.8-2.3} -5.7 C -1.6 -6.4 1.6 -6.4 ${ratio*0.8+2.3} -5.7 C 1.6 -3.6 -1.6 -3.6 ${ratio*0.8-2.3} -5.7`);

    let test_mouth_right_path = document.getElementById("test_mouth_right_path");
    test_mouth_right_path.setAttribute('d', `M ${ratio*1+3} -2 C 2 0 0 -1 0 -4`);
    let test_mouth_left_path = document.getElementById("test_mouth_left_path");
    test_mouth_left_path.setAttribute('d', `M ${ratio*1-3} -2 C -2 0 0 -1 0 -4`);

    let test_testElem = document.getElementById("test");
    test_testElem.innerText = Math.round(ratio * 100) / 100;
}

//rotateSection("ear1", -2);
//rotateSection("ear2", 2);