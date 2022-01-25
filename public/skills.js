var marksCanvas = document.getElementById("marksChart");

var marksData = {
  labels: ["Information Visualization", "Statistics", "Math", "Art", "Computer usage", "Programming", "Computer_graphics_programming", "HI interaction programming", "Communication", "Collaboration", "Code repository"],
  datasets: []
};

var chartDetails = {
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 10,
      stepSize: 1
    },
    pointLabels: {
      fontSize: 18
    }
  },
  legend: {
    position: 'left'
  }
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData,
  options: chartDetails
});
// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 20, left: 50},
    width = 700 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var div = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("https://raw.githubusercontent.com/actoract/IVIS-Project-1/main/public/Self-Introduction-to-IVIS22-_Responses_-_2_%20(5).csv", function(data) {

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = data.columns.slice(1)

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.group)}).keys()
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 90])
    .range([0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  var y = d3.scaleBand()
  .domain(data.map(function(d) { return d.group; }))
    .range([ 0, height ])
    .padding([0.1])
  svg.append("g")
    .call(d3.axisLeft(y))
    .on('click', function (d) {
      //alert(d3.axisLeft(y))
      marksData.datasets.push({
        label: "gggg", 
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [5, 9, 6, 7, 7, 7, 9, 9, 9, 10,10]})
        radarChart.update();
    });

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#d81eee ','#bdda00 ','#b235a3 ','#c55373 ','#ea82a1 ','#64c9a0','#6988cf ','#c8f748 ','#84105a ','#b3cd4b ','#cfacb9 ','#18cff3 ', ])

  //stack the data? --> stack per subgroup
  var stackedData = d3.stack()
    .keys(subgroups)
    (data)

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) {return x(d[0]); })
        .attr("y", function(d) { return y(d.data.group); })
        .attr("width", function(d) { return x(d[1]) - x(d[0]); })
        .attr("height",y.bandwidth())
        .on('mouseover', function (d, i) {
            d3.select(this).transition()
                 .duration('50')
                 .attr('opacity', '.85');
            div.transition()
                 .duration(50)
                 .style("opacity", 1);
            let num = (Math.round((d.value / d.data.all) * 100)).toString() + '%';
            div.html("d.data.group")
                 .style("left", (d3.event.pageX + 10) + "px")
                 .style("top", (d3.event.pageY - 15) + "px");
       })
       .on('mouseout', function (d, i) {
            d3.select(this).transition()
                 .duration('50')
                 .attr('opacity', '1');
            div.transition()
                 .duration('50')
                 .style("opacity", 0);
       })
       .on('click', function (d) {
        alert("fbndfk")
        marksData.datasets.push({
          label: "gggg", 
          backgroundColor: "rgba(0,0,200,0.2)",
          data: [5, 9, 6, 7, 7, 7, 9, 9, 9, 10,10]})
          radarChart.update();
      })
        /*.on('click', function (d, i) {
            marksData.datasets.push({
              label: "gggg", 
              backgroundColor: "rgba(0,0,200,0.2)",
              data: [5, 9, 6, 7, 7, 7, 9, 9, 9, 10,10]})
              radarChart.update();
        })*/;
})

function mouseDown() {
    console.log("hkjfhsk");
}

function mouseUp(name) {
    console.log(name);
}

function mouseClick(i) {
  marksData.datasets.push({ 
    label: "id", 
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [5, 9, 6, 7, 7, 7, 9, 9, 9]});
}

/*anychart.onDocumentReady(function () {
  // our data from bulbapedia
    var data1 = [
      {x: "HP", value: 39},
      {x: "Attack", value: 52},
      {x: "Defense", value: 43},
      {x: "Special Attack", value: 60},
      {x: "Special Defense", value: 50},
      {x: "Speed", value: 65},
    ];

    var data2 = [
      {x: "HP", value: 45},
      {x: "Attack", value: 49},
      {x: "Defense", value: 49},
      {x: "Special Attack", value: 65},
      {x: "Special Defense", value: 65},
      {x: "Speed", value: 45},
    ];  

    var data3 = [
      {x: "HP", value: 44},
      {x: "Attack", value: 48},
      {x: "Defense", value: 65},
      {x: "Special Attack", value: 50},
      {x: "Special Defense", value: 64},
      {x: "Speed", value: 43},
    ];  

    // create radar chart
    var chart = anychart.radar();
    // set chart yScale settings
    chart.yScale()
      .minimum(35)
      .maximum(65)
      .ticks({'interval':5});

    // create first series
    chart.line(data1)
    // create second series
    chart.line(data2)
    // create third series
    chart.line(data3)
    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();

  });
*/

