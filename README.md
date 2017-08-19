# Website Performance Optimization

![Part of the Udacity Front-End Web Development Nanodegree](https://img.shields.io/badge/Udacity-Front--End%20Web%20Developer%20Nanodegree-02b3e4.svg)

## Introduction

This project aims to optimize a website (provided by Udacity) with a number of optimization - and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.

[Live](http://nidhigaday.github.io/Website_optimization/) version of the Optimized and Customized website.

## Optimization

### Index.html:

I customized the entire website and used following techniques to make index.html faster:
* Asynchronized unnecessary Javascript files
* Used less CSS as much as possible to keep file size small
* Minified HTML, CSS, images, and JS files using Grunt Plugins

### Pizza.html optimization for 60fps

* For updatePositions(), used a debouncing function to avoid trigger entire web page render on each scroll.
* For resizePizzas(), replaced "querySelectorAll" with "getElementsByClassName"), and moved 3 variables (i, dx, and newwidth) outside the loop inside the "changePizzaSizes" function.
* Moved all function declarations outside resizePizzas()
* Rendered number of pizzas only displayed on the screen instead of 200 in DOMContentload function for loop
* Used backface-visibility: hidden css hack to reduce the size of green (paint) bar
* Added comments in main.js

## Results

Target Achieved
