const sql = require("./db.js");

// constructor
const Mitra = function(mitra) {
    this.email_mitra = mitra.email_mitra;
    this.nama_mitra = mitra.nama_mitra;
    this.gambar_mitra = mitra.gambar_mitra;
    this.status = mitra.status;
};

Mitra.create = (newMitra, result) => {
  sql.query("INSERT INTO tbl_mitra SET ?", newMitra, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.id_mitra, ...newMitra });
  });
};

Mitra.findById = (mitraId, result) => {
  sql.query(`SELECT * FROM tbl_mitra WHERE id_mitra = ${mitraId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Mitra.getAll = result => {
  sql.query("SELECT * FROM tbl_mitra", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Mitra.updateById = (id, mitra, result) => {
  sql.query(
    "UPDATE tbl_mitra SET email_mitra = ?, nama_mitra = ?,status=?, gambar_mitra=? WHERE id_mitra = ?",
    [mitra.email_mitra, mitra.nama_mitra,mitra.status, mitra.gambar_mitra, id],
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

      result(null, { id: id, ...mitra });
    }
  );
};

Mitra.remove = (id, result) => {
  sql.query("DELETE FROM tbl_mitra WHERE id_mitra = ?", id, (err, res) => {
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

    result(null, res);
  });
};

Mitra.removeAll = result => {
  sql.query("DELETE FROM tbl_mitra", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Mitra;