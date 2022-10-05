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
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

// Tag belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'

});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
