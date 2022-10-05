const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//get all category data - Not sure if this includes the products associated with it automatically if we did all that?

//THIS ONE WORKS
router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({include: [{model: Product}]});

    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});


//THIS ONE DOESN'T WORK
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findbyPK(req.params.id, {
      include: [{model: Product}]});

    if (!categoryData) {
      res.status(404).json({
        message: 'OH NO! No category found with this id' 
      });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // find one category by its `id` value
  // be sure to include its associated Products
});


//THIS ONE WORKS WITH A { "category_name": "underwear" } JSON sent to it - needs "" not ''
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});


//Doesn't work - sent this error - {
// 	"generatedMessage": false,
// 	"code": "ERR_ASSERTION",
// 	"expected": true,
// 	"operator": "=="
// }
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name
      });
      if (!categoryData){
        res.status(404).json({
          message: 'OH NO! No category found with this id'
        });
        return;
      }
      res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
  // update a category by its `id` value
});


//THIS WORKS
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData){
      res.status(404).json({
        message: 'OH NO! No category found with this id'
      });
      return;
    }
res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;