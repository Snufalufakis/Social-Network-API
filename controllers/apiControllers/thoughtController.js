const { Thought, User } = require("../../models");

const allThoughts = async (req, res) => {
  try {
    const thoughtData = await Thought.find();
    res.json(thoughtData);
  } catch (error) {
    console.log(error, "E L 8 TC");
    res.status(500).json(error);
  }
};

const createThought = async (req, res) => {
  try {
    const body = req.body;
    const thoughtData = await Thought.create(body);
    res.json(thoughtData);
  } catch (error) {
    console.log(error, "E L 19 TC");
    res.status(500).json(error);
  }
};

const thoughtById = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const thoughtData = await Thought.findById(thoughtId);
    res.json(thoughtData);
  } catch (error) {
    console.log(error, "E L 30 TC");
    res.status(500).json(error);
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const body = req.body;
    const thoughtData = await Thought.findOneAndUpdate(thoughtId, body, {
      new: true,
    });
    res.json(thoughtData);
  } catch (error) {
    console.log(error, "E L 44 TC");
    res.status(500).json(error);
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const thought = await Thought.findByIdAndDelete(thoughtId);
    res.json(thought);
  } catch (error) {
    console.log(error, "E L 55 TC");
    res.status(500).json(error);
  }
};

const addReaction = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const body = req.body;
    const reaction = await User.create(body);
    const thought = await Thought.findOneAndUpdate(
      {
        _id: thoughtId,
      },
      {
        $push: { reactions: reaction._id },
      }
    );
    res.json(thought);
  } catch (error) {
    console.log(error, "E L 75 TC");
  }
};

const deleteReaction = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;
    await Thought.findOneAndUpdate(
      {
        _id: thoughtId,
      },
      {
        $pull: {
          reactions: reactionId,
        },
      }
    );
    res.json("deleted");
  } catch (error) {
    console.log(error, "E L 95  TC");
    res.status(500).json(error);
  }
};

module.exports = {
  allThoughts,
  createThought,
  thoughtById,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  deleteReaction,
};
