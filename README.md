# TOURIST KATA

##The task

The aim of the kata is to create a basic application to allow a user to record a list of cities they would like to visit.
The initial list should be served up from an endpoint that you create and should use the following JSON data:

```json
[
  {
    "City": "Manchester",
    "Country": "UK",
    "Attractions": ["football", "bars"]
  },
  {
    "City": "Liverpool",
    "Country": "UK",
    "Attractions": ["football", "bars", "music"]
  },  
  {
    "City": "York",
    "Country": "UK",
    "Attractions": ["city walls", "cathedral"]
  },
  {
    "City": "Las Vegas",
    "Country": "USA",
    "Attractions": ["casinos","Grand Canyon","shows"]
  },
  {
    "City": "Beijing",
    "Country": "China",
    "Attractions": ["Great Wall of China", "Forbidden City"]
  }
]
```

You should then create a basic web application and add as many of the following pieces of functionality as you have time to:

1. Retrieve the cities from the endpoint you created and list them along with their country and attractions
2. Ability to add a new city to the list (provide basic validation)
3. Allow a user to mark a city as visited/unvisited
4. Show a visual counter of the number of cities visited/unvisited
5. Filter the cities by visited state (i.e. visited or unvisited)
6. Sort the cities by visited state (i.e. visited or unvisited)
7. Search for city by attraction or country_


You should aim to complete as many of these things as possible, demonstrating a good
understanding of architecture, design and best practice. Don�t hesitate to show off with some
fancy CSS, responsiveness, and HTML5