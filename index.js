const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/serials/', (req,res) => {
	
	try {
  const data = fs.readFileSync('response.txt', 'utf8');
  res.send(data)
} catch (err) {
   res.send(err)
}
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
