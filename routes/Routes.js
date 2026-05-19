import express from "express";
import mongoose from "mongoose";
import { create } from "../controlls/Contact_controlls.js";
import { DownloadCreate, getDownloadCount } from "../controlls/Download_controlls.js";
import { visiterCreate, visitersCount } from "../controlls/Visiters_controlls.js";

const route=express.Router();
route.post("/contact",create)
route.post("/download/resume",DownloadCreate)
route.get("/download/resume/count",getDownloadCount);
route.get("/visiter/count",visitersCount);
route.post("/visiter",visiterCreate)

export default route;