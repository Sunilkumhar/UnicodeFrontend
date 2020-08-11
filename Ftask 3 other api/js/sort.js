
function namesort(xyz){
    console.log(xyz);
    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            console.log(data)
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {
        console.log(xyz);
        data1.sort(function(a, b) {
            return b.name - a.name;
        });
        
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}
function casessort(xyz){
    console.log(xyz);
    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            console.log(data)
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {
        console.log(xyz);
        data1.sort(function(a, b) {
            return b.cases - a.cases;
        });
        
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}
function activesort(xyz){
    console.log(xyz);
    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            console.log(data)
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {
        console.log(xyz);
        data1.sort(function(a, b) {
            return b.active - a.active;
        });
        
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}
function deathsort(xyz){
    console.log(xyz);
    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            console.log(data)
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {
        console.log(xyz);
        data1.sort(function(a, b) {
            return b.deaths - a.deaths;
        });
        
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}