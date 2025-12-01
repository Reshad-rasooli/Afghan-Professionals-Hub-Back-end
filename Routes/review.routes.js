
import express from 'express';


const router = express.Router();

// Public routes
router.get('/', getReviews);
router.get('/professional/:professionalId', getReviewsByProfessional);
router.get('/:id', getReviewById);

// Protected routes
router.post('/', authMiddleware, createReview);
router.get('/user/my-reviews', authMiddleware, getReviewsByUser);
router.put('/:id', authMiddleware, updateReview);
router.delete('/:id', authMiddleware, deleteReview);

export default router;