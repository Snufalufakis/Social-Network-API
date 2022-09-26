const { User, Thought } = require("./../../models");
const { userRoute } = require("../../routes/apiRoutes/userRoutes");

const allUsers = async (req, res) => {
  try {
    const userData = await User.find();

    res.status(200).json(userData);
  } catch (error) {
    console.log(error, " E L 10 UC");
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.status(200).json(user);
  } catch (error) {
    console.log(error, " E L 21 UC");
    res.status(500).json(error);
  }
};

const userById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId)
      .populate("thoughts")
      .populate("friends");
    res.status(200).json(user);
  } catch (error) {
    console.log(error, " E L 34 UC");
    res.status(500).json(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updateBody = req.body;
    const updateUser = await User.findByIdAndUpdate(userId, updateBody, {
      new: true, // «Boolean» if true, return the modified document rather than the original
    });

    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error, " E L 49 UC");
  }
};

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    let userData = await User.findOneAndDelete(userId);
    res.status(200).json(userData);
  } catch (error) {
    console.log(error, " E L 59 UC");
    res.status(500).json(error);
  }
};

const addNewFriend = async (req, res) => {
  try {
    const userId = req.params.userId;
    let userData = await User.findOneAndUpdate(userId, {
      $push: { friends: req.params.friendId },
    });
    res.json(userData);
  } catch (error) {
    console.log(error, " E L 72 UC");
    res.status(500).json(error);
  }
};

const deleteFriend = async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
    const userData = await User.findOneAndUpdate(userId, {
      $pull: { friends: friendId },
    });
    const updateFriend = await User.findByIdAndUpdate(friendId, {
      $pull: { friends: friendId },
    });
    res.json(userData && updateFriend);
  } catch (error) {
    console.log(error, " E L 90  UC");
    res.status(500).json(error);
  }
};

module.exports = {
  allUsers,
  createUser,
  userById,
  updateUserById,
  deleteUserById,
  addNewFriend,
  deleteFriend,
};
