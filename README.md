![image](https://user-images.githubusercontent.com/108558769/208013199-7e0b478e-e12f-4e50-83ae-b2c794ed0b6e.png)

## In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset Links to an external site., which catalogs the microbes that colonize humannavels.The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## 1. Use the D3 library to read in samples.json from the URL 
    

## 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use sample_values as the values for the bar chart.
    * Use otu_ids as the labels for the bar chart.
    * Use otu_labels as the hovertext for the chart.

<img width="494" alt="Screen Shot 2022-12-15 at 10 01 31 PM" src="https://user-images.githubusercontent.com/108558769/208012531-adb45d79-49de-4677-bded-e8a7b03eae77.png">

## 3. Create a bubble chart that displays each sample.
    * Use otu_ids for the x values.
    * Use sample_values for the y values.
    * Use sample_values for the marker size.
    * Use otu_ids for the marker colors.
    * Use otu_labels for the text values.

<img width="809" alt="Screen Shot 2022-12-15 at 10 01 45 PM" src="https://user-images.githubusercontent.com/108558769/208012667-10110012-5ef3-4ce5-aab7-a8136619c6c6.png">

## 4. Display the sample metadata, i.e., an individual's demographic information.

## 5. Display each key-value pair from the metadata JSON object somewhere on the page. 
 
<img width="217" alt="Screen Shot 2022-12-15 at 10 01 53 PM" src="https://user-images.githubusercontent.com/108558769/208012694-b1a2f08d-1bea-4877-8c0d-a843227c1b06.png">

## 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

<img width="534" alt="Screen Shot 2022-12-15 at 10 02 22 PM" src="https://user-images.githubusercontent.com/108558769/208012736-c166a540-05c6-412f-97e6-cc8fc92aaf9e.png">



### References
* Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
