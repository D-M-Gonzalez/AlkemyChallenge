"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var brandsSchema = new _mongoose.Schema({
  brand_name: {
    type: String,
    required: true,
    trim: true
  },
  logo_url: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});
var productsSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  image_url: {
    type: String,
    "default": ""
  },
  price: {
    type: Number,
    required: true
  },
  brand: brandsSchema
}, {
  versionKey: false,
  timestamps: true
});
productsSchema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)('Product', productsSchema);

exports["default"] = _default;