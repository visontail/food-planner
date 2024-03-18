const express = require('express');
const router = express.Router();

const client = require('../config/index.js');

const collection = client.db("food-planner").collection("fooditems");

// Route to get by id
router.get('/:id', async (req, res) => {
    const { ObjectId } = require('mongodb');
    const idObject = new ObjectId((req.params.id).toString());
    try {
        const items = await collection.findOne({ _id: idObject });
        if (items) {
            res.json(items);
        } else {
            res.status(404).json({ message: `No item was found by the id: ${idObject} ` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
// Route to get selected number of items in selected categories
router.get('/plan/:num/:categories', async (req, res) => {
    const num = parseInt(req.params.num);
    const categories = req.params.categories.split(',');
    try {
        const items = await collection.aggregate([{ $match: { category: { $in: categories } } }, { $sample: { size: num } }, { $project: { _id: 1, name: 1, category: 1, image_url: 1 } }]).toArray();
        if (items) {
            res.json(items);
        } else {
            res.status(404).json({ message: `No item was found` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
//Route to get all categories
router.get('/categories', async (req, res) => {
    try {
        // the distinct operation is not supported in API Version 1 - use an aggregation pipeline
        const categories = await collection.aggregate([
            { $unwind: "$category" },
            { $group: { _id: "$category" } },
            { $project: { _id: 0, category: "$_id" } }
        ]).toArray(); 
        const uniqueCategories = categories.map(category => category.category);
        res.json(uniqueCategories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
// Route to get "all" (limit 12 item)
router.get('/all', async (req, res) => {
    try {
        const items = await collection.find({}, { projection: { _id: 1, name: 1, category: 1, image_url: 1 } }).limit(12).toArray();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
// Route to get "all" item (no limit)
router.get('/all', async (req, res) => {
    try {
        const items = await collection.find({}, { projection: { _id: 1, name: 1, category: 1, image_url: 1 } }).toArray();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
