var HereMapsAPI = require('here-maps-node').default; // es5
import HereMapsAPI from 'here-maps-node'; // es6
 
var config = {
  app_id:   'WSRKx0zzZotkN0ZBjPw3',
  app_code: 'VTK5fUI3pN_GzbouiERqRXDj53GdRXrReRB35t_gZ1I'
};

var hmAPI = new HereMapsAPI(config);
var geocodeParams = {
    "searchtext":    "121, Curtain Road, EC2A 3AD, London UK"
  };

  hmAPI.geocode(geocodeParams, function(err, result){
    console.log(result);
  });
   
  // matrix routing API
  var matrixRoutingParams = {
    start0: "25.6586716,-100.3583278",
    destination0: "25.6522234,-100.2942806",
    mode: "fastest;car;traffic:enabled;" // this mode is set by default
  };
   
  hmAPI.matrixRouting(matrixRoutingParams, function(err, result){
    console.log(result);
  });

  
