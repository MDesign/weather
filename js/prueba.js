$(document).ready(function () {

    $.getJSON( src="../json/weather.json", function (data) {
       
        var section = document.getElementById('cities');
        var cityName = data.list[0].name;
        var citiesArray = data.list;
        
        getCities(citiesArray);
        createDiv(citiesArray);
        
        function getCities(myArray) {
            var cityArrayLength = [];
            for (var i = 0; i < myArray.length; i++) {
                cityArrayLength.push(myArray[i]);
            }
        }

        function createDiv(myArray) {

            for (var i = 0; i < myArray.length; i++) {
                var div = document.createElement('div');
                var p = document.createElement('p');
                var divInfo = document.createElement('div');
                var generalDiv = document.createElement('div');
                var containingDiv = document.createElement('div');
               

                div.setAttribute('id', (myArray[i].name).replace(/ /g, ''));
                div.setAttribute('class', 'divCity');
                generalDiv.setAttribute('class', 'generalDiv');
                containingDiv.setAttribute('class', 'containingDiv');
                //        div2.setAttribute('class', 'filterCity');
                //        div2.setAttribute('onmouseover', alert('Hello'));
                divInfo.setAttribute('class', 'divInfo');
                


                p.innerHTML = myArray[i].name;
                div.append(p);
                divInfo.innerHTML = createStatsDiv(myArray[i], i);
                generalDiv.append(div);
                generalDiv.append(divInfo);
                section.append(containingDiv);
                containingDiv.append(generalDiv)
                console.log(myArray[i].main)
            }
        }

        function createStatsDiv(cell, id) {
            return "<p " + "id=" + id + ">" + "Humidity: " + cell.main.humidity + '%' + '</p>' + '<p>' + "Pressure: " + cell.main.pressure + ' atm' + '</p>' + '<p>' + "Temperature: " + cell.main.temp + 'ºC' + '</p>' + '<p>' + "Temp. Max: " + cell.main.temp_max + 'ºC' + '</p>' + '<p>' + "Temp. Min: " + cell.main.temp_min + 'ºC' + '</p>' + '<p>' + "Sea Level: " + cell.main.sea_level + '</p>' + '<p>' + "Ground Level: " + cell.main.grnd_level + '</p>';
        }
    });

});



//$(document).ready(function () {
//
//$('.divCity').on('mouseover', function(){
//    $('.divInfo').show();
//    $('.filterCity').hide();
//});
//
//$('.divCity').on('mouseout', function(){
//    $('.divInfo').hide();
//    $('.filterCity').show();
//});
//
//});
