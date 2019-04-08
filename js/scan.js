

// update the state when country changes
$('#country').on('change', function() {
  var selected = $(this).val();
  var $stateSelect = $('#state');
  $stateSelect.find("option:first").text("Loading...");
  $.get("https://synup.com/lite/" + selected + "/states", function(data) {
    console.log(data)
    $stateSelect.find("option:gt(0)").remove();
    data.map(function(state){
      var $option = $("<option>").attr({value: state['iso']})
                                 .text(state['name']);
      this.append($option);
    }.bind($stateSelect));
    $stateSelect.find("option:first").text("Select a state");
  })
  
});

// handle the cookies
sbjs.init({
lifetime: 3,
domain: {
  host: 'http://synup.com/',
  isolate: true
},
callback: handleCookiesData
});

function handleCookiesData(data){
  console.log("Cookies showing succesfully")
}

// prefill country state and city based on the geo
var onSuccess = function(location){
    var country = location['country']['iso_code']
    var city_name = location.city.names['en']
    var state_iso = location.subdivisions[0].iso_code
    var country_iso = location.country.iso_code
    var postal_code = location.postal['code']
    if ( (country == 'US') || (country == 'CA')  || (country == 'NZ') || (country == 'AU') || (country == 'IN')) {
      $('#country').val(country)
      var $stateSelect = $('#state');
      $stateSelect.find("option:first").text("Loading...");
      $.get("https://synup.com/lite/" + $('#country').val() + "/states", function(data) {
        $stateSelect.find("option:gt(0)").remove();
        data.map(function(state){
          var $option = $("<option>").attr({value: state['iso']}).text(state['name']);
          this.append($option);
        }.bind($stateSelect));
        $stateSelect.val(state_iso);
      })
      
      var country = document.getElementById("country");
      var state = document.getElementById("state");
      var city = document.getElementById("business-city");
      var zip = document.getElementById("business-zip");
      var country_code = document.querySelectorAll('#phoneFirst');
      country.value = country_iso;
      state.value = state_iso;
      city.value = city_name; 
      zip.value = postal_code
      var country_phone_code = ""
          if (country_iso  == "US"){
            country_phone_code = "+1"
          }
          else if (country_iso  == "AU"){
            country_phone_code = "+61"
          }
          else if (country_iso  == "CA"){
            country_phone_code = "+1"
          }
          else if (country_iso  == "NZ"){
            country_phone_code = "+64"
          }
          else if (country_iso  == "IN"){
            country_phone_code = "+91"
          }
      country_code.forEach(function(element){
          element.value = country_phone_code 
      });
      
    }
  };
     
var onError = function(error){
  console.log(
      "Error:\n\n"
      + JSON.stringify(error, undefined, 4)
  );
};

try {
    geoip2.city(onSuccess, onError);
}
catch(err) {
    console.log('adblocker is blocking us')
}

//set scan tool cookies
var cookies_handle = new cookieHandler(document);
  cookies_handle.set_scan_source();

// send data to marketing app to handle it
function send_data_to_app(data){
  $.ajax({
    url : 'https://marketing-app.synup.com/scan.json',
    type : 'POST',
    data: data,
    crossDomain: true,
    success : function(data) { 
        if (data['status'] == "success") {
          scan_result = data['data']
          window.location.href = 'https://'+ scan_result['url'];  
        }
        else if (data['status'] == "failure") {
          console.log(data)
          var errors_messages = []
          errors = data['errors']
          if (errors.hasOwnProperty("business_rep")){
            errors['business_rep'].forEach(function(entry) {
                errors_messages.push(JSON.stringify(entry))
            });
          }
          else if (errors.hasOwnProperty("search")){
            errors['search'].forEach(function(entry) {
                errors_messages.push(JSON.stringify(entry))
            });
          }
          var str = "";
          errors_messages.forEach(function(error){
              str += '<li>' + error.replace(/[{}]/g, "") + '</li>' 
          });
          element = $('#error-scan')
          element.html('<p style="font-size:12px;">There were some errors</p>').append('<ul>' + str + '</ul>');
          element.find("ul").css({"color": "red", "list-style-type": "none", "padding":"0", "font-size": "12px"});
          element.find('li').addClass('li-error')
        }
        
    },
    error : function(request,error)

    {   
        // console.log("Request: "+JSON.stringify(request));
    }
  }); 
}


function parse_cb_data(res) {
  var json = JSON.parse(res);
  console.log(res);
  var given_name = json["name"]["givenName"];
  var full_name = json["name"]["fullName"];
  var business_name = json["employment"]["name"];

  var rep_name = document.getElementById("repName");
  var b_name = document.getElementById("bname");

  if (given_name != null)
  {
    rep_name.value = given_name;
  }
  else if (full_name != null)
  {
    rep_name.value = full_name;
  }

  if(business_name != null)
  {
    b_name.value = business_name;
  }
}


