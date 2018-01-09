/*
What:
The ping.js creates real time pings instances 
to 3 TM1 servers: Dev[VMKID-ETMONE01] Test[VMKIT-ETMONE01] Prod[VMPIP-ETMONE01]

How:
We use the two objects favicon and timeout to measure the the status
the server(s). 

1. favicon - Every online domain has a favicon.ico object - This is used 
as a parameter that overrides the default favicon.ico
2. timeout -  This is the parameter that sets the timeout.

The ping.js is triggerd by the p.ping(domain) & function(err, data)
1. p.ping(domain) - gets the URL of the source
2. function(err, data) - returns the status & response time in ms

Variables: a , b, c, d

a= hostname
b= err type
c= function (d-e) -> changed to return "Online" 
d= time (ms)
e= time (ms)
img= favicon

ping.js is uploading a favicon.ico image from the domain and the response
time. If the favicon image does not load, an error of "offline" will return.*/

/*This function is called initally at p.ping("hostname",) function (err, data) {} 
    function (a, b) -> a = URL | b = f(err, data)
        function c(a) { -> c = f c(a) -> c = NaN
            d && clearTimeout(d); -> d = undefined -> d = undefined
            var c = new Date - e; -> c = ƒ c(a), e = undefined -> e = undefined -> e = initial time
    
*/

/*This function is called initally at "var p = new ping();"*/
var Ping = function(a) {
    this.opt = a || {}, this.favicon = this.opt.favicon || "/favicon.ico", this.timeout = this.opt.timeout || 0
};


Ping.prototype.ping = function(a, b) {
    function c(a) {
        d && clearTimeout(d);
        var c = "online"
        return "function" == typeof b ? "error" === a.type  ?  (b("offline", c)) : b(null, c) : void 0
};
    
    /*start here*/
    this.img = new Image; //Creates new image
    var d, e = new Date; //grabs the present time
    this.img.onload = c, this.img.onerror = c, this.timeout && (d = setTimeout(c, this.timeout)), this.img.src = a + this.favicon + "?" + +new Date /*updated variables*/
};