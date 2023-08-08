import mongoose from "mongoose";
type Event = {
  eventType: "Wedding" | "Burial" | "Birthday" | "Musical" | "Other"; // Add "Musical"
  eventName: string;
  eventDate: Date;
  // Other common fields...
};

const eventSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
      enum: ["Birthday", "Wedding", "Burial", "Other"],
    },
    eventName: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventLocation: {
      type: String,
      required: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    attire: {
      type: String
    },
    guestCount: {
      type: Number,
    },
    specialInstructions: {
      type: String,
    },
    // Fields specific to Birthday
    celebrantName: {
      type: String,
      required: function (this: Event) {
        return this.eventType === "Birthday";
      },
    },
    age: {
      type: Number,
      required: function (this: Event) {
        return this.eventType === "Birthday";
      },
    },
    // Fields specific to Burial
    tributeDetails: {
      type: String,
      required: function (this: Event) {
        return this.eventType === "Burial";
      },
    },
    // Fields specific to Musical Event
    musicianNames: {
      type: String,
      required: function (this: Event) {
        return this.eventType === "Musical";
      },
    },
    musicGenre: {
      type: String,
      required: function (this: Event) {
        return this.eventType === "Musical";
      },
    },


  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
