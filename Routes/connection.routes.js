// 📁 Routes/connection.routes.js
import express from 'express';

const router = express.Router();

// All routes protected
router.get('/', authMiddleware, getConnections);
router.get('/my-connections', authMiddleware, getMyConnections);
router.get('/:id', authMiddleware, getConnectionById);
router.post('/', authMiddleware, createConnectionRequest);
router.put('/:id', authMiddleware, updateConnectionStatus);
router.delete('/:id', authMiddleware, deleteConnection);

export default router;