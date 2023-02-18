import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Models from '../../models/PatternModel.js'
dotenv.config()

export const getAllModels = async (req, res) => {
    try {
        const models = await Models.find({ deleted_at: null }).sort({ _id: 1 })
        res.status(200).json({ data: models });
    } catch (err) {
        console.log(err);
        res.status(401).json({ message: err.message });
    }
}

export const getModels = async (req, res) => {
    try {
        const page = req.body.page
        const limit = req.body.rowsPerPage
        const searchKey = req.body.searchKey
        const pattern = searchKey == '' ? { deleted_at: null } : {
            $and: [
                {
                    deleted_at: null
                },
                {
                    $or: [
                        {
                            name: {
                                $regex: new RegExp(searchKey.toLowerCase(), "i")
                            }
                        },
                        {
                            value: {
                                $regex: new RegExp(searchKey.toLowerCase(), "i")
                            }
                        }
                    ]
                }
            ]
        }
        const startIndex = (Number(page)) * limit
        const models = await Models.find(pattern).sort({ _id: 1 }).limit(limit).skip(startIndex);
        const totalCount = await Models.find(pattern).countDocuments()
        res.status(200).json({ data: models, currentPage: Number(page), totalCount: totalCount });
    } catch (err) {
        console.log(err);
        res.status(401).json({ message: err.message });
    }
}

export const addModel = async (req, res) => {
    const { name, value } = req.body
    try {
        // create a new filter with default values
        const result = await Models.create({
            name: name,
            value: value,
            created_at: new Date
        })

        res.status(200).json({ newModel: result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

export const deleteModel = async (req, res) => {
    const id = req.body.modelId
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No model with that ID')
        const updateResult = await Models.findByIdAndDelete({ _id: id })
        res.json({ msg: 'Model deleted successfully' })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const updateModel = async (req, res) => {
    try {
        await Models.findByIdAndUpdate({
            _id: req.body._id,
        }, {
            name: req.body.name,
            value: req.body.value
        })

        const updateResult = await Models.findById({ _id: req.body._id })
        res.json(updateResult)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
