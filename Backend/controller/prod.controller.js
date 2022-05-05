const postService = require("../services/prod.services");

const productController = async (req, res) => {
   try {
      let [data] = await postService.getprod();
      res.json({ success: true, payload: data });
   } catch (error) {}
};

const categoryController = async (req, res) => {
   try {
      let [data] = await postService.getcategory();
      res.json({ success: true, payload: data });
   } catch (error) {}
};

const favoriteController = async (req, res) => {
   try {
      let [data] = await postService.getfavorite();
      res.json({ success: true, payload: data });
   } catch (error) {}
};

module.exports = {
   productController,
   categoryController,
   favoriteController,
};
