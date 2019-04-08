var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js');
document.head.appendChild(jQueryScript);

function cookieHandler(document, scan_tool) {
  this.document = document
  this.scan_tool = scan_tool
  this.getParameters = function(document, hashBased) {
      var query;
      if(hashBased) {
        var pos = location.href.indexOf("?");
        if(pos==-1) return [];
        query = location.href.substr(pos+1);
      } else {
        query = location.search.substr(1);
      }
      var result = {};
      query.split("&").forEach(function(part) {
        if(!part) return;
        part = part.split("+").join(" "); // replace every + with space, regexp-free version
        var eq = part.indexOf("=");
        var key = eq>-1 ? part.substr(0,eq) : part;
        var val = eq>-1 ? decodeURIComponent(part.substr(eq+1)) : "";
        var from = key.indexOf("[");
        if(from==-1) result[decodeURIComponent(key)] = val;
        else {
          var to = key.indexOf("]",from);
          var index = decodeURIComponent(key.substring(from+1,to));
          key = decodeURIComponent(key.substring(0,from));
          if(!result[key]) result[key] = [];
          if(!index) result[key].push(val);
          else result[key][index] = val;
        }
      });
      return result;
    }

  this.set_cookies = function(){

    Cookies.get('first_referrer') == null ? Cookies.set('first_referrer', this.document.referrer, { expires: 365, path: '/' }) : Cookies.get('first_referrer');
    Cookies.get('first_landing_page') == null ? Cookies.set('first_landing_page', this.document.location.href, { expires: 365, path: '/' }) : Cookies.get('first_landing_page');
    
    var params = this.getParameters()

    var self = this
    utm_params = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_adgroup", "utm_keyword"]
    possible_params = Object.keys(params)
    utm_params.forEach(function(param){
      if ( possible_params.includes(param) ){
        availParams  =  Cookies.get()
        if ((param == 'utm_medium') && availParams['Visitor_Medium__c'] != null) {
          Cookies.get('utm_medium') == null ? Cookies.set('utm_medium', availParams['Visitor_Medium__c'], { expires: 365, path: '/' }) : Cookies.get(param)  
        }
        Cookies.set(param, params[param], { expires: 365, path: '/' })
      }
    });
  }

  this.set_scan_source = function(){
    Cookies.set("scan_source_referrer", this.document.referrer, { expires: 365, path: '/' })
    Cookies.set("scan_source", this.document.location.href, { expires: 365, path: '/' })
  }

  this.is_scan_done = function(){
    if (this.document.location.href.includes('business-listings')) || (this.document.location.href.includes('scan.synup.com/search/'))
    Cookies.set("scan_completed", true, { expires: 365, path: '/' }) 
  }
}

$(document).ready(function(){
  var cookies_handle = new cookieHandler(document)
  cookies_handle.set_cookies();
  cookies_handle.is_scan_done();
});
