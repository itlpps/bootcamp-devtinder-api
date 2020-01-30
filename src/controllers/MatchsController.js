const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    const userLogged = await Dev.findById(user);
    const usersILiked = await Dev.find(
      { _id: { $in: userLogged.likes } }
    );
    const matchs = usersILiked.filter(x=> x.likes.includes(userLogged._id))
    return res.json(matchs);
  }
}
