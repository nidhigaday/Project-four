## Website Performance Optimization portfolio projectby Nidhi Gaday

My Profile - http://nidhigaday.github.io/project4/

### Optimization for Index.html:
I customized entire website and used following techniques to make index.html faster:
- Asynced unnecessary Javascript files
- Used less CSS as much as possible to keep file size small
- Minified HTML, CSS, images and JS files usign Grunt Plugins
 
### Pizza.html optimization for 60fps
- for updatePositions(), used debouncing function to avoid trigger entire webpage render on each scroll.
- for resizePizzas(), replaced "querySelectorAll" with "getElementsByClassName"). and  moved 3 variables (i, dx, and newwidth) outside the loop inside the "changePizzaSizes" function.
- moved all function decalarations outside resizePizzas()
- rendered number of pizzas only displayed on the screen instead of 200 in DOMContentload function for loop
- used backface-visibility: hidden css hack to reduce the size of green (paint) bar
- added comments in main.js
