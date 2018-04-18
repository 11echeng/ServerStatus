/*function being defined for favicon
a is always undefined at first*/
var Ping = function (a) {
  this.opt = a || {}, this.favicon = this.opt.favsicon || "/favicon.ico", this.timeout = this.opt.timeout || 0
};



/*function being called to define online or offfline status - each URL set in variable as a ... b is set into variable as online or offline.*/
Ping.prototype.ping = function (a, b) {
  function c(a) {
    d && clearTimeout(d);
    var c = "online"
    return "function" == typeof b ? "error" === a.type ? (b("offline", c)) : b(null, c) : void 0
  };

  /*start here - creates placeholders*/
  this.img = new Image; //Creates new image object
  var d, e = new Date; //grabs the present time for before and after. d is old e is new. 
  this.img.onload = c, this.img.onerror = c, this.timeout && (d = setTimeout(c, this.timeout)), this.img.src = a + this.favicon + "?" + +new Date /*updated variables*/
};

//Creates a new object 
var p = new Ping();

//every hostname gets called to function(a) {} and grabs favicon. 
p.ping("http://vmpip-qigloo01.lm.lmig.com/EnterpriseAdmin/Content/images", function (err, data) { /* this function is called to get the status of ping function*/
  // If statement: If an error: change status to offline; if not: online
  if (err) {
    console.log("error loading resource")
    data = err;
  }
  //responsible for adding the data value into the class of "TM1-DEV"
  document.getElementById("TM1-DEV").innerHTML = data;
});

p.ping("http://vmpip-qigloo01.lm.lmig.com/EnterpriseAdmin/", function (err, data) {
  if (err) {
    console.log("error loading resource")
    data = err;
  }
  document.getElementById("TM1-TEST").innerHTML = data;
});
p.ping("http://vmkit-eiglad01.lm.lmig.com/EnterpriseAdmin/", function (err, data) {
  if (err) {
    data = err;
  }
  document.getElementById("TM1-PROD").innerHTML = data;
});
