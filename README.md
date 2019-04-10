# MiniMap

This project is to show on unusual bug that I am getting. When a user clicks on a marker in the app' map. A marker widget is meant to show the data of that marker. The marker contains a large array that is used to produce a graph. The first marker clicked seems to display and function correctly. So does the second and the third. But when the first marker is clicked again the chart data is overwritten with the chart data of the previously clicked marker. This is very inconvenient and defiantly a bug. 

I have tried everything I can think of to fix this bug but nothing works:

- Vue dev tools and debugging, shows the symptoms of the error but does not point to where the error takes place.
- I have tried making the data property a pseudo private property that can only be accessed with setters and getters. The setter is never called.
- setting the data to a second property in the class. this second property also gets modified. 
- when examining the store in depth, it looked like the marker array in the store was not affected by the bug. however when refactored to use the marker from the store directly the bug is still there. 
- I tried to separate out the data into a separate state property that is not related to the marker in any direct way... still the same bug.
- I also tried with a every small data array (15 elements) still the bug persisted.
- I have even built this project in the hopes that at the smallest scale the bug does not appear that that it may be a silly typo or something... but again, even this mini version of my app still shows the bug.

The code in this project is a small scale version of the bug that appears on one of my other private projects. 

## Project setup
just follow the standard Vue.js process:

`npm install`

`npm run serve`

## How to Help:

If you would like to help in getting this bug fixed, please feel free to clone the repo, make changes and send me pull requests. Any help you can offer is greatly appreciated.
