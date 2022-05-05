const pool = require("../config/mysql-database");

const getprod = async () => {
   let sql =
      "SELECT products.product_id, products.name, products.Description, products.category_id, inventory.quantity, products.price FROM products INNER JOIN inventory ON products.inventory_id = inventory.inventory_id";
   return await pool.query(sql);
};

const getcategory = async () => {
   let sql = "SELECT name, Description FROM `category`y";
   return await pool.query(sql);
};

const getfavorite = async () => {
   let sql = "SELECT name, Description FROM `category`y";
   return await pool.query(sql);
};

const insertfavorite = async () => {
   let sql = "SELECT name, Description FROM `category`y";
   return await pool.query(sql);
};

const deletefavorite = async () => {
   let sql = "SELECT name, Description FROM `category`y";
   return await pool.query(sql);
};

module.exports = {
   getprod,
   getcategory,
   getfavorite,
   insertfavorite,
   deletefavorite,
};
