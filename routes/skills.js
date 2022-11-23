import express from 'express';

import { getSkillsHandler } from '../handlers/skills.js';

const router = express.Router();

router.get('/', getSkillsHandler);

export default router;
