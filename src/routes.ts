import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json('hellow world')
})

export default router
