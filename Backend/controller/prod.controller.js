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


const categoryByNameController = async (req, res) => {
   let category = req.params.id;
   try {
      let [data] = await postService.getcategoryByName(category);
      res.json({ success: true, payload: data });
   } catch (error) {}
};

const favoriteOnlyforuserController = async (req, res) => {
   const id = req.params.id;
   try {
      let [data] = await postService.getfavoritebyuser(id);
      res.json({ success: true, payload: data });
   } catch (error) {}
};

const favoriteController = async (req, res) => {
   try {
      let [data] = await postService.getfavorite();
      res.json({ success: true, payload: data });
   } catch (error) {}
};

const updatefavoriteController = async (req, res) => {
   const { user_id, product_id } = req.body;
   try {
      await postService.insertfavorite(user_id, product_id);
      res.json({ success: true });
   } catch (error) {}
};

const deletefavoriteController = async (req, res) => {
   const { product_id } = req.body;
   try {
      await postService.deletefavorite(product_id);
      res.json({ success: true });
   } catch (error) {}
};

const paidController = async (req, res) => {
   const { amount } = req.body;
   try {
      await postService.paymentsmethod(amount);
      res.json({ success: true });
   } catch (error) {}
};

module.exports = {
   productController,
   categoryController,
   favoriteController,
   favoriteOnlyforuserController,
   updatefavoriteController,
   deletefavoriteController,
   categoryByNameController,
   paidController,
};
