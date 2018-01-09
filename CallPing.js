var p = new Ping();
      //every hostname gets called to function(a) {} and grabs favicon. 
      p.ping("http://vmkit-etmone01:9510/pmpsvc", function(err, data) { /* this function is called to get the status of ping function*/
        // If statement: If an error: change status to offline; if not: online
        if (err) {
          console.log("error loading resource")
          data = err;
        }
        //responsible for adding the data value into the class of "TM1-DEV"
        document.getElementById("TM1-DEV").innerHTML = data;
      });

      p.ping("http://vmkit-etmone01:9510/pmpsvc", function(err, data) {
         if (err) {
          console.log("error loading resource")
          data = err;
        }
        document.getElementById("TM1-TEST").innerHTML = data;
      });
      p.ping("http://vmpip-etmone01:9510/pmpsvc", function(err, data) {
        if (err) {
          data = err;
        }
        document.getElementById("TM1-PROD").innerHTML = data;
      });