# Nutshell: The Information Dashboard (in React)

Nutshell is a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

## Creators (aka Lowdown Friends)
1. Jacquelyn McCray
1. Sarah Fleming
1. Will Wilkinson

## Technologies used to implement Nutshell
1. React library
1. Bootstrap
1. JSON-Server
1. JavaScript
1. JSX
1. CSS

## How to Launch Nutshell

1. Clone the repository from Github
1. Open your terminal and type the command "npm install" to install all the dependencies associated with the project
1. Install JSON Server
```
npm install -g json-server
```
1. In the main project directory, create a new directory called "api"
1. In the api directory, create a file called "database.json"
1. Copy the sample data below into database.json
1. Move to the api directory
```
cd api
```
In the terminal, start your json-server on port 5002
```
json-server -p 5002 -w database.json
```
In another terminal tab/window type the command
```
npm start
```
Nutshell is now ready to use!

## Sample Data (copy and paste into database.json file)
```json
{
  "users": [
    {
      "email": "arthur@camelot.com",
      "username": "King Arthur",
      "password": "1",
      "id": 1
    },
    {
      "email": "knight@ni.com",
      "username": "Knight Who Says Ni",
      "password": "1",
      "id": 2
    },
    {
      "email": "keeper@bridge.com",
      "username": "Bridgekeeper",
      "password": "1",
      "id": 3
    }
  ],
  "news": [
    {
      "title": "Evil Rabbit Attacks Questers",
      "date": "9/5/2019",
      "synopsis": "Sir Bors died at the fangs of the dreaded Rabbit of Caerbannog whilst he and his fellow knights were seeking the Holy Grail.",
      "url": "https://villains.fandom.com/wiki/Rabbit_of_Caerbannog",
      "userId": 1,
      "id": 1
    },
    {
      "title": "British Monarch Taunted a Second Time by Frenchman",
      "date": "9/5/2019",
      "synopsis": "A French guard has been charged of severe taunting of one King Arthur in his quest for the Holy Grail",
      "url": "www.YourFatherSmeltOfElderberries.com",
      "userId": 2,
      "id": 2
    },
    {
      "title": "Local Man Turned into Newt by Witch (but He Got Better)",
      "date": "9/5/2019",
      "synopsis": "Villagers have decided to burn the witch who turned a local man into a newt after learning that she weighs the same as a duck.",
      "url": "www.BurnMoreWitches.com",
      "userId": 3,
      "id": 3
    }
  ],
  "events": [
    {
      "name": "Holy Grail After Party",
      "date": "2019-10-01",
      "location": "Camelot",
      "userId": 1,
      "id": 1
    },
    {
      "name": "Ni",
      "date": "2019-09-13",
      "location": "Shrubbery",
      "userId": 2,
      "id": 2
    },
    {
      "name": "Swallow Watching",
      "date": "2019-09-21",
      "location": "Bridge",
      "userId": 3,
      "id": 3
    }
  ],
  "friends": [
          {
      "userId": 1,
      "otherUser": 2,
      "isFriend": true,
      "id": 1
    }
  ],
  "tasks": [
    {
      "userId": 1,
      "name": "Retrieve the Holy Grail",
      "date": "2019-09-30",
      "isCompleted": false,
      "id": 1
    },
    {
      "userId": 2,
      "name": "Ni",
      "date": "2019-09-09",
      "isCompleted": false,
      "id": 2
    },
    {
      "userId": 3,
      "name": "Learn the difference of mass between African and European swallows",
      "date": "2019-09-20",
      "isCompleted": false,
      "id": 3
    }
  ],
  "messages": [
    {
      "userId": 3,
      "message": "What...is your name?",
      "date": "2019-08-31T23:02:06.300Z",
      "id": 1
    },
    {
      "userId": 1,
      "message": "King Arthur of the Britons!!",
      "date": "2019-08-31T23:03:36.764Z",
      "id": 2
    },
    {
      "userId": 3,
      "message": "What...is your quest?",
      "date": "2019-08-31T23:03:54.355Z",
      "id": 3
    },
    {
      "userId": 1,
      "message": "I seek the Holy Grail!",
      "date": "2019-08-31T23:04:09.888Z",
      "id": 4
    },
    {
      "userId": 3,
      "message": "What...is the airspeed velocity of an unladen swallow?",
      "date": "2019-08-31T23:04:25.797Z",
      "id": 5
    },
    {
      "userId": 1,
      "message": "What do you mean, an African or a European swallow?",
      "date": "2019-08-31T23:04:37.106Z",
      "id": 6
    },
    {
      "userId": 3,
      "message": "Well...I don't know!",
      "date": "2019-08-31T23:04:53.983Z",
      "id": 7
    },
    {
      "userId": 3,
      "message": "AAAAARRRRRRRRRRRRRRRGGGGGHHHH!!!",
      "date": "2019-08-31T23:09:06.343Z",
      "id": 8
    },
    {
      "userId": 2,
      "message": "Ni?",
      "date": "2019-08-31T23:09:35.343Z",
      "id": 9
    }
  ]
}
```