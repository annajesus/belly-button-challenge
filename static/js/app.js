// 1. Use the D3 library to read in samples.json from the URL 
    
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const dataSample = 'Data/samples.json'

    // Promise Pending
    const dataPromise = d3.json(dataSample);
    console.log(dataPromise);

    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {   

    console.log(data);

    data.names.forEach((x) => {   

    d3.select("#selDataset").append("option")   
    .text(x)
    .property("value", x);
    });

    getPlot(data.names[0])   

    })

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// create function for plotting all of the data
function getPlot(id){

// Use the D3 library to get data from samples.json 
d3.json(url).then((data)=> {
    console.log(data)

    var wfreq = data.metadata.map(d => d.wfreq)

    console.log(`Washing Freq: ${wfreq}`)

    // filter the sample values by each of the ids (in "samples:")
    var samples = data.samples.filter(s => s.id === id)[0];

    console.log(samples);

    // gather just top 10 to display (in "sample_values:")
    var values = samples.sample_values.slice(0,10).reverse();

    // gather the top 10 OTUs ids to plot (in "otu_ids":)
    var top_OTUs = (samples.otu_ids.slice(0, 10)).reverse();

    // reformat the ids for to plot
    var OTU_id = top_OTUs.map(d => "OTU " + d)

    // console.log('OTU IDs: ${OTU_id}')

    // plot top 10 labels (in "otu_labels":)
    var labels = samples.otu_labels.slice(0, 10).reverse();

    // create trace variable for the Horizontal Bar Chart
    var trace_bar = {
        x: values,
        y: OTU_id,
        text: labels,
        marker: {
          color: 'rgba(246, 78, 139, 0.6)'},
        type:"bar",
        orientation: "h",
    };
    
    // create data variable
    var bar_data = [trace_bar]

    // create layout variable to set plots layout
    var bar_layout = {

        title: "Top 10 OUTs",
        yaxis: {
            tickmode: "linear"
        },
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30
        }
    };

    // bar plot 
    Plotly.newPlot('bar', bar_data, bar_layout)  



// 3.Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.

    // Create the bubble chart
    var trace_bubble = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: "markers",
        marker: {
            size: samples.sample_values,
            color: samples.otu_ids
        },
        text: samples.otu_labels

    };

    // create layout variable to set plots layout
    var bub_layout = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1000
    };

    // create data variable
    var bub_data = [trace_bubble]

    // plot the bubble chart
    Plotly.newPlot("bubble", bub_data, bub_layout);

}).catch(error => console.log(error)); 

} 

// create a function to get the data
function getData(id) {
    // get data from json file again 
    d3.json("Data/samples.json").then((data) => {

        // get metadata to display an individual's demographic information
        var metadata = data.metadata;
        console.log(metadata)

        // filter the metadata by id
        var data_results = metadata.filter(meta => meta.id.toString() === id)[0];

        // select the metadata id
        var id_demo_info = d3.select("#sample-metadata");

        // clear the data 
        id_demo_info.html("");

        // append the data gathered to the panel
        Object.entries(data_results).forEach((key) => {
            id_demo_info.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");

        });

    });


}

// create the optionChanged function
function optionChanged(id) {
    getPlot(id);
    getInfo(id);


// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // get data from json file again 
    d3.json("Data/samples.json").then((data)=> {
        console.log(data)

        // import id data info into dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions 
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
}

init();
}