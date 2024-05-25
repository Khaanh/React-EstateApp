import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
	console.log("Router works! ");
});

router.post("/test", (req, res) => {
	console.log("Router works! ");
});

router.put("/test", (req, res) => {
	console.log("Routers work!");
});

router.delete("/test", (req, res) => {
	console.log("Routers work!");
});

export default router;
