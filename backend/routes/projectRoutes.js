const express = require('express');
const Project = require('../models/project');

const router = express.Router();

router.get('/', async (_req, res) => {
  const projects = await Project.find()
    .sort({ displayOrder: 1, createdAt: -1 })
    .select('title description technologies githubUrl liveUrl displayOrder')
    .lean();

  return res.json(projects);
});

module.exports = router;