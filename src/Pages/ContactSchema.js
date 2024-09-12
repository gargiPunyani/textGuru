import * as Yup from "yup"

export const contactSchema = Yup.object({
    name: Yup.string().required( "Required"),
    phone:Yup.string().max(10).min(10).required("Required"),
    message:Yup.string().required("Required")

})