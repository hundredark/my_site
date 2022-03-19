const seq = require('../connections/mysql_connect'),
      { STRING, TEXT, INT } = require('../../config/db_type_config');

const Admin = seq.define('admin', {
	id: {
		comment: 'admin user id',
		type: INT,
		allowNull: false,
		unique: true,
		primaryKey: true
	},
  username: {
  	comment: 'admin user name',
  	type: STRING,
  	allowNull: false
  },
  password: {
  	comment: 'crypto user password',
  	type: STRING,
  	allowNull: false
  }
}, {
	timestamps: false
});

module.exports = Admin;
