const express = require("express")
const router = express.Router()
const app = express()
//cors跨域
app.use(require("cors")())
//接口
router.get("/", async (req, res) => {
  const list = await ["吃饭", "睡觉", "打豆豆"]
  res.send(list)
})

app.use(router)

app.listen(3000, () => {
  console.log("server listen at http://localhost:3000")
})
