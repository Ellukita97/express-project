import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/tasks.controller.js";
import { pool } from "../db.js";
const router = Router();

router.get("/",async (req,res)=>{
  const data = await pool.query('SELECT NOW()')
  res.send(data.rows[0])
})

/*router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);
*/
export default router;
