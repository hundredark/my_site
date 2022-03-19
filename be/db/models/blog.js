const seq = require('../connections/mysql_connect'),
      { STRING, INT, BIGINT, TEXT } = require('../../config/db_type_config')

const Blog = seq.define('blog', {
  id: {
  	comment: 'blog ID',
  	type: INT,
  	allowNull: false,
  	unique: true,
		primaryKey: true
  },
  title: {
  	comment: 'blog title',
  	type: STRING,
  	allowNull: false
  },
  tag: {
  	comment: 'blog tag',
  	type: STRING,
  	allowNull: false
  },
  createTime: {
  	comment: 'blog post time',
  	type: BIGINT,
  	allowNull: false
  },
  content: {
    comment: 'blog content',
    type: TEXT,
    allowNull: false
  },
  status: {
  	comment: 'blog status',
  	type: INT,
  	defaultValue: 1,
  	allowNull: false
  }
}, {
	timestamps: false
});

module.exports = Blog;















