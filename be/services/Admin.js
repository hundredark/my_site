const AdminModel = require('../db/models/admin');
const BlogModel = require("../db/models/blog");

class AdminService {
  async addBlogData (data) {
    const id = data.id;

    const result = await BlogModel.findOne({
      where: { id }
    });

    if (result) {
      return await BlogModel.update(data, {
        where: { id }
      });
    } else {
      return await BlogModel.create(data);
    }
  }

  async login (userInfo) {
    const { username, password } = userInfo;

    const usernameExist = await AdminModel.findOne({
      where: { username }
    });

    if (!usernameExist) {
      return 10003;
    }

    const dbPassword = usernameExist.get('password');

    if (password !== dbPassword) {
      return 10004;
    }

    const uid = usernameExist.get('id');

    return {
      uid,
      username
    }
  }
}

module.exports = new AdminService();










