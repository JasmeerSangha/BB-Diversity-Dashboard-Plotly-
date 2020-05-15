# Plotly

## Overview & Usage
Created a webapp which creates dynamic visualisations of belly button bacterial data. By selecting an id inside the drop down menuthe app will:
1.  Create a panel populated by the deomgraphic information connected to the individual's ID number
2.  Create a gauge plot which displays the belly button washing freuqency per week value found inside the metadata array.
3.  Create a horizontal bar chart which lists and compares the 10 most populous bacteria found in the individuals belly button.
4.  Create a bubble chart showing all bacteria found in the belly button and their counts. The size of the bubbles mirror the values found on the y-axis, representing the counts of each bacterium from gathered samples.

## Resources
- Data Sources: [samples.json](https://github.com/JasmeerSangha/Plotly/blob/master/BellyButton/samples.json)
- Software/Tools: VSCode
- Languages: JavaScript, HTML5, CSS
- Packages: Plotly, D3.js, Bootstrap4

## Results
![Sample image](https://github.com/JasmeerSangha/Plotly/blob/master/BellyButton/webapp%20sample%20image.png)
The website can be found [here.](https://jasmeersangha.github.io/Plotly/BellyButton/)
### Future Analysis ###
Though interesting, the colour scales for the bubble and bar graph are purely cosmetic and not informational. Further analysis could be done to compare different IDs to eachother. By using the demographics information, one could compare types and counts of bacteria found in people of different sex, race and/or location. Plotly would be an excellent tool for these more complex analyses visualisations rather than beautifying simple plots. 
