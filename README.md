# color_blobs_3
continuation of redistricting1 and CanvasGames project - using more modularization

1) Color Blobs 3 is a static web page that set up a grid with a selected number of randomly assigned cell colors.
2) load index.html to run. This will load a handful of pure JavaScript files
3) Current state can be saved (to downloads directory) or reloaded
4) The RUN/STOP will eventually generate new generations of the grid, with like-colors moving closer to each other. 
5) an exercise in JavaScript and JS graphics

Observations:
1) This internally starts to resemble the MVC control pattern, with an interface/display layer above a state layer
2) Rediscovered that JSON utility does not completely capture the nested classes data structure, necessitating deserialization of the loaded state.
3) Canvas objects have a lot of properties, and height and width may 'not be the droids you are looking for'.

TODO: 
1) Generation logic not defined (versions 1 and 2 were not satisfactory, and that led to refactoring this project)

Nick
July 2020
