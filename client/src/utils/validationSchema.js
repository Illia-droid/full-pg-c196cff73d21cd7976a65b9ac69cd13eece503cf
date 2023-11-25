import * as Yup from "yup";
// import { addDays } from "date-fns";
export const taskShema = Yup.object({
  body: Yup.string()
    .trim()
    .matches(/.{2,64}/, "length 2...64")
    .required("required"),
  deadLine: Yup.date().min(new Date(), "wrong date").required("required"),
});

const chemaName = Yup.string()
  .trim()
  .matches(/^[A-Z][a-z]{2,63}$/)
  .required();

export const userSchema = Yup.object({
  firstName: chemaName,
  lastName: chemaName,
  email: Yup.string().trim().email().required(),
  password: Yup.string()
    .trim()
    .matches(/^[A-Z][a-z]{2,63}$/)
    .required(),
  birthday: Yup.date().max(new Date(), "wrong date").required("required"),
  isMale: Yup.boolean().required(),
});
