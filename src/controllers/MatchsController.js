const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        {likes: { $in: devId } },
        {dislikes: { $nin: devId } }
      ],
    });

    return res.json(users);
  }
}
