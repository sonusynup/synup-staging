
function countryState(country_name, state_name){
  this.country_name = country_name;
  this.state_name =  state_name;
  this.all_states = {
    'AU' : "Australian Capital Territory,ACT|New South Wales,NSW|Northern Territory,NT|Queensland,QLD|South Australia,SA|Tasmania,TAS|Victoria,VIC|Western Australia,WA",
    'CA' : "Alberta,AB|British Columbia,BC|Manitoba,MB|New Brunswick,NB|Newfoundland and Labrador,NL|Northwest Territories,NT|Nova Scotia,NS|Nunavut,NU|Ontario,ON|Prince Edward Island,PE|Quebec,QC|Saskatchewan,SK|Yukon,YT",
    'US' : "Alabama,AL|Alaska,AK|Arizona,AZ|Arkansas,AR|California,CA|Colorado,CO|Connecticut,CT|Delaware,DE|Florida,FL|Georgia,GA|Hawaii,HI|Idaho,ID|Illinois,IL|Indiana,IN|Iowa,IA|Kansas,KS|Kentucky,KY|Louisiana,LA|Maine,ME|Maryland,MD|Massachusetts,MA|Michigan,MI|Minnesota,MN|Mississippi,MS|Missouri,MO|Montana,MT|Nebraska,NE|Nevada,NV|New Hampshire,NH|New Jersey,NJ|New Mexico,NM|New York,NY|North Carolina,NC|North Dakota,ND|Ohio,OH|Oklahoma,OK|Oregon,OR|Pennsylvania,PA|Puerto Rico,PR|Rhode Island,RI|South Carolina,SC|South Dakota,SD|Tennessee,TN|Texas,TX|U.S. Virgin Islands,VI|Utah,UT|Vermont,VT|Virginia,VA|Washington,WA|Washington, D.C.,DC|West Virginia,WV|Wisconsin,WI|Wyoming,WY",
    'USA': "Alabama,AL|Alaska,AK|Arizona,AZ|Arkansas,AR|California,CA|Colorado,CO|Connecticut,CT|Delaware,DE|Florida,FL|Georgia,GA|Hawaii,HI|Idaho,ID|Illinois,IL|Indiana,IN|Iowa,IA|Kansas,KS|Kentucky,KY|Louisiana,LA|Maine,ME|Maryland,MD|Massachusetts,MA|Michigan,MI|Minnesota,MN|Mississippi,MS|Missouri,MO|Montana,MT|Nebraska,NE|Nevada,NV|New Hampshire,NH|New Jersey,NJ|New Mexico,NM|New York,NY|North Carolina,NC|North Dakota,ND|Ohio,OH|Oklahoma,OK|Oregon,OR|Pennsylvania,PA|Puerto Rico,PR|Rhode Island,RI|South Carolina,SC|South Dakota,SD|Tennessee,TN|Texas,TX|U.S. Virgin Islands,VI|Utah,UT|Vermont,VT|Virginia,VA|Washington,WA|Washington, D.C.,DC|West Virginia,WV|Wisconsin,WI|Wyoming,WY",
    'NZ' : "Auckland,AUK|Bay of Plenty,BOP|Canterbury,CAN|Gisborne,GIS|Marlborough,MBH|Manawatu-Wanganui,MWT|Nelson,NSN|Northland,NTL|Otago,OTA|Southland,STL|Tasman,TAS|Hawke's Bay,HKB|Taranaki,TKI|Waikato,WKO|Wellington,WGN|West Coast,WTC|Chatham Islands Territory,CIT"
    };
  var country_arr = new Array("Australia,AU", "Canada,CA", "United States,US", "USA,US", "New Zealand,NZ");
  this.getCountry = function(){
    for (var i=0; i < country_arr.length; i++) { 
      var country_text = country_arr[i].split(",")[0];
      var country_abb = country_arr[i].split(",")[1]; 
      
      if ((this.country_name.toLowerCase() == country_text.toLowerCase()) || (this.country_name.toLowerCase() == country_abb.toLowerCase())){
        return country_abb;
      }
    }
  }
  this.getState = function(){
    country_iso = this.getCountry()
    var states_arr = this.all_states[country_iso].split("|");
    for (var i =0; i < states_arr.length; i++) {
      var state_text = states_arr[i].split(",")[0];
      var state_abb = states_arr[i].split(",")[1];
      if ((this.state_name.toLowerCase() == state_text.toLowerCase()) || (this.state_name.toLowerCase() == state_abb.toLowerCase())){
          return state_abb 
      }
    }
  }
  this.get_iso = function(){
    var iso = new Array()
    iso[0] = this.getCountry()
    iso[1] = this.getState()
    return iso
  }
  
}



