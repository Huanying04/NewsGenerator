/*
編輯中心/綜合報導

年-月-日 時:分:秒

（前言）。不過，近日就有網友討論，（內容大意），貼文引發熱議。

原PO在（某論壇）貼文指出「（網友原文）」

（截圖）
▲網友熱議（ 填入與截圖相關內容 ）。


貼文一出，不少網友紛紛回應「」、「」、「」、「」、「」、「」、「」。

不過，也有不少人(1)持反對立場(2)質疑「」、「」、「」、「」、「」、「」。（編輯：某某某）
*/

var p = 2;
var n = 2;

document.getElementById("generate").onclick = function() {
    generate();
}

document.getElementById("add_p").onclick = function() {
    var div = document.createElement("div");
    div.id = 'p'+p+'d';
    div.innerHTML = '<input id="p'+p+'" class="long-input"><button class="x-btn" onclick="del_p('+p+')">X</button>';
    document.getElementById("p").appendChild(div);
    p++;
}

document.getElementById("add_n").onclick = function() {
    var div = document.createElement("div");
    div.id = 'n'+n+'d';
    div.innerHTML = '<input id="n'+n+'" class="long-input"><button class="x-btn" onclick="del_n('+n+')">X</button>';
    document.getElementById("n").appendChild(div);
    n++;
}

function generate() {
    var str = "";
    const date = new Date();
    const year = document.getElementById("yr").value;
    const month = document.getElementById("mn").value;
    const day = document.getElementById("day").value;
    const hour = document.getElementById("hr").value;
    const minute = document.getElementById("min").value;
    const second = document.getElementById("sec").value;
    const pin = document.getElementById("p").getElementsByTagName("input");
    const nin = document.getElementById("n").getElementsByTagName("input");
    str = "編輯中心/綜合報導\r\n\r\n" +
        (year != "" ? year : date.getFullYear()) + "-" + 
        (month != "" ? month : date.getMonth()) + "-" + 
        (day != "" ? day : date.getDay()) + " " +
        (hour != "" ? hour : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())) + ":" + 
        (minute != "" ? minute : (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())) + ":" + 
        (second != "" ? second : (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())) + "\r\n\r\n" + 
        document.getElementById("preface").value + "不過，近日就有網友討論，" + document.getElementById("outline").value + "貼文引發熱議。\r\n\r\n" + 
        "原PO在" + document.getElementById("forum_name").value + "貼文指出「" + document.getElementById("sb_s").value + "」\r\n\r\n" + 
        "[放你的圖或者把這段刪掉]\r\n▲" + document.getElementById("img_desc").value + "\r\n\r\n" + 
        "貼文一出，不少網友紛紛回應";
    for (var i = 0; i < pin.length; i++) {
        if (i > 0) {
            str += "、";
        }
        str += "「" + pin[i].value + "」";
        if (i == pin.length - 1) {
            str += "。";
        }
    }
    str += "\r\n\r\n";
    str += "不過，也有不少人持反對立場";
    for (var i = 0; i < nin.length; i++) {
        if (i > 0) {
            str += "、";
        }
        str += "「" + nin[i].value + "」";
        if (i == nin.length - 1) {
            str += "。";
        }
    }
    str += "（編輯："+document.getElementById("editing").value+"）";
    document.getElementById("result").innerText = str;
}

function del_p(id) {
    document.getElementById("p"+id+"d").remove();
}

function del_n(id) {
    document.getElementById("n"+id+"d").remove();
}
