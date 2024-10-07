var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: 'i-phone-16',
      category: 'mobile',
      description: 'brand new i-phone 16',
      Image: 'https://cdn.wccftech.com/wp-content/uploads/2024/02/iPhone-16-Concept-2.jpg'
    },
    {
      name: 'i-phone-15',
      category: 'mobile',
      description: 'brand new i-phone 15',
      Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1692845702708'
    },
    {
      name: 'i-phone-14',
      category: 'mobile',
      description: 'brand new i-phone 14',
      Image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1661026582322'
    },
    {
      name: 'i-phone-13',
      category: 'mobile',
      description: 'brand new i-phone 13',
      Image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1629907844000'
    }
  ];
  
  res.render('admin/view-products',{admin:true,products})
});

// get data

router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})

// post data

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
})


module.exports = router;