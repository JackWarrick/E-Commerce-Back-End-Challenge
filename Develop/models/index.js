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
//took off as: 'product_of_tag'
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
});

// Tag belongToMany Products (through ProductTag)
//took off as: 'tag_of_product'

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
