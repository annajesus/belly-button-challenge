// 1. Use the D3 library to read in samples.json from the URL 
    
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
    const dataSample = 'Data/samples.json'

    // Promise Pending
        const dataPromise = d3.json(dataSample);
        console.log(dataPromise);

        // Fetch the JSON data and console log it
        d3.json(url).then(function(dataSample) {

        console.log(dataSample);
        })

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

// create function for plotting all of the data
function getPlot(id){

    // Use the D3 library to get data from samples.json 
    d3.json("Data/samples.json").then((data)=> {
        console.log(data)

        var wfreq = data.metadata.map(d => d.wfreq)

        console.log(`Washing Freq: ${wfreq}`)

        // filter the sample values by each of the ids (in "samples:")
        var samples = data.samples.filter(s => s.id.toString() === id)[0];

        console.log(samples);

        // gather just top 10 to display (in "sample_values:")
        var values = samples.sample_values.slice(0,10).reverse();

        // gather the top 10 OTUs ids to plot (in "otu_ids":)
        var top_OTUs = (samples.otu_ids.slice(0, 10)).reverse();

        // reformat the ids for to plot
        var OTU_id = top_OTUs.map(d => "OTU " + d)

        console.log('OTU IDs: ${OTU_id}')
    
        // plot top 10 labels (in "otu_labels":)
        var labels = samples.otu_labels.slice(0, 10);

        // create trace variable for the Horizontal Bar Chart
        var tracebar = {
            x: values,
            y: OTU_id,
            text: labels,
            marker: {
              color: 'rgb(248, 248, 255)'},
            type:"bar",
            orientation: "h",
        };
        
        // create data variable
        var bardata = [tracebar]

        // create layout variable to set plots layout
        var barlayout = {

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
        Plottly.newPlot('bar', bardata, barlayout);

    }).catch(error => console.log(error));


}


// 3.Create a bubble chart that displays each sample.
    // Use otu_ids for the x values.
    // Use sample_values for the y values.
    // Use sample_values for the marker size.
    // Use otu_ids for the marker colors.
    // Use otu_labels for the text values.



// 4. Display the sample metadata, i.e., an individual's demographic information.

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.  


// 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

// 7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file