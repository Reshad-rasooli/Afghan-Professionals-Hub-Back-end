// 📁 Routes/category.routes.js
import express from 'express';


const router = express.Router();

// Public routes
router.get('/', getCategories);
router.get('/popular', getPopularCategories);
router.get('/search', searchCategories);
router.get('/:id', getCategoryById);

// Protected routes
router.post('/', authMiddleware, createCategory);
router.post('/init', authMiddleware, addAllCategories); // فقط برای توسعه
router.put('/:id', authMiddleware, updateCategory);
router.delete('/:id', authMiddleware, deleteCategory);

export default router;