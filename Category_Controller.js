import Category from "../model/Category.js";


export const getAllCategories = async (req, res) => {
  try {

    const categories = await Category.find();

    res.json(categories);

} catch (error) {

    res.status(500).json({ error: error.message });

}
};


export const updateCategoryCount = async (req, res) => {

    const { name_category } = req.params;

    const { count } = req.body;

  try {

    const updatedCategory = await Category.findOneAndUpdate(

        { name_category },

        { count },

        { new: true }
    );


    if (!updatedCategory) {

        return res.status(400).json({ message: "Category not found" });

    }


    res.json(updatedCategory);

} catch (error) {

    res.status(500).json({ error: error.message });

}
};


export const createCategory = async (req, res) => {

    const { name_category, count } = req.body;

  try {

    const newCategory = new Category({ name_category, count });

    await newCategory.save();

    res.status(201).json(newCategory);

} catch (error) {

    res.status(500).json({ error: error.message });
  }
};