import { number, object, string } from "yup";

const PasswordCreateValidation = object({
  body: object({
    url: string().url("Must be a valid URL").required("Url is required"),
    name: string().required("Name is required"),
    username: string().required("Username is required"),
    password: string().min(4).max(20).required("Password is required"),
  }),
});

const PasswordUpdateValidation = object({
  body: object({
    url: string().url("Must be a valid URL").required("Url is required"),
    name: string().required("Name is required"),
    username: string().required("Username is required"),
    password: string().min(4).max(20).required("Password is required"),
  }),
  params: object({
    id: number().required("Id is required"),
  }),
});

const PasswordIdValidation = object({
  params: object({
    id: number().required("Id is required"),
  }),
});

export {
  PasswordCreateValidation,
  PasswordUpdateValidation,
  PasswordIdValidation,
};
