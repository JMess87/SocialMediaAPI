const connection = require('../config/connection');
const { User, Thoughts } = require('../models');

//  connection to db
connection.once('open', async () => {
  console.log('connected');
  
  const users = [
    {
      username: "Jennilee",
      email: "Jennilee.Messenger@gmail.com"
    },
    {
      username: "Jackson the Dog",
      email: "Jackson@gmail.com"
    },
    {
      username: "Betty White",
      email: "BDubbs@gmail.com"
    }
  ];

  const thoughts = [
    {
      thoughtText: "Coding is hard and challenging , but could be very rewarding in the future !!",
    },
    {
      thoughtText: " Tacos are my favorite food, they are very versatile and can be eaten at any meal !!",
    },
    {
      thoughtText: " If you ask me I was the best Golden Girl !!",
    }
  ];

  await User.collection.insertMany(users);
  // await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});