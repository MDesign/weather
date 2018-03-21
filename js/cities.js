//$(document).ready(function () {

//    var data = $.getJSON('https://api.myjson.com/bins/i8run', function (data) {
//
//    };)


//});

var section = document.getElementById('cities');

var cityName = data.list[0].name;
var citiesArray = data.list;

function getCities(myArray) {
    var cityArrayLength = [];
    for (var i = 0; i < myArray.length; i++) {
        cityArrayLength.push(myArray[i]);
    }
}
getCities(citiesArray);

function createDiv(myArray) {

    for (var i = 0; i < myArray.length; i++) {
        var div = document.createElement('div');
        var div2 = document.createElement('div');    
        var divInfo = document.createElement('div');
        var generalDiv = document.createElement('div');
        
        div.setAttribute('id', myArray[i].name);
        div.setAttribute('class', 'divCity');
//        div.setAttribute('ontouchstart',this.classList.toggle('hover'));
        div2.setAttribute('class', 'filterCity');
    //        div2.setAttribute('onmouseover', alert('Hello'));
        divInfo.setAttribute('class', 'divInfo');
        
        
        div2.innerHTML = myArray[i].name;
        div.append(div2);
        divInfo.innerHTML = createStatsDiv(myArray[i], i);
        div.append(divInfo);
        section.append(div);
        
        console.log(myArray[i].main)
    }
}
createDiv(citiesArray);

function createStatsDiv(cell, id){
    return "<p "+"id="+id+">" + "Humidity: " + cell.main.humidity + '</p>'+ '<p>' + "Pressure: " + cell.main.pressure + '</p>' + '<p>' + "Temperature: " + cell.main.temp + '</p>' + '<p>' + "Temp. Max: " + cell.main.temp_max + '</p>' + '<p>' + "Temp. Min: " + cell.main.temp_min + '</p>' + '<p>' + "Sea Level: " + cell.main.sea_level + '</p>' + '<p>' + "Ground Level: " + cell.main.grnd_level + '</p>';
}

$(document).ready(function () {

$('.divCity').on('mouseover', function(){
    $('.divInfo').show();
    $('.filterCity').hide();
});

$('.divCity').on('mouseout', function(){
    $('.divInfo').hide();
    $('.filterCity').show();
});

});