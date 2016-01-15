// Author: Chi Brander, Inc.
// URL: http://www.chicagocomputerclasses.com/

function rInfo() {

    var cc_settCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    var cc_getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }



    var cc_setCookie = function (exp_days) {
        var strcookie = document.cookie;
        if (strcookie.indexOf("ccReferrer") == -1 && strcookie != null && navigator.doNotTrack != true && navigator.cookieEnabled == true) {



            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var data = JSON.parse(xhttp.responseText);

                    // get variables and set cookie
                    var cc_info = [];
                    cc_info["ccLocation"] = data.city + ", " + data.region_code;
                    cc_info["ccRegion"] = data.region_name;
                    cc_info["ccIP"] = data.ip;
                    cc_info["ccLongLat"] = data.longitude + ", " + data.latitude;
                    cc_info["ccCountry"] = data.country_name;

                    var cc_all = [];
                    for (var iname in cc_info) {
                        cc_all[iname] = cc_info[iname];
                    }

                    //set variables
                    var cc_dateobj = new Date();

                    cc_all["ccReferrer"] = document.referrer;
                    cc_all["ccLanding Page"] = document.URL;
                    cc_all["ccEntry Date"] = cc_dateobj.toString();
                    cc_all["ccExpiration Days"] = exp_days;
                    cc_all["ccSystem"] = navigator.platform;
                    cc_all["ccBrowser"] = navigator.appVersion;
                    cc_all["ccWidth"] = window.screen.width;
                    cc_all["ccHeight"] = window.screen.height;
                    cc_all["ccOrientation"] = window.screen.orientation.type;
                    //end set variables

                    //setCookie Variables
                    for (var name in cc_all) {
                        cc_settCookie(name, cc_all[name], exp_days);
                    }

                }
            };
            xhttp.open("GET", "//freegeoip.net/json/", true);
            xhttp.send();





            // END of setting Cookie

        }
    }



    var cc_getInfo = function () {
        var cc_call = [];
        cc_call["ccReferrer"] = cc_getCookie("ccReferrer");
        cc_call["ccLanding Page"] = cc_getCookie("ccLanding Page");
        cc_call["ccEntry Date"] = cc_getCookie("ccEntry Date");
        cc_call["ccExpiration Days"] = cc_getCookie("ccExpiration Days");
        cc_call["ccSystem"] = cc_getCookie("ccSystem");
        cc_call["ccBrowser"] = cc_getCookie("ccBrowser");
        cc_call["ccWidth"] = cc_getCookie("ccWidth");
        cc_call["ccHeight"] = cc_getCookie("ccHeight");
        cc_call["ccOrientation"] = cc_getCookie("ccOrientation");
        cc_call["ccLocation"] = cc_getCookie("ccLocation");
        cc_call["ccRegion"] = cc_getCookie("ccRegion");
        cc_call["ccIP"] = cc_getCookie("ccIP");
        cc_call["ccLongLat"] = cc_getCookie("ccLongLat");
        cc_call["ccCountry"] = cc_getCookie("ccCountry");
        var str = "";
        for (var name in cc_call) {
            str += name.substring(2) + ": " + cc_call[name] + ";" + "\n";
        }
        return str;

    }

    this.getAll = function () {
        return cc_getInfo();
    }

    this.set = function (days) {
        cc_setCookie(days);
    }

    this.get = function (name) {
        return cc_getCookie("cc" + name);
    }


}
