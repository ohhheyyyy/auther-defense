'use strict'; 

var Sequelize = require('sequelize');

var db = require('../../_db');

var Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  paragraphs: Sequelize.ARRAY(Sequelize.TEXT)
});

module.exports = Story;
