const SpecialDay = require('../models/specialDay.model');

const specialDayController = {
  createSpecialDay: async (req, res) => {
    try {
      console.log("Request body:", req.body);

      
      const validData = {
        couple: {
          bride: {
            id: req.body.brideId,
            name: req.body.brideName,
            firstName: req.body.brideFirstName,
            lastName: req.body.brideLastName,
            email: req.body.brideEmail
          },
          groom: {
            id: req.body.groomId,
            name: req.body.groomName,
            firstName: req.body.groomFirstName,
            lastName: req.body.groomLastName,
            email: req.body.groomEmail
          }
        },
        services: req.body.services || [],
        guests: req.body.guests || [],
        date: req.body.date || Date.now()
      };

      console.log("Valid data:", validData);
      const specialDay = new SpecialDay(validData);
      await specialDay.save();
      res.status(201).json(specialDay);
    } catch (error) {
      console.error("Error:", error);
      res.status(400).json(error);
    }
  },

  getAllSpecialDays: async (req, res) => {
    try {
      const specialDays = await SpecialDay.find({});
      res.json(specialDays);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getOneSpecialDay: async (req, res) => {
    const { id } = req.params;
    try {
      const specialDay = await SpecialDay.findById(id);
      if (!specialDay) {
        return res.status(404).json({ message: "SpecialDay not found." });
      }
      res.json(specialDay);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateSpecialDay: async (req, res) => {
    const { id } = req.params;
    const updates = {
      "couple.bride.id": req.body.brideId,
      "couple.bride.name": req.body.brideName,
      "couple.bride.firstName": req.body.brideFirstName,
      "couple.bride.lastName": req.body.brideLastName,
      "couple.bride.email": req.body.brideEmail,
      "couple.groom.id": req.body.groomId,
      "couple.groom.name": req.body.groomName,
      "couple.groom.firstName": req.body.groomFirstName,
      "couple.groom.lastName": req.body.groomLastName,
      "couple.groom.email": req.body.groomEmail,
      services: req.body.services,
      guests: req.body.guests,
      date: req.body.date
    };


    Object.keys(updates).forEach(key => updates[key] === undefined && delete updates[key]);

    try {
      const specialDay = await SpecialDay.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
      if (!specialDay) {
        return res.status(404).json({ message: "SpecialDay not found." });
      }
      res.json(specialDay);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = specialDayController;
