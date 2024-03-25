const User = require("../model/userModel");

exports.create = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    const newUser = new User({ fname, lname, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: "User Data not Founded" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExit = await User.findById(id);
    if (!userExit) {
      return res.status(404).json({ msg: "user Not Found,," });
    }
    res.status(200).json(userExit);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User not found" });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User Delete Sucessfully,," });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "User Delete Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
