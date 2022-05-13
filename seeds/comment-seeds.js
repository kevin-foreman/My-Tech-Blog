const { Comment } = require('../models');

cosnt commentdata = [
    {
        comment_text: 'This is awesome',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Thanks for sharing',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Good to know',
        user_id: 2,
        post_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;