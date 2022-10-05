const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
//WHY IS IT TAGS?  endpoint
// The `/api/tags` endpoint
// ProductTag probably needs to be use with some through thing

//SHOULD WORK - not sure if i need async for this with no req read

router.get('/', async (req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    });

    res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
  }

  // find all tags
  // be sure to include its associated Product data
});


//WONT WORK but it looks close
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findbyPK(req.params.id, {
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


  // find a single tag by its `id`
  // be sure to include its associated Product data
});


//should work with { "tag_name": "orange" } JSON sent to it - needs "" not '' 
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }

  // create a new tag
});


//DON't think it works but it's close - try { "tag_name": "orange" } with an id of 1 or something
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
  // update a tag's name by its `id` value

});



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

  // delete on tag by its `id` value
});

module.exports = router;
