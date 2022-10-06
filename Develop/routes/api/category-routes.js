const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//get all category data

//THIS ONE WORKS
router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({include: [{model: Product}]});

    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products

//THIS ONE DOESN'T WORK - INTERNAL SERVER ERROR
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
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
});



// create a new category

//THIS ONE WORKS WITH A { "category_name": "underwear" } JSON sent to it - needs "" not ''
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});


// update a category by its `id` value

//Doesn't work - sent this error - {
// 	"generatedMessage": false,
// 	"code": "ERR_ASSERTION",
// 	"expected": true,
// 	"operator": "=="
// }
router.put('/:id', async (req, res) => {
  try {
    //this is the correct thing
    const categoryData = await Category.update(
        req.body, {
          where: { id: req.params.id  }
      });
      //above
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
});

 // delete a category by its `id` value

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
});

module.exports = router;