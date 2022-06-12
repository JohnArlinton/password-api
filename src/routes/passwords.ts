import express from "express";
import PasswordService from "../services/passwordsServices";
import validate from "../middleware/validateRequest";
import {
  PasswordCreateValidation,
  PasswordUpdateValidation,
  PasswordIdValidation,
} from "../validations/passwordValidation";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ result: PasswordService.getAll() });
});

router.post("/", validate(PasswordCreateValidation), (req, res) => {
  const password = PasswordService.save(req.body);
  res.status(200).send({ result: password });
});

router.put("/:id", validate(PasswordUpdateValidation), (req, res) => {
  const password = PasswordService.update(parseInt(req.params.id), req.body);
  return password
    ? res.status(200).send({ result: password })
    : res.sendStatus(404);
});

router.delete("/:id", validate(PasswordIdValidation), (req, res) => {
  const passwords = PasswordService.delete(parseInt(req.params.id));
  return passwords
    ? res.status(200).send({ message: "OK" })
    : res.sendStatus(404);
});

export default router;
