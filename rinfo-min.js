// Author: Chi Brander, Inc.
// URL: http://www.chicagocomputerclasses.com/
// Thanks to: http://www.w3schools.com/js/js_cookies.asp

function rInfo(){var c=function(c,e,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var t="expires="+r.toUTCString();document.cookie=c+"="+e+"; "+t},e=function(c){for(var e=c+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var t=n[r];" "==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return""},n=function(){var c=[];c.ccReferrer=e("ccReferrer"),c["ccLanding Page"]=e("ccLanding Page"),c["ccEntry Date"]=e("ccEntry Date"),c["ccExpiration Days"]=e("ccExpiration Days"),c.ccSystem=e("ccSystem"),c.ccBrowser=e("ccBrowser"),c.ccWidth=e("ccWidth"),c.ccHeight=e("ccHeight"),c.ccOrientation=e("ccOrientation"),c.ccLocation=e("ccLocation"),c.ccRegion=e("ccRegion"),c.ccIP=e("ccIP"),c.ccLongLat=e("ccLongLat"),c.ccCountry=e("ccCountry");var n="";for(var r in c)n+=r.substring(2)+": "+c[r]+";\n";return n},r=function(c){return 0==c?n():e("cc"+c)},t=function(e,n){var t=document.cookie;if(-1!=t.indexOf("ccReferrer")||null==t||1==navigator.doNotTrack||1!=navigator.cookieEnabled)return 1==navigator.doNotTrack?"Do Not Track Enabled":1!=navigator.cookieEnabled?"Cookies Are Disabled":null==t?"Error!":r(n);var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){var t=JSON.parse(o.responseText),i=[];i.ccLocation=t.city+", "+t.region_code,i.ccRegion=t.region_name,i.ccIP=t.ip,i.ccLongLat=t.longitude+", "+t.latitude,i.ccCountry=t.country_name;var a=[];for(var g in i)a[g]=i[g];var s=new Date;a.ccReferrer=document.referrer,a["ccLanding Page"]=document.URL,a["ccEntry Date"]=s.toString(),a["ccExpiration Days"]=e,a.ccSystem=navigator.platform,a.ccBrowser=navigator.appVersion,a.ccWidth=window.screen.width,a.ccHeight=window.screen.height,a.ccOrientation=window.screen.orientation.type;for(var u in a)c(u,a[u],e);return r(n)}},o.open("GET","//freegeoip.net/json/",!0),o.send()};this.run=function(c,e){return t(c,e)}}
