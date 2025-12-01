import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  profession: {
    type: String,
    required: true,
    trim: true
  },
  specialization: [{
    type: String,
    trim: true
  }],
  bio: {
    type: String,
    maxlength: 500
  },
  experience: {
    type: Number,
    default: 0
  },
  skills: [{
    type: String,
    trim: true
  }],
  education: [{
    degree: String,
    institution: String,
    year: Number
  }],
  certifications: [{
    name: String,
    issuer: String,
    year: Number
  }],
  hourlyRate: {
    type: Number,
    min: 0
  },
  availability: {
    type: String,
    enum: ['available', 'busy', 'unavailable'],
    default: 'available'
  },
  languages: [{
    type: String,
    trim: true
  }],
  portfolio: [{
    title: String,
    description: String,
    image: String,
    url: String
  }]
}, {
  timestamps: true
});

export default mongoose.model('Professional', professionalSchema);