const {
  User,
  Post,
  Comment
} = require('../models');

const users = [
  {
    username: "Anthony",
    password: "coding1",
  },

  {
    username: "Paige",
    password: "coding2",
  },

  {
    username: "Carter",
    password: "iliketurtles",
  },

  {
    username: "Adalyn",
    password: "princess123",
  },
];

const posts = [
  {
    title: "why moms are great",
    content: "because they are",
    user_id: 2,
  },

  {
    title: "what is the best day",
    content: "fridays",
    user_id: 1,
  },

  {
    title: "food is good",
    content: "i love eating good food",
    user_id: 3,
  },
];

const comments = [
  {
    content: "this is great",
    user_id: 2,
    post_id: 1,
  },

  {
    content: "wow, that's interesting",
    user_id: 3,
    post_id: 1,
  },
];

const plantSeeds = async () => {
  await User.bulkCreate(users, { individualHooks: true });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
};

plantSeeds();
