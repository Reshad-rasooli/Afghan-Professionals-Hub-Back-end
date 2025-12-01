                                               
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true,
    maxlength: 2000
  },
  messageType: {
    type: String,
    enum: ['text', 'image', 'file', 'contact'],
    default: 'text'
  },
  attachment: {
    url: String,
    fileName: String,
    fileSize: Number
  },
  isRead: {
    type: Boolean,
    default: false
  },
  readAt: {
    type: Date
  },
  conversationId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});


messageSchema.index({ conversationId: 1, createdAt: 1 });
messageSchema.index({ senderId: 1, receiverId: 1 });
messageSchema.index({ isRead: 1 });

messageSchema.pre('save', function(next) {

  const participants = [this.senderId.toString(), this.receiverId.toString()].sort();
  this.conversationId = participants.join('_');
  next();
});

export default mongoose.model('Message', messageSchema);