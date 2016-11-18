// set eu cookie law cookie
function EuCookieAccept(){
    console.log("cookie set");
    var CurrentDateTime = "date";
    document.cookie = "agree-to-cookies=yes; expires=Mon, 1 APR 2030 12:00:00 UTC";
}

// check if eu cookie law cookie exists
function EuCookieCheck(){
    if (document.cookie.length == 0) {
        document.getElementById("eu-cookie-warning").style.display = 'block';
    }
}

// when the page is ready - http://youmightnotneedjquery.com/#ready
function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function() {
    console.log("Seems to be working.");
    EuCookieCheck();
});
