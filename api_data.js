define({ "api": [  {    "type": "get",    "url": "/restaurant",    "title": "Get all restaurants",    "name": "GetRestaurant",    "group": "Restaurants",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    \t\"restaurants\":\n    \t{\n    \t\t\"__v\":0,\n    \t\t\"name\":\"Delicous Pho\"\n    \t\t\"budget\":15,\n    \t\t\"phone\":\"604 555 5555\",\n    \t\t\"address\":\"4321 High Street\",\n    \t\t\"img\": \"http://107.170.255.42/resto/img/i0wio.png\",\n    \t\t\"cousine\": \"Italian\",\n    \t\t\"rating\": 5,\n    \t\t\"_id\":\"560381b762b09b1e37005036\"\n    \t}     \t\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "lunchapp_api/controllers/restaurantsController.js",    "groupTitle": "Restaurants"  },  {    "type": "post",    "url": "/restaurant/",    "title": "Create a new restaurant entry",    "name": "PostRestaurant",    "group": "Restaurants",    "examples": [      {        "title": "Example Request:",        "content": "{\n\t\"name\":\"Delicous Pho\"\n \"budget\":15,\n \"phone\":\"604 555 5555\",\n \"address\":\"4321 High Street\",\n \"img\": \"http://107.170.255.42/resto/img/i0wio.png\",\n \"cousine\": \"Italian\",\n \"rating\": 5,\n}",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"Profile created\",\n\t\"profile\":\n\t{\n\t\t\"__v\":0,\"\n\t\t\"username\":\"Henrik\",\n    \t\"email\":\"henrik@sedin.ca\",\n    \t\"password\":\"supersecret\",\n    \t\"dob\": 1443479478748,\n\t    \"gender\": \"male\",\n\t    \"weight\": 160,\n\t    \"weightUnit\": 1,\n\t    \"diabetesType\": \"Type 1\",\n\t    \"a1c\": true,\n\t    \"a1cDate\": 1443479478748,\n    \t\"_id\":\"560381b762b09b1e37005036\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "lunchapp_api/controllers/restaurantsController.js",    "groupTitle": "Restaurants"  }] });