# Ready Tables

Our restaurant has 20 tables and the staff serves 
2 tables at a time. They need to know which tables 
are ready to serve.  

Let's fix this with what we learned about returning a 
function inside of another function.

## Steps

1. Create a function called displayTables.
2. displayTables should map over the array of ready tables 
returned from getReadyTables to generate the html we 
need to render our display for the staff. One div should 
be generated for each table value. Here is an example: 
`<div class="table">TABLE VALUE HERE</div>`. 
1. Remember to remove the commas after applying map()
2. Fetch the tables `<section>` from the DOM 
3. Set the innerHTML content of the tables `<section>` 
to the displayTables function call.

## JS Concepts

- Return a function
- map()
- innerHTML

## My Solution

https://scrimba.com/scrim/co0774b5a971261d8fede1a8f