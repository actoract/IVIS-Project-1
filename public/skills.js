var participants = [ //Array of studens for Radar chart
  {label: "Student_1", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,3,2,5,7,5,2,5,8,9,6,3],
  hobby: "Video Games, Nature, Basketball, Design, UX",
  program: "Media Technology"
  },
  {label: "Student_2", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [4,4,5,4,6,7,3,2,8,10,10,7],
  hobby: "I like to play games, watch movies, TV series and learning in general.",
  program: "Computer Science, Human-Computer Interaction, Media Technology"
  },
  {label: "Student_3", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [4,4,6,2,7,5,5,5,7,10,9,5],
  hobby: "I love to workout, and I have played handball almost all my life, until work made it hard to keep on going. I work as a bartender besides studying, so late nights and weekends make it hard to be able to play handball. Besides that I like going to the gym, playing video games and hanging out with friends and family.",
  program: "Media Technology"
  },
  {label: "Student_4", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [4,5,5,6,7,7,3,7,2,8,8,9],
  hobby: "Playing guitar, photography, playing games and game development",
  program: "Computer Science, Media Technology"
  },
  {label: "Student_5", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [6,8,8,4,7,7,6,6,7,6,8,6],
  hobby: "I like sports and music.",
  program: "Computer Science, Human-Computer Interaction, Media Technology"
  },
  {label: "Student_6", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,3,3,2,6,2,2,3,3,9,8,3],
  hobby: "Football, Working out, TV-Series and Movies, The stock market",
  program: "Human-Computer Interaction, Media Technology"
  },
  {label: "Student_7", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,6,7,6,9,5,3,4,4,9,10,6],
  hobby: "3D printing and designing, any Adobe program (creative), basketball, tennis and golf",
  program: "Human-Computer Interaction"
  },
  {label: "Student_8", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [1,3,4,3,7,5,6,3,2,8,8,5],
  hobby: "Music, gaming",
  program: "Computer Science"
  },
  {label: "Student_9", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [5,6,5,5,8,6,7,5,4,8,6,7],
  hobby: "Videogames, music, tech, working out...",
  program: "Computer Science"
  },
  {label: "Student_10", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,6,1,7,5,2,2,2,4,8,7,3],
  hobby: "Painting, cats, plants, perhaps graphs",
  program: "Computer Science, Media Technology"
  },
  {label: "Student_11", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,4,5,7,7,3,2,3,7,4,5,5],
  hobby: "Media Technology",
  program: ""
  },
  {label: "Student_12", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,3,3,6,9,5,2,3,3,8,8,4],
  hobby: "I like playing guitar and video games",
  program: "Computer Science"
  },
  {label: "Student_13", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,2,5,7,5,4,2,2,8,9,8,6],
  hobby: "I enjoy playing the piano, going to bars with friends and a having a good sleep-in on the weekends. Also, I play a lot of Minecraft and scroll Twitter as obsessed.",
  program: "Media Technology"
  },
  {label: "Student_14", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,4,7,2,7,6,4,3,2,5,5,6],
  hobby: "Main interest is VR and things that go along with it such as full body tracking, virtual avatars, display technology, etc. Hobbies would mainly be gaming with friends, working out, reading and playing music.",
  program: "Computer Science"
  },
  {label: "Student_15", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [5,8,8,3,8,5,5,6,5,7,7,9],
  hobby: "I love video games and sports. For example, swimming and going to the gym.",
  program: "Computer Science"
  },
  {label: "Student_16", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [8,9,7,5,9,7,6,5,6,7,6,7],
  hobby: "Wargaming",
  program: "Business Administration, Finance, Law, Economics and Business"
  },
  {label: "Student_17", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,4,5,8,4,7,5,3,4,8,7,7],
  hobby: "I can say for sure that I am interested in painting and in studying art. I'm also interested in web development, language learning, yoga, coffee brewing. I like to study technical structured disciplines, however, I would qualify myself more as a creative person",
  program: "Media Technology"
  },
  {label: "Student_18", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,3,6,8,8,5,7,6,5,9,9,4],
  hobby: "I have too many interests. Running, reading, knitting, yoga, video games, drawing",
  program: "Media Technology"
  },
  {label: "Student_19", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [5,7,6,4,8,9,5,6,3,5,7,8],
  hobby: "I spend most of my spare time playing music, being outdoors or cooking.",
  program: "Computer Science"
  },
  {label: "Student_20", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [5,7,6,1,8,7,7,7,7,5,7,8],
  hobby: "Music, friends and trying new things",
  program: "Media Technology"
  },
  {label: "Student_21", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [6,6,7,8,8,6,6,5,5,10,9,8],
  hobby: "Programming, cats, photography, politics and sports",
  program: "Computer Science"
  },
  {label: "Student_22", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [7,4,5,2,9,8,3,4,3,7,6,9],
  hobby: "board games, dancing, ultimate frisbee, artificial intelligence, meeting friends, video games, ...",
  program: "Computer Science"
  },
  {label: "Student_23", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [1,1,6,3,3,6,2,1,1,4,4,4],
  hobby: "I play video games and pen-and-paper role playing games. I also help out in church with the projector, for lyrics. I am particularly interested in video games, and hope to make my own one day. (A very unique aspiration, I know)",
  program: "Computer Science"
  },
  {label: "Student_24", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [1,4,5,4,9,3,1,2,2,5,7,4],
  hobby: "I like technology and computer interaction. My hobbies are computer games, skiing and sailing. ",
  program: "Computer Science"
  },
  {label: "Student_25", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,6,5,1,7,6,3,5,5,8,7,8],
  hobby: "kayaking, windsurfing, hiking",
  program: "Media Technology"
  },
  {label: "Student_26", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,3,7,3,8,8,7,3,3,7,8,8],
  hobby: "Academically I am interested in computer graphics, most especially for animation and video games. My hobbies include playing piano, board games, and ultimate frisbee.",
  program: "Computer Science, Computer Engineering"
  },
  {label: "Student_27", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,4,5,4,7,5,5,3,3,4,5,4],
  hobby: "Mostly I just watch Youtube and play games.",
  program: "Computer Science, Media Technology"
  },
  {label: "Student_28", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [1,3,7,10,6,1,4,2,3,7,8,5],
  hobby: "My hobbies are music, art and photography",
  program: "Computer Science"
  },
  {label: "Student_29", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [1,3,5,2,7,4,1,1,3,10,8,8],
  hobby: "Reading",
  program: "Computer Science"
  },
  {label: "Student_30", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [1,4,4,10,10,2,1,4,6,8,10,2],
  hobby: "I am interested in photography and illustrations.",
  program: "Media Technology"
  },
  {label: "Student_31", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [5,3,8,3,9,8,5,4,2,9,5,8],
  hobby: "CS:GO, Friends, YouTube, Programming (often games).",
  program: "Computer Science"
  },
  {label: "Student_32", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,3,8,8,8,7,1,5,5,8,7,8],
  hobby: "art, gardening, skiing, reading, swimming and just generally trying to figure stuff out",
  program: "Media Technology"
  },
  {label: "Student_33", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,3,7,2,8,6,3,4,3,5,6,6],
  hobby: "My main hobbies are playing the guitar, badminton and video games. ",
  program: "Computer Science"
  },
  {label: "Student_34", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,1,5,2,7,4,3,3,3,5,5,5],
  hobby: "Board games, video games, game development",
  program: "Media Technology"
  },
  {label: "Student_35", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,3,5,5,8,6,7,4,3,6,6,5],
  hobby: "I like kayaking, running, developing games and traveling. ",
  program: "Computer Science"
  },
  {label: "Student_36", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,6,7,5,7,5,3,5,3,8,8,3],
  hobby: "I love cooking and baking. Also like to hike and all types of crafting e.g., knitting. ",
  program: "Media Technology"
  },
  {label: "Student_37", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,3,4,8,7,8,8,5,1,5,5,5],
  hobby: "My hobbies are playing games, programming and gardening.",
  program: "Computer Science"
  },
  {label: "Student_38", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,1,1,5,8,4,1,4,3,5,7,6],
  hobby: "Photography, Design, Travelling & Hiking",
  program: "Media Technology"
  },
  {label: "Student_39", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,3,4,8,8,5,3,3,3,5,6,6],
  hobby: "I'm interested in slowing down and appreciating the details. I'm interested in beautiful and evocative visuals and ideas. Here are some hobbies enumerated: Painting, Reading, Cooking, Programming, Climbing, Games.",
  program: "Computer Science"
  },
  {label: "Student_40", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [1,5,5,9,9,6,1,3,9,10,10,6],
  hobby: "I enjoy reading, playing sports, listening/creating music.",
  program: "Media Technology"
  },
  {label: "Student_41", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [2,4,6,7,5,4,3,4,4,3,3,5],
  hobby: "",
  program: "Media Technology"
  },
  {label: "Student_42", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [4,4,6,7,5,5,6,6,8,8,9,4],
  hobby: "VR games and skiing ",
  program: "Human-Computer Interaction, Media Technology, Graphic Design, Marketing"
  },
  {label: "Student_43", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [3,4,5,10,8,2,2,3,8,6,4,2],
  hobby: "Music. Cartoon",
  program: "Media Technology"
  },
  {label: "Student_44", 
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [5,3,7,7,8,8,3,5,6,9,9,8],
  hobby: "I'm interested in software development an qa. I like reading, watching series, doing sport.",
  program: "Computer Science"
  }
];
var marksCanvas = document.getElementById("marksChart");
var student_info = []
var marksData = {
  labels: ["Information Visualization", "Statistics", "Math", "Art", "Computer usage", "Programming", "Computer graphics programming", "HCI programming", "UX evaluation", "Communication", "Collaboration", "Code repository"],
  datasets: []
};
const setBg = () => {
  const randomColor =  "#" + Math.floor(Math.random()*16777215).toString(16);
  return randomColor
}

