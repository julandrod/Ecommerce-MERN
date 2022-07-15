import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor ingrese su nombre"],
    minlength: 3,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: [true, "Por favor ingrese su apellido"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Por favor ingrese un email"],
    validate: {
      validator: validator.isEmail,
      message: "Por favor ingrese un email valido",
    },
  },
  password: {
    type: String,
    required: [true, "Por favor ingrese un password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  address: {
    type: String,
    required: [true, "Por favor ingrese una direccion"],
  },
  city: {
    type: String,
    required: [true, "Por favor ingrese una ciudad"],
  },
  state: {
    type: String,
    required: [true, "Por favor ingrese un departamento"],
  },
  phone: {
    type: "Number",
    required: [true, "Por favor ingrese un telefono"],
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (inputPassword) {
  const isMatch = await bcrypt.compare(inputPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
