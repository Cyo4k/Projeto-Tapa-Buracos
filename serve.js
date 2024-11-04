const express = require('express');
const mongoose = require('mongoose');
const conect = "mongodb+srv://jpauloxpo:052120@tapaburacos.zwl1r.mongodb.net/?retryWrites=true&w=majority&appName=tapaBuracos"
//const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
/*app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));*/

mongoose.connect(conect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('banco de dados conectado com sucesso!'))
  .catch((err) => console.log(err));

app.use('/auth', authRoutes);
app.use('/reports', reportRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
