const express = require('express')
const prisma = require("./prisma");

const app = express()
app.use(express.json())

app.get('/menus', async (req, res) => {
  try {
    const menus = await prisma.menu.findMany();

    return res.status(200).json(menus);
  } catch (error) {
    return res.status(500).json(error);
  }
})

app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`),
)