var infoAboutSkill = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("width", "auto")
    .style("visibility", "hidden")
    .style("background", "white")
    .style("padding", "10px")
    .style("border-radius", "20px")
    .text("User");

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

function clearRadarChart(){
  marksData.datasets.splice(0,marksData.datasets.length)
  for (i = 1; i <= student_info.length; i++){
    document.getElementById("table").deleteRow(1);
  }
  student_info.splice(0,student_info.length)
  radarChart.update();
}
// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 20, left: 80},
    width = 700 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;

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
    .call(d3.axisLeft(y));

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
        .on("mouseover", function(d){infoAboutSkill.text("User: " + d.data.group + " / " + "Skill level: " + (d[1] - d[0])); return infoAboutSkill.style("visibility", "visible");})
        .on("mousemove", function(){return infoAboutSkill.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
        .on("mouseout", function(){return infoAboutSkill.style("visibility", "hidden");})
       .on('click', function (d) {
        let single_value = participants.find(participant => participant.label == d.data.group)
        student_info.push({
          label: single_value.label,
          hobby: single_value.hobby,
          program: single_value.program
        }) 
        let table = document.getElementById('table');
          table.insertRow();
          let newCell1 = table.rows[student_info.length].insertCell();
          let newCell2 = table.rows[student_info.length].insertCell();
          let newCell3 = table.rows[student_info.length].insertCell();
          //add text to the created cell element
          newCell1.textContent = student_info[student_info.length - 1].label;
          newCell2.textContent = student_info[student_info.length - 1].hobby;
          newCell3.textContent = student_info[student_info.length - 1].program;
        
        marksData.datasets.push({
          label: single_value.label, 
          backgroundColor: "rgba(" + Math.floor(Math.random() * (255 - 0 + 1) + 0) + "," + Math.floor(Math.random() * (255 - 0 + 1) + 0) + ","+ Math.floor(Math.random() * (255 - 0 + 1) + 0)+ ",0.5)",
          data: single_value.data})
          radarChart.update();
      });
})
if (student_info.length > 0){
  let table = document.createElement('table');
  for(var i = 1; i < student_info.length; i++)
  {
    console.log(table)
    table.rows[i].cells[0].innerHTML = student_info[i].label;
    table.rows[i].cells[1].innerHTML = student_info[i].hobby;
    table.rows[i].cells[2].innerHTML = student_info[i].degree;
  }
}
