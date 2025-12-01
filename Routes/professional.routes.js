
import express from 'express';


const router = express.Router();

// Public routes
router.get('/', getAllProfessionals);
router.get('/search', searchProfessionals);
router.get('/category/:categoryId', getProfessionalByCategory);
router.get('/:id', getProfessionalProfile);

// Protected routes
router.post('/', authMiddleware, createProfessionalProfile);
router.put('/:id', authMiddleware, updateProfessionalProfile);

export default router;