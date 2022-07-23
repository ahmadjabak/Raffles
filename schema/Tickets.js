

const mongoose = require("mongoose");
const Raffles = require("../schema/Raffles")
const ticketSchema = new mongoose.Schema({
    Raffles: { type: mongoose.SchemaTypes.ObjectId, ref: "Raffles" },
    win: {
      type: Boolean,
      default: false
    }
  })
  const Ticket = mongoose.model("Tickets", ticketSchema);
  module.exports=Ticket