// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
//SOMETHING IS GOING ON HERE WITH THE PRODUCT TAG MODEL HAVING multiple associations

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_of_tag'
});

// Tag belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_of_product'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
