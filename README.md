# Social Media API Utilizing and NoSQL Database

## Description
Build a social media API using a non sql database, to add users and their thoughts and then create reactions to those thoughts.


## Requirements

1. Mongo DB
2. Node.js

## Instructions

1. Open application in terminal. 
2. Run NPM i
3. Run Node index.js to check functionality
4. Kill the application
5. Use command run npm seed - this will create the socialDB and seed the DB.
6. Run node index again to restart application


## Models

1. User
2. Thought
3. Reaction (Schema Only)

## Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

**BONUS**: Remove a user's associated thoughts when deleted.

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## ScreenShots

## Links

### GitHUB 

https://github.com/JMess87/SocialMediaAPI.git

### Video Link

Start up of the application in the terminal , installation of packages and seeding of the database.
https://drive.google.com/file/d/1IDmlS-z6UxVH7Bq1vB1PrbyEtPfVmFDa/view

Insomia Routes
https://drive.google.com/file/d/1D5OWzdkyYrR9rP_1pcpezYn05Et65UVq/view 


## Resources

1. Utilized Acitivity 25 under Module 18 in the GW Course Activities as a template for this entire app. It was so similar that the models could be swapped out . Videos Vs. Responses. Adding a reaction schema.
