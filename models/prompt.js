import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tags is required"],
  },
});

// the models object is provided by the mongoose library and store all the registred models.

// if a model named "User" already exists in the "models" objects, it assign that existing model to the "User variable"

// This prevents redefining the model and ensures that the existing model is reused

// If a model named "User" does not exist in the "models" object, the model function from mongoose is called create a new model

// the newly created model is then assigned to the "User" variable

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
