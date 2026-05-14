import express from "express";
import mongoose from "mongoose";
import { create } from "../controlls/Contact_controlls.js";

const route=express.Router();
route.post("/contact",create)
export default route;