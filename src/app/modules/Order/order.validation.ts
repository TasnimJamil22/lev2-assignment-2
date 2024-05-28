import Joi from 'joi';

// Define the Joi schema for the Order model
const orderValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

export default orderValidationSchema;
