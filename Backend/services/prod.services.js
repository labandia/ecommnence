const pool = require("../config/mysql-database");

const getprod = async () => {
   let sql =
      "SELECT products.product_id, products.name, products.Description, products.category_id, inventory.quantity, products.price FROM products INNER JOIN inventory ON products.inventory_id = inventory.inventory_id";
   return await pool.query(sql);
};

const getcategory = async () => {
   let sql = "SELECT * FROM category";
   return await pool.query(sql);
};

const getcategoryByName = async (id) => {
   let sql = "SELECT products.product_id, products.name, products.Description, products.category_id, inventory.quantity, products.price FROM products INNER JOIN inventory ON products.inventory_id = inventory.inventory_id INNER JOIN category ON category.category_id = products.category_id WHERE category.category_id = ?;";
   return await pool.query(sql, id);
};

const getfavoritebyuser = async (id) => {
   let sql =
      "SELECT products.product_id, products.inventory_id, products.category_id, products.name, products.Description, products.price FROM products INNER JOIN favorite on products.product_id = favorite.product_id INNER JOIN userinfo on favorite.user_id = userinfo.user_id WHERE userinfo.user_id = ?";
   return await pool.query(sql, [id]);
};

const getfavorite = async () => {
   let sql = "SELECT * FROM favorite";
   return await pool.query(sql);
};

const insertfavorite = async (user_id, product_id) => {
   console.log(user_id);
   let sql = "INSERT INTO favorite SET ?";

   return await pool.query(sql, {
      user_id: user_id,
      product_id: product_id,
   });
};

const deletefavorite = async (id) => {
   let sql = "DELETE FROM favorite WHERE product_id = ?";
   return await pool.query(sql, [id]);
};

const paymentsmethod = async (amount) => {
   let sql = "INSERT INTO payments SET ?";
   return await pool.query(sql, {
      amount: amount,
      status: "Paid",
   });
};

module.exports = {
   getprod,
   getcategory,
   getfavorite,
   getfavoritebyuser,
   insertfavorite,
   deletefavorite,
   paymentsmethod,
   getcategoryByName
};
