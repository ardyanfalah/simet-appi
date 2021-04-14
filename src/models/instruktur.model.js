const sql = require("./db.js");

// constructor
const Instruktur = function(instruktur) {
    this.email_instruktur = instruktur.email_instruktur;
    this.nama_instruktur = instruktur.nama_instruktur;
    this.hp_instruktur = instruktur.hp_instruktur;
    this.gambar_instruktur = instruktur.gambar_instruktur;
    this.status = instruktur.status;
};

Instruktur.create = (newInstruktur, result) => {
  sql.query("INSERT INTO tbl_instruktur SET ?", newInstruktur, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.id_instruktur, ...newInstruktur });
  });
};

Instruktur.findById = (instrukturId, result) => {
  sql.query(`SELECT * FROM tbl_instruktur WHERE id_instruktur = ${instrukturId}`, (err, res) => {
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

Instruktur.getAll = result => {
  sql.query("SELECT * FROM tbl_instruktur", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Instruktur.updateById = (id, instruktur, result) => {
  sql.query(
    "UPDATE tbl_instruktur SET email_instruktur = ?, nama_instruktur = ?, hp_instruktur = ?,status=?, gambar_instruktur=? WHERE id_instruktur = ?",
    [instruktur.email_instruktur, instruktur.nama_instruktur, instruktur.hp_instruktur,instruktur.status, instruktur.gambar_instruktur, id],
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

      result(null, { id: id, ...instruktur });
    }
  );
};

Instruktur.remove = (id, result) => {
  sql.query("DELETE FROM tbl_instruktur WHERE id_instruktur = ?", id, (err, res) => {
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

Instruktur.removeAll = result => {
  sql.query("DELETE FROM tbl_instruktur", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Instruktur;