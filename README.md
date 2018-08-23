## Product Compare Demo

This is a demo of a three product comparison app.  The data
comes from the initialState of the products reducer.

#### Components 
The ProductCompareStateful component gets `products` from the
redux store and uses this data to populate the app.

The Product component displays the product title, information,
and bullet points.  Hovering on the `info` icon displays a
tooltip.  For handling tooltips I used the `react-tooltip`
module.

The Button component displays the 'Learn More' button at the bottom
of each product div.  This button is not hooked up to anything as
this was beyond the scope of the exercise.

#### Responsive Design
This app utilized @media queries to display the app differently on
small screens.  A screen width of under 768px will cause the
product panels to be displayed in a vertical stack.  Excess white
space is also removed as there is no need for all the panels to
be the same height in this display pattern.

#### Browser compatibility
The app has been tested on a variety of browsers and operating systems.
Note that Chrome and Firefox should have the same engines regardless of
platform but I still needed to test small screen and touch behaviors.

__Browsers/Platforms Tested:__
* Chrome (OSX, Windows, iOS, Android)
* Firefox (OSX, Windows, iOS, Android)
* Safari (OSX, iOS)
* Microsoft Edge
* Opera(OSX, Windows, Android) 
  
In particular the tooltip behavior had to be optimized for touch devices.
On desktop browsers, the tooltip is activated on hover whereas on touch
devices it is triggered on click/tap.

#### Real world considerations

##### Larger Section Data
The initial dataset provided in the wireframe did not consider cases where
the number of bullet points was very large, or when the descriptive text was larger
than indicated.  Additional guidance from UX would be needed in order to
ensure that the designer's vision matches what actually occurs with real
data.

In absence of such guidance, I built the Product component such that the
descriptive text and bullet points sections are responsive to larger
amounts of data.

Another consideration is that in the typical product comparison UI the
sections are designed so that they start at the same vertical coordinates
(e.g. The bullet points start at the same vertical position).  Within 
limits imposed by a minimum height CSS rule set on the descriptive text div
we can achieve the goal of having the bullet points start at the same
Y-offset.  The bottom button has its top margin set to auto (and the
ProductCompare div is a flexbox) so the button will always be at the bottom
of the ProductCompare div regardless of the heights of the other elements.


An option to ensure that each section starts at the same Y-offset regardless
of size would be to build the display in horizontal flexbox layers, with
the section of each product displayed within.  This technique would guarantee
that each section for each product would always be the same height.  

However, the above solution presents a problem for mobile where we want to show each product in a separate section (as in the current app).  In order to handle this, we 
would need to use some user agent detection; using that to determine which components to display instead of just relying on CSS @media queries.  In this scenario, the large screen
version would work as described above whereas the small screen (e.g. mobile)
version would work much as the current app works.

##### Variable number of products compared
As described, the app compares 3 products.  There was no UX guidance about
the minimum/maximum number of items to be compared.  Fewer than one item
obviously does not make sense.  An upper limit of four to five products should
be possible.  Since the app uses flexbox, adding additional product columns should
only require some redesign if the minimum product div width needs to be smaller
than the current minimum width of 200px.

##### Small size of info button for mobile
For mobile devices with larger screens, the info button as specified may
be too small to click easily.  A probable solution for this would be to 
create a transparent overlay div surrounding the info button for touch
devices only.  This would allow the user to more easily tap the info
button.

##### What about tablets?
As the app is written, tablets with screens wider than 768px will use
the desktop styling (e.g. multiple columns).  This was tested on devices
with different widths and was not found to be problematic.  Still it would
be better to have explicit input from UX on this issue. 

##### Are pop-up tool tips good for mobile?
While the tooltips were designed to work with mobile, I feel that they are
not really a good fit for the mobile paradigm.  In the past I have
implemented a slide-down div below the info control.  This div can have 
unique styling to differentiate it from the other content.



#### Source of the React Boilerplate
Note that this is forked from a react redux webpack express boilerplate.
The original boilerplate code by Sam Garg can be found at:

https://github.com/samgarg86/react-redux-webpack-express

##### Running the app

0. ```npm install```
0. ```npm start-dev```

Yes, it takes a while to load the first time you open the app.

#### Is the hot module replacement really working?

Yup! Take a look:

![](http://jpsierens.com/wp-content/uploads/2016/06/HMR4.gif)

The app updates without the browser having to reload. You don't lose state!

#### Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

