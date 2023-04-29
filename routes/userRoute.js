import express from 'express';
import {
    getApi,
    postApi
} from '../controllers/userController.js';
const router = express.Router();

router.post("/", postApi)
router.get("/:id", getApi);

export default router;