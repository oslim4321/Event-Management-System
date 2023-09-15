import mongoose from "mongoose";

const RegisteredEvents = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensure a user is always associated with a registration
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true, // Ensure an event is always associated with a registration
    },
    eventName: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    amountPaid: {
      type: Number,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    status: {
      type: String,
      enum: ["confirmed", "pending", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.RegisteredEventSchema ||
  mongoose.model("RegisteredEventSchema", RegisteredEvents);
