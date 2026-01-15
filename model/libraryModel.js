import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    publishedYear: {type: Date, required: true},
    available: {type: Boolean, required: true, default: true}

})

const libraryModel = mongoose.models.library || mongoose.model("library", librarySchema)

export default libraryModel

