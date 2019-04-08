function generateUUID() {
    var d = new Date().valueOf();
    return d;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function assignID(unique_id) {
    var d = new Date();
    d.setTime(d.getTime() + (1825 * 24 * 60 * 1000)); // set expiry to 5 years from date
    var expires = "expries=" + d.toUTCString();
    document.cookie = "sy_uuid" + "=" + unique_id + ";" + expires + ";path=/";
    localStorage.setItem("sy_uuid",unique_id)
}

function checkCookie() {
    var sy_uuid = getCookie("sy_uuid");
    console.log("sy_uuid",sy_uuid);
    if (sy_uuid == "") {
        assignID(generateUUID());
    }
}

// check if UUID exists, else assign one

checkCookie();