// var country_arr = new Array("Australia,AU", "Canada,CA", "USA,US");

// // States

// var s_a = new Array();
// s_a[0]="";
// s_a[1]="Australian Capital Territory,ACT|New South Wales,NSW|Northern Territory,NT|Queensland,QLD|South Australia,SA|Tasmania,TAS|Victoria,VIC|Western Australia,WA";
// s_a[2]="Alberta,AB|British Columbia,BC|Manitoba,MB|New Brunswick,NB|Newfoundland and Labrador,NL|Northwest Territories,NT|Nova Scotia,NS|Nunavut,NU|Ontario,ON|Prince Edward Island,PE|Quebec,QC|Saskatchewan,SK|Yukon,YT";
// s_a[3]="Alabama,AL|Alaska,AK|Arizona,AZ|Arkansas,AR|California,CA|Colorado,CO|Connecticut,CT|Delaware,DE|Florida,FL|Georgia,GA|Hawaii,HI|Idaho,ID|Illinois,IL|Indiana,IN|Iowa,IA|Kansas,KS|Kentucky,KY|Louisiana,LA|Maine,ME|Maryland,MD|Massachusetts,MA|Michigan,MI|Minnesota,MN|Mississippi,MS|Missouri,MO|Montana,MT|Nebraska,NE|Nevada,NV|New Hampshire,NH|New Jersey,NJ|New Mexico,NM|New York,NY|North Carolina,NC|North Dakota,ND|Ohio,OH|Oklahoma,OK|Oregon,OR|Pennsylvania,PA|Puerto Rico,PR|Rhode Island,RI|South Carolina,SC|South Dakota,SD|Tennessee,TN|Texas,TX|U.S. Virgin Islands,VI|Utah,UT|Vermont,VT|Virginia,VA|Washington,WA|Washington, D.C.,DC|West Virginia,WV|Wisconsin,WI|Wyoming,WY";


// function populateStates( countryElementId, stateElementId ){
  
//   var selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;

//   var stateElement = document.getElementById( stateElementId );
  
//   stateElement.length=0;  // Fixed by Julian Woods
//   stateElement.options[0] = new Option('Select State','');
//   stateElement.selectedIndex = 0;
  
//   var state_arr = s_a[selectedCountryIndex].split("|");
//   for (var i=0; i<state_arr.length; i++) { 
//     var state_text = state_arr[i].split(",")[0];
//     var state_abb = state_arr[i].split(",")[1];
//     stateElement.options[stateElement.length] = new Option(state_text,state_abb);
//   }
// }

// function populateCountries(countryElementId, stateElementId){
//   // given the id of the <select> tag as function argument, it inserts <option> tags
//   var countryElement = document.getElementById(countryElementId);
//   countryElement.length=0;
//   countryElement.options[0] = new Option('Select Country','-1');
//   countryElement.selectedIndex = 0;
//   for (var i=0; i<country_arr.length; i++) {
//     var country_text = country_arr[i].split(",")[0];
//     var country_iso = country_arr[i].split(",")[1];
//     countryElement.options[countryElement.length] = new Option(country_text,country_iso);
//   }

//   // Assigned all countries. Now assign event listener for the states.
//   var stateElement = document.getElementById( stateElementId );
//   stateElement.options[0] = new Option('Select State','');
//   if( stateElementId ){
//     countryElement.onchange = function(){
//       populateStates( countryElementId, stateElementId );
//     };
//   }
// }