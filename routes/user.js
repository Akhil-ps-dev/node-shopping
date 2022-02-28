var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [

    {
      name: "iphone 12",
      category: "Mobile",
      description: "This is 2022 super model phone",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343703000"


    },
    {
      name: "Google pixel",
      category: "Mobile",
      description: "This is 2022 super model pixel phone",
      image: "https://m.media-amazon.com/images/I/61zLf5MedCS._AC_SS450_.jpg"

    },
    {
      name: "Redme 11 pro",
      category: "Mobile",
      description: "This is 2022 super model Redme 11 pro",
      image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-11-pro-5g/specs-header.png"

    },
    {
      name: "Nokia 6",
      category: "Mobile",
      description: "This is 2022 super model phone",
      image: "https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg"

    },


  ]


  res.render('index', {products,admin:false });
});

module.exports = router;
