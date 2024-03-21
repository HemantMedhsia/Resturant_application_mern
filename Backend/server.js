import express from "express";
import cors from "cors";
import app from "./app.js";

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
