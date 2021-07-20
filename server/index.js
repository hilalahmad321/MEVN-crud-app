const express = require('express');
const mysql = require('mysql');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vue_crud"
})
con.connect((err) => {
    if (err) throw err;
    console.log("connection successfully")
})

app.get("/", (req, res) => {
    con.query("SELECT * FROM student", (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result)
        }
    });
});


app.post("/addstudent", (req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const city = req.body.city;
    con.query("INSERT INTO student (std_name,std_age,std_city) VALUES (?,?,?)", [username, age, city], (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send("success")
        }
    });
});

app.get("/editstudent/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id)
    con.query("SELECT * FROM student WHERE id=?", [id], (err, result) => {
        if (err) {
            throw err
        } else {
            res.send(result)
        }
    })
})

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const age = req.body.age;
    const city = req.body.city;
    con.query("UPDATE student SET std_name=? , std_age=?,std_city=? WHERE id=?", [username, age, city, id], (err, result) => {
        if (err) {
            throw err
        } else {
            res.send("success")
        }
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM student WHERE id=?", [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            // console.log(result)
        }
    })
})
app.get("/total", (req, res) => {
    con.query("SELECT * FROM student", (err, rows, result) => {
        if (err) {
            throw err;
        } else {
            const total = rows.length;
            res.json(total)
            // console.log(rows.length)
        }
    })
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})