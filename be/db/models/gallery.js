const seq = require('../connections/mysql_connect'),
      { STRING, INT, TEXT } = require('../../config/db_type_config')

const Gallery = seq.define('gallery', {
  id: {
    comment: 'img ID',
    type: INT,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  url: {
    comment: 'img src',
    type: TEXT,
    allowNull: false
  },
  description: {
    comment: 'img des',
    type: STRING,
    allowNull: true
  },
}, {
  timestamps: false
});

module.exports = Gallery;















