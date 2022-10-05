const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
//WHY IS IT TAGS?  endpoint

// The `/api/tags` endpoint


 // find all tags
  // be sure to include its associated Product data
//WORKS
router.get('/', async (req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    });

    res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
  }

});



// find a single tag by its `id`
// be sure to include its associated Product data

//WONT WORK but it looks close
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPK(req.params.id, {
      include: [{model: Product}]});

    if (!tagData) {
      res.status(404).json({
        message: 'OH NO! No tag found with this id' 
      });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//WORKS should work with { "tag_name": "orange" } JSON sent to it - needs "" not '' 
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }

  // create a new tag
});


// update a tag's name by its `id` value

//DOESN'T WORK but it's on track - try { "tag_name": "orange" } with an id of 1 or something - look closer at product example

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name
      });
      if (!tagData){
        res.status(404).json({
          message: 'OH NO! No tag found with this id'
        });
        return;
      }
      res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }

});

// delete a tag by its `id` value

//WORKS 
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData){
      res.status(404).json({
        message: 'OH NO! No tag found with this id'
      });
      return;
    }
res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
