const { User, Post, Comment } = require("../models");

const users = [
  {
    username: "Paige",
    password: "mom123",
  },

  {
    username: "Anthony",
    password: "dad123",
  },

  {
    username: "Carter",
    password: "son123",
  },

  {
    username: "Adalyn",
    password: "daughter123",
  },
];

const posts = [
  {
    title: "Why are mom's the best??",
    content: "Because they love so much!",
    user_id: 2,
  },

  {
    title: "Dad's are super heros!",
    content: "Dad's are the best!",
    user_id: 1,
  },

  {
    title: "Places to go!",
    content: "I want to go to the zoo!",
    user_id: 3,
  },
];

const comments = [
  {
    content: "Awesome!",
    user_id: 2,
    post_id: 1,
  },

  {
    content: "GREAT!",
    user_id: 3,
    post_id: 1,
  },
];

const giveSeeds = async () => {
  await User.bulkCreate(users, { individualHooks: true });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
};

giveSeeds();
