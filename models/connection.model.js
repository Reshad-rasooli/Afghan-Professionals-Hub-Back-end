import mongoose from "mongoose";

const connectionSchema = new mongoose.Schema({
  professionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professional',
    required: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'connected', 'blocked', 'rejected'],
    default: 'pending'
  },
  initiatedBy: {
    type: String,
    enum: ['professional', 'client'],
    required: true
  },
  connectionDate: {
    type: Date,
    default: Date.now
  },
  lastContacted: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    maxlength: 500
  }
}, {
  timestamps: true
});


connectionSchema.index({ professionalId: 1, clientId: 1 }, { unique: true });

connectionSchema.index({ professionalId: 1, status: 1 });
connectionSchema.index({ clientId: 1, status: 1 });

export default mongoose.model('Connection', connectionSchema);