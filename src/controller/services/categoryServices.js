const Category = require("../../models/categoryModel"); 



exports.fetchCategories = async (req, res) => {
    const categories = await Category.find();

    res.status(200).send({
        message: "success",
        data: categories
    })

  }
  
  
  exports.addCategory = (req, res) => {
    const name = req.body.name
  
    const category = new Category({
      name
    })
  
    category.save()
      .then((result) =>{
        res.status(200).send({
          message: "category created",
          data: result
        })
      })
      .catch(err => {
        res.status(401).send({
          message: "Error creating category",
          data: err
        })
      })
  
  
  }