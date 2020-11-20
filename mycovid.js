

// chwile poczekac....

/// MAPPING ==================================
var mapping = { "mappings": {
    "logs": {
      "properties":{
          "date": {"type": "date", "format": "yyyy-MM-dd"},
          "confirmed" : {"type":"integer"},
          "deaths" : {"type":"integer"},
          "recovered" : {"type":"integer"},
          "country" : {"type": "text", "fields": {"keyword": {"type": "keyword", "ignore_above": 256 }}}
      }
    }
}}


axios.put('/covid19', mapping)
  .then(function (response) {
    console.log("done");
  })
/// MAPPING ==================================


var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
document.head.appendChild(script);
 

// chwile poczekac....

function callme(){
var countries = ["Poland","Italy","China","Germany","France","Spain","US","United Kingdom","Sweden"]

var data = null
axios.get('https://pomber.github.io/covid19/timeseries.json')
  .then(function (response) {
    console.log("done");
    data = response.data

    var newdata = ""
    var uid = 1;
    countries.map(country=>{

        console.log(country, data[country].length)
        data[country].map(row=>{
          console.log(country)
          newdata+=JSON.stringify({"index": {"_index":"covid19","_type":"logs", "_id": uid++}})
          newdata+="\n"
          row["country"] = country;
          newdata+=JSON.stringify(row)
          newdata+="\n"
          return true
        })
    })

	axios.post('/covid19/_bulk', newdata)
	.then(function (response) {
		console.log("done");
	})
	.catch(function (err){
		console.log(err)
	})
    
})
}
callme()


