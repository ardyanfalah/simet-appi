const sql = require("./db.js");

// constructor
const Penyelenggara = function(penyelenggara) {
    this.email_penyelenggara = penyelenggara.email_penyelenggara;
    this.nama_penyelenggara = penyelenggara.nama_penyelenggara;
    this.hp_penyelenggara = penyelenggara.hp_penyelenggara;
    this.gambar_penyelenggara = penyelenggara.gambar_penyelenggara;
    this.status = penyelenggara.status;
};

Penyelenggara.create = (newpenyelenggara, result) => {
  sql.query("INSERT INTO tbl_penyelenggara SET ?", newpenyelenggara, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.id_penyelenggara, ...newpenyelenggara });
  });
};

Penyelenggara.findById = (penyelenggaraId, result) => {
  sql.query(`SELECT * FROM tbl_penyelenggara WHERE id_penyelenggara = ${penyelenggaraId}`, (err, res) => {
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

Penyelenggara.getAll = result => {
  sql.query("SELECT * FROM tbl_penyelenggara", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Penyelenggara.updateById = (id, penyelenggara, result) => {
  sql.query(
    "UPDATE tbl_penyelenggara SET email_penyelenggara = ?, nama_penyelenggara = ?, hp_penyelenggara = ?,status=?, gambar_penyelenggara=? WHERE id_penyelenggara = ?",
    [penyelenggara.email_penyelenggara, penyelenggara.nama_penyelenggara, penyelenggara.hp_penyelenggara,penyelenggara.status, penyelenggara.gambar_penyelenggara, id],
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

      result(null, { id: id, ...penyelenggara });
    }
  );
};

Penyelenggara.remove = (id, result) => {
  sql.query("DELETE FROM tbl_penyelenggara WHERE id_penyelenggara = ?", id, (err, res) => {
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

Penyelenggara.removeAll = result => {
  sql.query("DELETE FROM tbl_penyelenggara", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Penyelenggara;