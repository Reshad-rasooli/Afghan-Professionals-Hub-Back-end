
import express from 'express';



const router = express.Router();

// All routes protected
router.get('/', authMiddleware, getMessages);
router.get('/my-conversations', authMiddleware, getMyConversations);
router.get('/conversation/:userId1/:userId2', authMiddleware, getConversation);
router.post('/', authMiddleware, sendMessage);
router.put('/:id/read', authMiddleware, markAsRead);
router.delete('/:id', authMiddleware, deleteMessage);

export default router;