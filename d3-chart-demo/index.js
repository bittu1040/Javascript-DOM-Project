function barChart(){
const data = [
    { Severity: "CRITICAL", "Last Occurrence Time": "02/07/24 17:59", Site: "site3" },
    { Severity: "CRITICAL", "Last Occurrence Time": "02/07/24 17:59", Site: "site3" },
    { Severity: "WARNING", "Last Occurrence Time": "02/07/24 17:33", Site: "non-production-site" },
    { Severity: "CRITICAL", "Last Occurrence Time": "02/07/24 16:44", Site: "site3" },
    { Severity: "MAJOR", "Last Occurrence Time": "02/07/24 16:14", Site: "site3" },
    { Severity: "MINOR", "Last Occurrence Time": "02/07/24 14:46", Site: "site3" },
    { Severity: "WARNING", "Last Occurrence Time": "02/07/24 13:43", Site: "site3" },
    { Severity: "WARNING", "Last Occurrence Time": "02/07/24 12:42", Site: "site3" },
    { Severity: "MAJOR", "Last Occurrence Time": "02/07/24 12:29", Site: "non-production-site" },
    { Severity: "WARNING", "Last Occurrence Time": "02/07/24 8:57", Site: "non-production-site" },
    { Severity: "MINOR", "Last Occurrence Time": "02/02/24 17:18", Site: "site3" },
    { Severity: "MINOR", "Last Occurrence Time": "02/01/24 14:40", Site: "site3" },
    { Severity: "CRITICAL", "Last Occurrence Time": "02/01/24 14:37", Site: "site3" },
    { Severity: "MINOR", "Last Occurrence Time": "02/01/24 14:26", Site: "site3" },
    { Severity: "CRITICAL", "Last Occurrence Time": "01/29/2024 17:38:33", Site: "site3" },
    { Severity: "MAJOR", "Last Occurrence Time": "01/29/2024 17:27:35", Site: "site3" },
    { Severity: "WARNING", "Last Occurrence Time": "01/29/2024 17:14:42", Site: "site3" },
    { Severity: "WARNING", "Last Occurrence Time": "01/29/2024 17:13:35", Site: "site3" },
    { Severity: "CRITICAL", "Last Occurrence Time": "01/29/2024 17:13:30", Site: "site3" },
    { Severity: "CRITICAL", "Last Occurrence Time": "01/25/2024 18:52:43", Site: "N/A" }
  ];

  const counts = d3.nest()
  .key(d => d.Severity)
  .rollup(v => v.length)
  .entries(data)
  .map(d => ({ severity: d.key, count: d.value }));

// Define dimensions for the chart
const width = 600;
const height = 400;
const margin = { top: 30, right: 30, bottom: 60, left: 60 };

// Create SVG element
const svg = d3.select("#barChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create scales
const xScale = d3.scaleBand()
  .domain(counts.map(d => d.severity))
  .range([margin.left, width - margin.right])
  .padding(0.4); // Reduce the padding to make bars narrower

const yScale = d3.scaleLinear()
  .domain([0, d3.max(counts, d => d.count)])
  .range([height - margin.bottom, margin.top]);

// Create bars
svg.selectAll("rect")
  .data(counts)
  .enter()
  .append("rect")
  .attr("x", d => xScale(d.severity))
  .attr("y", d => yScale(d.count))
  .attr("width", xScale.bandwidth())
  .attr("height", d => height - margin.bottom - yScale(d.count))
  .attr("fill", "steelblue");

// Add x-axis
svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(xScale));

// Add y-axis
svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(yScale));

// Add y-axis label
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -height /2)
  .attr("y", margin.left / 4)
  .attr("dy", "0.71em")
  .attr("text-anchor", "middle")
  .text("Number of Faults");

// Add labels on bars
svg.selectAll(".bar-label")
  .data(counts)
  .enter()
  .append("text")
  .attr("class", "bar-label")
  .attr("x", d => xScale(d.severity) + xScale.bandwidth() / 2)
  .attr("y", d => yScale(d.count) - 5)
  .attr("text-anchor", "middle")
  .text(d => d.count);
  
// Add chart title
svg.append("text")
  .attr("x", width / 2)
  .attr("y", margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Faults by Severity");

}


function PieChart(){

// Data containing severity levels
var data = [
  "CRITICAL",
  "CRITICAL",
  "WARNING",
  "CRITICAL",
  "MAJOR",
  "MINOR",
  "WARNING",
  "WARNING",
  "MAJOR",
  "WARNING",
  "MINOR",
  "MINOR",
  "CRITICAL",
  "MINOR",
  "CRITICAL",
  "MAJOR",
  "WARNING",
  "WARNING",
  "CRITICAL",
  "CRITICAL"
];

// Count the occurrences of each severity level
var count = {};
data.forEach(function(severity) {
  count[severity] = (count[severity] || 0) + 1;
});

// Convert count object to array of objects
var severityData = Object.keys(count).map(function(severity) {
  return {severity: severity, count: count[severity]};
});

// Set up dimensions for the pie chart
var width = 350;
var height = 350;
var radius = Math.min(width, height) / 2;

// Define colors for each severity level
var colors = {
  "CRITICAL": "#ff0000",
  "WARNING": "#ff9900",
  "MAJOR": "#9966ff",
  "MINOR": "#33cc33"
};

// Create SVG element
var svg = d3.select("#PIEChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create arc generator
var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

// Create pie generator
var pie = d3.pie()
  .value(function(d) { return d.count; })
  .sort(null);

// Draw slices of the pie chart
var path = svg.selectAll("path")
  .data(pie(severityData))
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", function(d) { return colors[d.data.severity]; })
  .append("title")
  .text(function(d) { return d.data.severity + ": " + d.data.count; });

// Add legend
var legend = svg.selectAll(".legend")
  .data(severityData)
  .enter()
  .append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
  .attr("x", width / 2 - 18)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", function(d) { return colors[d.severity]; });

legend.append("text")
  .attr("x", width / 2 - 24)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "end")
  .text(function(d) { return d.severity + " (" + d.count + ")"; });

}


barChart();
PieChart();