const { Score } = require('../models')

exports.create = async (req, res) => {
  try {
    const score = await Score.create(req.body)

    res.status(201).json({ status: 1, score })
  } catch (error) {
    console.log(error)
  }
}

exports.getAll = async (req, res) => {
  try {
    const scores = await Score.findAll()

    res.status(200).json({ status: 1, scores })
  } catch (error) {
    console.log(error)
  }
}

exports.update = async (req, res) => {
  try {
    const scores = await Score.update(req.body, {
      where: { id: req.params.id }
    })

    res.status(200).json({ status: 1, scores })
  } catch (error) {
    console.log(error)
  }
}

exports.delete = async (req, res) => {
  try {
    await Score.destroy({
      where: { id: req.params.id }
    })

    res.status(204).json()
  } catch (error) {
    console.log(error)
  }
}

exports.findOne = async (req, res) => {
  try {
    const score = await Score.findOne({
      where: { maMonHoc: req.params.mmh, maSinhVien: req.params.msv }
    })

    if (!score) {
      return res.status(404).json({ status: 0, message: 'No student found' })
    }

    res.status(200).json({ status: 1, score })
  } catch (error) {
    console.log(error)
  }
}
