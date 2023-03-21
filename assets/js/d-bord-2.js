const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

window.onload = function () {

    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        exportEnabled: true,
        title :{
            text: "Dynamic Spline Chart"
        },
        data: [{
            type: "spline",
            markerSize: 0,
            dataPoints: dps 
        }]
    });
    
    var xVal = 0;
    var yVal = 100;
    var updateInterval = 1000;
    var dataLength = 50; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
            yVal = yVal + Math.round(5 + Math.random() *(-5-5));
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 
    setInterval(function(){ updateChart() }, updateInterval); 
    
    }



window.onload = function () {

    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        exportEnabled: true,
        title :{
            text: "Dynamic Spline Chart"
        },
        data: [{
            type: "spline",
            markerSize: 0,
            dataPoints: dps 
        }]
    });
    
    var xVal = 0;
    var yVal = 100;
    var updateInterval = 1000;
    var dataLength = 50; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
            yVal = yVal + Math.round(5 + Math.random() *(-5-5));
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 
    setInterval(function(){ updateChart() }, updateInterval); 
    
    }


    window.onload = function () {

        var dps = [];
        var chart = new CanvasJS.Chart("chartContainer", {
            exportEnabled: true,
            title :{
                text: "Dynamic Spline Chart"
            },
            data: [{
                type: "spline",
                markerSize: 0,
                dataPoints: dps 
            }]
        });
        
        var xVal = 0;
        var yVal = 100;
        var updateInterval = 1000;
        var dataLength = 50; // number of dataPoints visible at any point
        
        var updateChart = function (count) {
            count = count || 1;
            // count is number of times loop runs to generate random dataPoints.
            for (var j = 0; j < count; j++) {	
                yVal = yVal + Math.round(5 + Math.random() *(-5-5));
                dps.push({
                    x: xVal,
                    y: yVal
                });
                xVal++;
            }
            if (dps.length > dataLength) {
                dps.shift();
            }
            chart.render();
        };
        
        updateChart(dataLength); 
        setInterval(function(){ updateChart() }, updateInterval); 
        
        }
    
    
    
    window.onload = function () {
    
        var dps = [];
        var chart = new CanvasJS.Chart("chartContainer2", {
            exportEnabled: true,
            title :{
                text: "Dynamic Spline Chart"
            },
            data: [{
                type: "spline",
                markerSize: 0,
                dataPoints: dps 
            }]
        });
        
        var xVal = 0;
        var yVal = 100;
        var updateInterval = 1000;
        var dataLength = 50; // number of dataPoints visible at any point
        
        var updateChart = function (count) {
            count = count || 1;
            // count is number of times loop runs to generate random dataPoints.
            for (var j = 0; j < count; j++) {	
                yVal = yVal + Math.round(5 + Math.random() *(-5-5));
                dps.push({
                    x: xVal,
                    y: yVal
                });
                xVal++;
            }
            if (dps.length > dataLength) {
                dps.shift();
            }
            chart.render();
        };
        
        updateChart(dataLength); 
        setInterval(function(){ updateChart() }, updateInterval); 
        
        }
    


    
var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [{
  x:xArray,
  y:yArray,
  mode:"markers"
}];

// Define Layout
var layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);