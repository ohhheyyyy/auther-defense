'use strict';

var db = require('./_db');

var Story = require('./api/stories/story.model');
var User = require('./api/users/user.model');

User.hasMany(Story, {foreignKey: 'author_id'});
Story.belongsTo(User, {as: 'author'});

module.exports = db;
