import mongoose from "mongoose";

const RegisteredEvents = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensure a user is always associated with a registration

    },
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true, // Ensure an event is always associated with a registration
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
}, {timestamps: true});

export default mongoose.models.RegisteredEvents || mongoose.model("RegisteredEvents", RegisteredEvents);