const Joi = require("joi");

const arrayString = ["Banana", "Bacon", "Cheese"];
const arrayObjects = [
  { example: "example1" },
  { example: "example2" },
  { example: "example3" },
  { example: "example4" },
];
const userInput = {
  personalInfo: {
    streetAddress: "123456789",
    city: "hjhjh",
    state: "Fl",
  },
  preferences: arrayString,
  examples: arrayObjects,
};

const personalInfoSchema = Joi.object().keys({
  streetAddress: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().required().max(2),
});

const preferencesSchema = Joi.array().items(Joi.string());
const examplesSchema = Joi.array().items(
  Joi.object().keys({
    example: Joi.string().trim().required(),
  })
);

const schema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema,
  examples: examplesSchema,
});

const validation = schema.validate(userInput);

if (validation.errors) {
  console.log(validation.error);
} else {
  console.log(validation.value);
}
