const sql = require("./db.js");

// constructor
const Admin = function(admin) {
    this.email_admin = admin.email_admin;
    this.nama_admin = admin.nama_admin;
    this.role_admin = admin.role_admin;
    this.password_admin = admin.password_admin
};

Admin.create = (newAdmin, result) => {
  sql.query("INSERT INTO tbl_admin SET ?", newAdmin, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.id_admin, ...newAdmin });
    result(null, { id: res.id_admin, ...newAdmin });
  });
};

Admin.findById = (adminId, result) => {
  sql.query(`SELECT * FROM tbl_admin WHERE id_admin = ${adminId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found admin: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Admin.getAll = result => {
  sql.query("SELECT * FROM tbl_admin", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Admin.updateById = (id, admin, result) => {
  sql.query(
    "UPDATE tbl_admin SET email_admin = ?, nama_admin = ?, password_admin = ?,role_admin=? WHERE id_admin = ?",
    [admin.email_admin, admin.nama_admin, admin.password_admin,admin.role_admin, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated admin: ", { id: id, ...admin });
      result(null, { id: id, ...admin });
    }
  );
};

Admin.remove = (id, result) => {
  sql.query("DELETE FROM tbl_admin WHERE id_admin = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted admin with id: ", id);
    result(null, res);
  });
};

Admin.removeAll = result => {
  sql.query("DELETE FROM tbl_admin", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} admin`);
    result(null, res);
  });
};

module.exports = Admin;