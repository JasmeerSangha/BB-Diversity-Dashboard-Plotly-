
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();
optionChanged(940);

function optionChanged(newSample) {
  buildMetadata(newSample);
  //buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    Object.entries(result).forEach(([key, value]) =>{
      PANEL.append("h6").text(key + " : " + value);
    });
   
    
    var gaugedata = [
      {
        type: "indicator",
        mode: "gauge",
        value: result.wfreq,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 20 } },
        gauge: {
          axis: { range: [null, 10]},
          bar: { color: "rgb(122, 171, 255)"},
          steps: [
            { range: [-0.5, 2.5], color: 'rgb(250, 198, 130)' },
            { range: [2.5,4.5], color: "rgb(250, 230, 130)" },
            { range: [4.5,6.5], color: "rgb(226, 250, 130)" },
            { range: [6.5,8.5], color: "rgb(178, 250, 130)" },
            { range: [8.5,10.5], color: "rgb(178, 250, 215)"}
          ],
          
        }
      }
    ];
    
    var layout = {

      margin: { t: 25, r: 25, l: 25, b: 25 },
      font: {  family: "Arial" }
    };
    
    Plotly.newPlot('gauge', gaugedata, layout);



  });
}



function buildCharts(sample){


  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
  


// Sort the data array using the greekSearchResults value
    result.sample_values.sort(function(a, b) {
      return parseFloat(b) - parseFloat(a);
    });

// Trace1 for the bar chart
    var trace1 = {
      x: result.sample_values.slice(0, 10).reverse(),//map(row => row.sample_values),
      y: result.otu_ids.map(id=>`OTU ${id}`).slice(0, 10).reverse(),//map(row => row.otu_labels),
      text: result.otu_labels.slice(0, 10).reverse(),//map(row => row.otu_labels),
      type: "bar",
      marker:{colorscale: 'Portland',
      color: result.sample_values.slice(0, 10).reverse()},//'rgb(242, 193, 124)',
      orientation: "h",
      opacity: 0.6
    };

// data
    var bardata = [trace1];

// Apply the group bar mode to the layout
    var layout = {
      xaxis: { title:{text:'Counts'},},
      margin: {l: 100, r: 100, t: 100, b: 100},
      font: {  family: "Arial" }
    };

// Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", bardata, layout);

    var trace2 = {
      x: result.otu_ids,
      y: result.sample_values,
      
      mode: 'markers',
      marker: {colorscale:'Portland',
      color: result.otu_ids,
        opacity: 0.7,
        bordercolor: 'black',
        size: result.sample_values
      }
    };
    
    var bubbledata = [trace2];
    
    var layout = {
      xaxis: { title:{text:'OTU ID'},},
      showlegend: false,
      font: {  family: "Arial" }
    };
    
    Plotly.newPlot('bubble', bubbledata, layout);





  });
};










// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] }];
//     Plotly.newPlot("plot", data);
//   };
  
//   d3.selectAll("#dropdownMenu").on("change", updatePlotly);
//   function updatePlotly() {
//     var dropdownMenu = d3.select("#dropdownMenu");
//     var dataset = dropdownMenu.property("value");
  
//     var xData = [1, 2, 3, 4, 5];
//     var yData = [];
  
//     if (dataset === 'dataset1') {
//       yData = [1, 2, 4, 8, 16];
//     };
  
//     if (dataset === 'dataset2') {
//       yData = [1, 10, 100, 1000, 10000];
//     };
  
//     var trace = {
//       x: [xData],
//       y: [yData],
//     };
//     Plotly.restyle("plot", trace);
//   };
  
//   init();
