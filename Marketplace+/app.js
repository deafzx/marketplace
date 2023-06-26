const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Set up Multer upload middleware
const upload = multer({ storage: storage });

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/sell.html');
});

// List product route
app.post('/list-product', upload.array('product_image', 5), (req, res) => {
  const { title, description, price, category } = req.body;

  // Handle image upload and store the image paths in the database (implementation depends on your chosen database system)
  
  res.redirect('/sell');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
