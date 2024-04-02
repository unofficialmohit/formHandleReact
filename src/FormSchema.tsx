import * as Yup from "yup";
export const signUpSchema=Yup.object({
    name:Yup.string().min(3).max(20).required("Please Enter Name"),
    email:Yup.string().email().required("Please Enter Email"),
    password:Yup.string().min(6).required("Please Enter Password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),""],"Password must match"),
    phone:Yup.string()
    .matches(
      /^[0-9]{10}$/, // Regex for 10 digits
      "Enter 10 Numbers only"
    )
.required()
})