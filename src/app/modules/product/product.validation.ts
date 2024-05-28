import Joi from 'joi';

// Define the schema for Variants
const variantValidationSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

// Define the schema for Inventory
const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().required(),
  inStock: Joi.boolean().required(),
});

// Define the main Product schema
const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(variantValidationSchema).required(),
  inventory: inventoryValidationSchema.required(),
});

export default productValidationSchema;
