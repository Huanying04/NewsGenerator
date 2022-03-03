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

var data = "";

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

document.getElementById("bahamut").onclick = async function() {
    if (data != "") {
        showToast("上傳圖片中，請稍後");
        await upload(data);
    }

    const date = new Date();
    const year = document.getElementById("yr").value;
    const month = document.getElementById("mn").value;
    const day = document.getElementById("day").value;
    const hour = document.getElementById("hr").value;
    const minute = document.getElementById("min").value;
    const second = document.getElementById("sec").value;
    const pin = document.getElementById("p").getElementsByTagName("input");
    const nin = document.getElementById("n").getElementsByTagName("input");
    var str = "[div][div]編輯中心/綜合報導[/div][div]\r\n" + 
    "[/div][div]"+(year != "" ? year : date.getFullYear()) + "-" + 
    (month != "" ? month : date.getMonth()) + "-" + 
    (day != "" ? day : date.getDay()) + " " +
    (hour != "" ? hour : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())) + ":" + 
    (minute != "" ? minute : (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())) + ":" + 
    (second != "" ? second : (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()))+"[/div][div]\r\n" +
    "[/div][div]"+document.getElementById("preface").value+"不過，近日就有網友討論，"+document.getElementById("outline").value+"貼文引發熱議。[/div][div]\r\n" +
    "[/div][div]原PO在X貼文指出「"+document.getElementById("sb_s").value+"」[/div][div]\r\n" + 
    "[/div][div]\r\n" +
    "[img="+currentImage+"][/div]" +
    "[div]▲"+document.getElementById("img_desc").value+"[/div][div]\r\n";
    str += "[/div][div]貼文一出，不少網友紛紛回應";

    for (var i = 0; i < pin.length; i++) {
        if (i > 0) {
            str += "、";
        }
        str += "「" + pin[i].value + "」";
        if (i == pin.length - 1) {
            str += "。";
        }
    }

    str += "[/div][div]\r\n";

    str += "[/div][div]不過，也有不少人持反對立場";

    for (var i = 0; i < nin.length; i++) {
        if (i > 0) {
            str += "、";
        }
        str += "「" + nin[i].value + "」";
        if (i == nin.length - 1) {
            str += "。";
        }
    }
    str += "（編輯："+document.getElementById("editing").value+"）[/div]";

    copyTextToClipboard(str);

    showToast("已複製", "#25b056");
}

document.getElementById("img").onchange = function() {
    setImage();
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
    // upload(data);
    str = "編輯中心/綜合報導<br><br>" +
        (year != "" ? year : date.getFullYear()) + "-" + 
        (month != "" ? month : date.getMonth()) + "-" + 
        (day != "" ? day : date.getDay()) + " " +
        (hour != "" ? hour : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())) + ":" + 
        (minute != "" ? minute : (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())) + ":" + 
        (second != "" ? second : (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())) + "<br><br>" + 
        document.getElementById("preface").value + "不過，近日就有網友討論，" + document.getElementById("outline").value + "貼文引發熱議。<br><br>" + 
        "原PO在" + document.getElementById("forum_name").value + "貼文指出「" + document.getElementById("sb_s").value + "」<br><br>" + 
        "<img src = \"" + data + "\" width=\"100%\"><br>▲" + document.getElementById("img_desc").value + "<br><br>" + 
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
    str += "<br><br>";
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
    document.getElementById("result").innerHTML = str;
}

function del_p(id) {
    document.getElementById("p"+id+"d").remove();
}

function del_n(id) {
    document.getElementById("n"+id+"d").remove();
}

function setImage() {
    var file = document.getElementById("img").files[0];
    var rd = new FileReader();

    rd.onloadend = function() {
        data = rd.result;
    }

    if (file) {
        rd.readAsDataURL(file);
    }
}

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
  
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    textArea.style.width = '2em';
    textArea.style.height = '2em';
  
    textArea.style.padding = 0;
  
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
  
    textArea.style.background = 'transparent';
  
  
    textArea.value = text;
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    document.execCommand('copy');
  
    document.body.removeChild(textArea);
}

function showToast(content, color) {
    var toast = document.createElement("toast");
    toast.id = "toast";
    toast.innerHTML = content;
    toast.className = "show";
    var element = document.getElementById("toasts");
    element.append(toast);
    toast.style.backgroundColor = color==undefined?"#333":color;
    setTimeout(
        function(){
            toast.className = toast.className.replace("show", "");
            toast.remove();
        },
        3000);
}