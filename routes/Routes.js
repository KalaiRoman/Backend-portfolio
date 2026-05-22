import express from "express";
import mongoose from "mongoose";
import { create } from "../controlls/Contact_controlls.js";
import { DownloadCreate, getBrowserData, getDownloadCount } from "../controlls/Download_controlls.js";
import { visiterCreate, visitersCount } from "../controlls/Visiters_controlls.js";

const route=express.Router();
route.post("/contact",create)
route.post("/downloads",DownloadCreate)
route.get("/downloads/count",getDownloadCount);
route.get("/downloads/get",getBrowserData);

route.get("/visiter/count",visitersCount);
route.post("/visiter",visiterCreate)

export default route;