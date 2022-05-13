const { Post } = require('../models');

const postdata = [
	{
		"id": 4,
		"post_content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		"title": "Test 1",
		"created_at": "2022-05-12T00:49:54.000Z",
		"User": {
			"username": "Kevin"
		}
	},
	{
		"id": 3,
		"post_content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		"title": "PC builder goes viral with latest build",
		"created_at": "2022-05-11T20:46:36.000Z",
		"User": {
			"username": "Steve"
		}
	},
	{
		"id": 2,
		"post_content": "This small form factor (SFF) PC packs quite the punch",
		"title": "PC builder goes viral with latest build",
		"created_at": "2022-05-11T20:45:32.000Z",
		"User": {
			"username": "Kevin"
		}
	},
	{
		"id": 1,
		"post_content": "This dude is on his grind",
		"title": "Octocat reaches 2 million subscribers",
		"created_at": "2022-05-11T20:44:54.000Z",
		"User": {
			"username": "Kevin"
		}
	}
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
