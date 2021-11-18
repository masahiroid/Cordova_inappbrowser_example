/***********************************************************************
 * CUSTOM GLOBAL FUNCTIONS
 ***********************************************************************/
 
function open_inab_001() { 
var windowObjectReference;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

windowObjectReference = cordova.InAppBrowser.open("https://github.com/", "_blank", "location=yes");
}
function open_inab_002() { 
var windowObjectReference;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

windowObjectReference = cordova.InAppBrowser.open("https://github.com/", "_blank", "location=yes");
}
function open_inab_003() { 
var windowObjectReference;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

windowObjectReference = window.open("https://github.com/", "_blank", "location=yes");
}
function open_inab_004() { 
var windowObjectReference;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

windowObjectReference = window.open("https://github.com/", "_self", "location=yes");
}