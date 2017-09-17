import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(JSON.stringify({
    message: 'OK',
  }));
});

export default router;
