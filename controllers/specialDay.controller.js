
const SpecialDay = require('../models/specialDay.model');

const createSpecialDay = async (req, res) => {
  try {
    const specialDay = new SpecialDay(req.body);
    await specialDay.save();
    res.status(201).json(specialDay);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create special day' });
  }
};

const getAllSpecialDays = async (req, res) => {
  try {
    const specialDays = await SpecialDay.find();
    res.status(200).json(specialDays);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch special days' });
  }
};

const getOneSpecialDay = async (req, res) => {
  try {
    const specialDay = await SpecialDay.findById(req.params.id);
    if (!specialDay) {
      return res.status(404).json({ error: 'Special day not found' });
    }
    res.status(200).json(specialDay);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch special day' });
  }
};

const updateSpecialDay = async (req, res) => {
  try {
    const specialDay = await SpecialDay.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!specialDay) {
      return res.status(404).json({ error: 'Special day not found' });
    }
    res.status(200).json(specialDay);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update special day' });
  }
};

const getUserSpecialDay = async (req, res) => {
  try {
    const userId = req.user._id;
    const specialDay = await SpecialDay.findOne({ 
      $or: [
        { 'couple.bride.email': req.user.email },
        { 'couple.groom.email': req.user.email }
      ]
    });
    if (!specialDay) {
      return res.status(404).json({ error: 'Special day not found' });
    }
    res.status(200).json(specialDay);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch special day' });
  }
};

const addGuest = async (req, res) => {
  try {
    const { guest } = req.body;
    const specialDay = await SpecialDay.findOneAndUpdate(
      { 
        $or: [
          { 'couple.bride.email': req.user.email },
          { 'couple.groom.email': req.user.email }
        ]
      },
      { $push: { guests: guest } },
      { new: true }
    );
    res.status(200).json(specialDay);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add guest' });
  }
};

const addService = async (req, res) => {
  try {
    const { service } = req.body;
    const specialDay = await SpecialDay.findOneAndUpdate(
      { 
        $or: [
          { 'couple.bride.email': req.user.email },
          { 'couple.groom.email': req.user.email }
        ]
      },
      { $push: { services: service } },
      { new: true }
    );
    res.status(200).json(specialDay);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add service' });
  }
};

module.exports = {
  createSpecialDay,
  getAllSpecialDays,
  getOneSpecialDay,
  updateSpecialDay,
  getUserSpecialDay,
  addGuest,
  addService,
};
