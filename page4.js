function getData(){
    var query = document.getElementById('select').value
    var xhr = new XMLHttpRequest()
    var url = "https://api.covid19api.com/live/country/";
    xhr.open('GET',url+query);
    xhr.send()
    xhr.onload=function(){
        //console.log(this.response,typeof this.response)
        var response = JSON.parse(this.response)
        console.log(response)
        renderDom(response)
    }
}

function renderDom(response){
    var tbody = document.querySelector('tbody')
    tbody.innerHTML=""
    

    for(var i=0; i<response.length; i++){
        var tr = document.createElement('tr')
        var confirm = document.createElement('td')
        confirm.textContent = response[i].Confirmed
        var deth = document.createElement('td')
        deth.textContent = response[i].Deaths
        var rec=document.createElement('td')
        rec.textContent=response[i].Recovered
        var act=document.createElement('td')
        act.textContent=response[i].Active
        var cc=document.createElement('td')
        cc.textContent=response[i].CountryCode
        var date=document.createElement('td')
        date.textContent=response[i].Date
        tr.append(confirm,deth,rec,act,cc,date)
        tbody.append(tr)
    }
    //console.log(items.length)
}
window.onload = function(){
    var Data = document.getElementById('get')
    Data.addEventListener( 'click', getData)

   
}