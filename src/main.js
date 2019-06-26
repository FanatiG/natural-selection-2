window.onload = function () {
    rndMainBG();
}


function rndMainBG() {
    if(document.documentElement.clientHeight < 
        document.documentElement.clientWidth) {
    var x = Math.floor((Math.random() * 4) + 1);
    var y = "url('../img/mainBG" + x + ".jpg') no-repeat";
    document.getElementsByTagName('body')[0].style
    .background = y;
    document.getElementsByTagName('body')[0].style
    .backgroundColor = "black";
    document.getElementsByTagName('body')[0].style
    .backgroundSize = "100%";
    console.log(x);
    console.log(y);
    }
}