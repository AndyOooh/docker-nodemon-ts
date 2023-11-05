"use strict";
// const express = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Request, Response } from 'express';
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/ping', (req, res) => {
    res.send('Hello World 2');
});
// app.get('/runConnect', (req, res) => {
//   const { address } = req.body;
//   const holding = fetchHoldings(address);
//   res.send(holding);
// });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
