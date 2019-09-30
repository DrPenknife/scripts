function sloty(who="KOZIK+RAFA%C5%81"){
var http = new XMLHttpRequest();
var url = 'http://www.bg.utp.edu.pl/cgi-bin/expertus/expertus3.exe';
var params = 'KAT=c%3A%2Fexpertus%2Fnew%2Fpar%2F&FST=data.fst&F_00=02&V_00='+who+'&F_01=33&V_01=&F_02=11&V_02=&cond=AND&FDT=data98.fdt&fldset=&sort=-1%2C100a%2C150a%2C200a%2C250a%2C300a%2C350a%2C400a%2C450a%2C700a%2C900a&X_0=1&R_0=1000&plainform=0&ESF=01&ESF=02&ESF=07&ESF=08&ESS=stat.htm&STPL=ANALYSIS&ESK=1&year00=1&ZA=&F_07=00&V_07=2019&year01=2019&F_31=94&V_31=&F_28=86&V_28=&F_23=98&V_23=&F_18=22&F_08=17&B_01=033&C_01=3&D_01=&F_21=41&F_14=21&F_04=16&B_00=015&C_00=3&D_00=&F_10=41&F_11=19&V_11=&F_05=40&V_05=&F_32=91&V_32=&F_29=49&V_29=&F_09=53&V_09=&F_20=78&V_20=&F_15=55&V_15=&F_16=57&F_06=25&F_22=88&F_24=79&F_13=26&druk=0&cfsect=&mask=1&ekran=ISO&I_XX=a';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

document.body.innerHTML=""
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log("done");
        document.body.innerHTML=http.responseText
        document.body.innerText.split("Kozik Rafał (liczba N) ; udział jednostkowy:")
        var suma = document.body.innerText.split("\n").filter(x=>x.indexOf("Kozik")>-1).filter(x=>x.indexOf("liczba N")>-1).map(x=>parseFloat(x.split(";")[1].split(":")[1])).reduce((a,b)=>a+b)
        console.log("=====> Wypelniles:"+suma+" slota")
    }
}
http.send(params);
}


sloty()
