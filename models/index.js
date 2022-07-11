const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

User.hasMany(Post, {
    foreginKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreginKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreginKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreginKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
foreginKey: 'user_id',
onDelete: 'CASCADE'
});

Comment.belongsTo(Post {
foreginKey: 'post_id',
onDelete: 'CASCADE'
});



module.exports = {
    User,
    Comment,
    Post
};