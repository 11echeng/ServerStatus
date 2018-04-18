function ValidationEvent() {

    if (document.getElementById("DEV").checked || document.getElementById("TEST").checked || document.getElementById("PROD").checked) {
        //DEV radio buttion is checked
        var buttonD = document.getElementById("DEV").checked;
        var buttonT = document.getElementById("TEST").checked;
        var buttonP = document.getElementById("PROD").checked;
                
        if (buttonD == true) {
            var Dvalue = confirm("Do you want to report an issue in TM1 DEV?");
                if (Dvalue == true) {
                    alert("User wants to report an issue in TM1 DEV!");
                    //var email = 
                    //var subject= 
                    //document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
                    //window.open = "mailto:ase_support_team@libertymutual.com";
                    //document.location = "mailto:ase_support_team@libertymutual.com";
                    //document.location.href= "mailto:ase_support_team@libertymutual.com";
                } else {
                    alert("User does not want to report an issue in TM1 DEV!");
                }
        //TEST radio button is checked
        }

        if (buttonT == true) {
            var Tvalue = confirm("Do you want to report an issue in TM1 TEST?");
                if(Tvalue == true) {
                    alert("User wants to report an issue in TM1 TEST!");
                } else {
                    alert("User does not want to report an issue in TM1 TEST!");

                }
        } 

        if (buttonP == true) {
            var Pvalue = confirm("Do you want to report an issue in TM1 PROD?");
                if(Pvalue == true) {
                    alert("User wants to report an issue in TM1 PROD!");
                } else {
                    alert("User does not want to report an issue in TM1 PROD!");
                }
        }
        return true;
    } else {
        alert("Invalid Server Selection..! Please select a server to report an issue");
        return false;
    } 
}
