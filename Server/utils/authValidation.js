const Ajv = require("ajv").default;

const ajv = new Ajv({ allErrors: true });

const schema = {
  type: "object",
  properties: {
    email: { type: "string", pattern: ".+@.+..+" },
    password: { type: "string", minLength: 5 },
  },
  required: ["email", "password"],
};

module.exports = ajv.compile(schema);
