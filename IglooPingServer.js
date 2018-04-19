
var Ping = function (a) {
    this.opt = a || {},
        this.favicon = this.opt.favicon || "/favicon.ico",
        this.IEAicon = this.opt.IEAicon || "/IglooEnterpriseAdmin.ico",
        this.sicon = this.opt.sicon || "/iis-85.png",
        this.timeout = this.opt.timeout || 0
};
Ping.prototype.ping = function (a, b, s) {
    function c(b) {
        d && clearTimeout(d);
        var c = "online";
        return "function" == typeof s ? "error" === b.type ? s("offline", c) : s(null, c) : void 0
    }
    this.img = new Image;
    var d;
    new Date;
    if (a == "nserver") {
        this.img.onload = c, this.img.onerror = c, this.timeout && (d = setTimeout(c, this.timeout)), this.img.src = b + this.IEAicon + "?" + +new Date;
    } else if (a == "oserver") {
        this.img.onload = c, this.img.onerror = c, this.timeout && (d = setTimeout(c, this.timeout)), this.img.src = b + this.favicon + "?" + +new Date;
    } else {
        this.img.onload = c, this.img.onerror = c, this.timeout && (d = setTimeout(c, this.timeout)), this.img.src = b + this.sicon + "?" + +new Date;
    }
};
var p = new Ping;
p.ping("nserver", "http://vmpip-eigloo01.lm.lmig.com/EnterpriseAdmin/Content/images/", function (a, b) {
    a && (b = a), document.getElementsByTagName("nl")[0].getElementsByTagName("span")[0].innerHTML = b
    style(a, b);
         document.getElementsByTagName("nl")[0].style.color = color;
         document.getElementsByTagName("nl")[0].style.fontWeight = "900";
}), p.ping("nserver", "http://vmpip-qigloo01.lm.lmig.com/EnterpriseAdmin/Content/images/", function (a, b) {
    a && (b = a), document.getElementsByTagName("nl")[1].getElementsByTagName("span")[0].innerHTML = b
     style(a,b);
         document.getElementsByTagName("nl")[1].style.color = color;
         document.getElementsByTagName("nl")[1].style.fontWeight = "900";
}), p.ping("nserver", "http://vmkid-qigloo01.lm.lmig.com/EnterpriseAdmin/Content/images/", function (a, b) {
    a && (b = a), document.getElementsByTagName("nl")[2].getElementsByTagName("span")[0].innerHTML = b
    style(a, b);
           document.getElementsByTagName("nl")[2].style.color = color;
           document.getElementsByTagName("nl")[2].style.fontWeight = "900";
}); p.ping("ssserver", "http://vmkit-eiglsc01.lm.lmig.com/", function (a, b) {
    a && (b = a), document.getElementsByTagName("nl")[3].getElementsByTagName("span")[0].innerHTML = b
    style(a, b);  
          document.getElementsByTagName("nl")[3].style.color = color;
          document.getElementsByTagName("nl")[3].style.fontWeight = "900";
}); p.ping("oserver", "htetp://vmkit-eiglad01.lm.lmig.com/EnterpriseAdmin/", function (a, b) {
    a && (b = a), document.getElementsByTagName("nl")[4].getElementsByTagName("span")[0].innerHTML = b
   style(a, b);
       document.getElementsByTagName("nl")[4].style.color = color;
       document.getElementsByTagName("nl")[4].style.fontWeight = "900";
});
function style(a, b) {
    if (b == "online") {
        color = "green";
    } else {
        color = "red";
    }
};