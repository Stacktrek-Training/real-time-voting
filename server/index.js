const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

///////////////////////////////////////////////// CREATE USERS ///////////////////////////////////////////////////////

app.post ("/users", async(req, res) => {
    try {
        const { user_firstname, user_lastname, user_email, user_username,user_password } = req.body;
        const newuser = await pool.query("INSERT INTO usersdb (user_firstname, user_lastname, user_email, user_username, user_password) VALUES($1, $2, $3, $4, $5) RETURNING *", 
        [user_firstname, user_lastname, user_email, user_username,user_password]
        );
        res.json(newuser.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

// Get all todos/USERS

app.get("/users", async(req, res) => {
    try {
        const allusers = await pool.query("SELECT * FROM usersdb");
        res.json(allusers.rows);
    
    } catch (err) {
        console.error(err.message);
        
    }
    
});

// delete users
app.delete("/users/:id", async(req, res) => {
    try {

        const { id } = req.params;
        const deleteuser = await pool.query("DELETE FROM usersdb WHERE user_id = $1", [id]);
        res.json("user was deleted!")
    } catch (err) {
        console.error(err.message);
        
    }
})

// update users//////////////////// undone
app.put("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { user_firstname, user_lastname, user_email, user_username,user_password } = req.body;
        const updateuser = await pool.query("UPDATE usersdb SET user_firstname = $1, user_lastname = $2, user_email = $3, user_username = $4, user_password = $5 WHERE user_id = $6",
        [user_firstname, user_lastname, user_email, user_username,user_password, id]);

        res.json("User was updated");
    } catch (err) {
        console.error(err.message);

    }
});

/////////////////////////////////////////////// Create a todo/POLLS //////////////////////////////////////////////////

app.post("/polls", async (req, res) => {
    try {
        const {poll_title, user_id} = req.body;
        const newpoll = await pool.query("INSERT INTO pollsdb (poll_title, user_id) VALUES ($1, $2) RETURNING *", 
        [poll_title, user_id]
        );
        res.json(newpoll.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

// Get a todo/POLLS
app.get("/polls", async(req, res) => {
    try {
        const allpolls = await pool.query("SELECT * FROM pollsdb");
        res.json(allpolls.rows);
    
    } catch (err) {
        console.error(err.message);
        
    }
    
});


// delete polls
app.delete("/polls/:id", async(req, res) => {
    try {

        const { id } = req.params;
        const deletepoll = await pool.query("DELETE FROM pollsdb WHERE poll_id = $1", [id]);
        res.json("poll was deleted!")
    } catch (err) {
        console.error(err.message);
        
    }
})

// update polls
app.put("/polls/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { poll_title } = req.body;
        const updatepoll = await pool.query("UPDATE pollsdb SET poll_title = $1 WHERE poll_id = $2",
        [poll_title, id]);

        res.json("Poll title was updated");
    } catch (err) {
        console.error(err.message);

    }
});
  

//////////////////////////////////////////////////////// Create a todo/VOTERS //////////////////////////////////////////////////////

app.post("/voters", async(req, res) => {
    try {
        const { voter_username, voter_email, voter_password, user_id} = req.body;
        const newvoter = await pool.query("INSERT INTO votersdb (voter_username, voter_email, voter_password , user_id) VALUES($1, $2, $3, $4) RETURNING *", 
        [voter_username, voter_email, voter_password , user_id]
        );
        res.json(newvoter.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

// Get a todo/VOTERS

app.get("/voters", async(req, res) => {
    try {
        const allvoter = await pool.query("SELECT * FROM votersdb");
        res.json(allvoter.rows);
    
    } catch (err) {
        console.error(err.message);
        
    }
    
});

// delete voters
app.delete("/voters/:id", async(req, res) => {
    try {

        const { id } = req.params;
        const deletevoters = await pool.query("DELETE FROM votersdb WHERE voter_id = $1", [id]);
        res.json("voter was deleted!")
    } catch (err) {
        console.error(err.message);
        
    }
})


// delete voters
app.delete("/voters/:id", async(req, res) => {
    try {

        const { id } = req.params;
        const deletevoter = await pool.query("DELETE FROM votersdb WHERE voter_id = $1", [id]);
        res.json("voter was deleted!")
    } catch (err) {
        console.error(err.message);
        
    }
})


app.put("/voters/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { voter_username, voter_email, voter_password } = req.body;
        const updatevoter = await pool.query("UPDATE votersdb SET  voter_username = $1, voter_email = $2, voter_password = $3 WHERE voter_id = $4",
        [voter_username, voter_email, voter_password, id]);

        res.json("Voter was updated");
    } catch (err) {
        console.error(err.message);

    }
});

//////////////////////////////////////////////////////// Create a todo/OPTIONS ////////////////////////////////////////////////////////

app.post("/options", async(req, res) => {
    try {
        const { option_answer, poll_id} = req.body;
        const newoption = await pool.query("INSERT INTO optionsdb (option_answer, poll_id) VALUES($1, $2) RETURNING *", 
        [option_answer, poll_id]
        );
        res.json(newoption.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})


// Get a todo/OPTIONS

app.get("/options", async(req, res) => {
    try {
        const alloptions = await pool.query("SELECT * FROM optionsdb");
        res.json(alloptions.rows);
    
    } catch (err) {
        console.error(err.message);
        
    }
});



// delete options
app.delete("/options/:id", async(req, res) => {
    try {

        const { id } = req.params;
        const deleteoption = await pool.query("DELETE FROM optionsdb WHERE option_id = $1", [id]);
        res.json("option was deleted!")
    } catch (err) {
        console.error(err.message);
    }
})


// options update
app.put("/options/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { option_answer } = req.body;
        const updateoption = await pool.query("UPDATE optionsdb SET option_answer = $1 WHERE option_id = $2",
        [option_answer, id]);

        res.json("Option was updated");
    } catch (err) {
        console.error(err.message);

    }
});

//////////////////////////////////////////////////////// Create a todo/VOTES ////////////////////////////////////////////////////////

app.post("/votes", async(req, res) => {
    try {
        const { option_id, voter_id } = req.body;
        const newvote = await pool.query("INSERT INTO votesdb (option_id, voter_id) VALUES($1, $2) RETURNING *", 
        [option_id, voter_id]
        );
        res.json(newvoter.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})


// Get a todo/VOTES

app.get("/votes", async(req, res) => {
    try {
        const allvotes = await pool.query("SELECT * FROM votesdb");
        res.json(allvotes.rows);
    
    } catch (err) {
        console.error(err.message);
        
    }
});


// delete votes
app.delete("/votes/:id", async(req, res) => {
    try {

        const { id } = req.params;
        const deletevote = await pool.query("DELETE FROM votesdb WHERE vote_id = $1", [id]);
        res.json("vote was deleted!")
    } catch (err) {
        console.error(err.message);
        
    }
})



// Update a todo

app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]);

        res.json("Todo was updated");
    } catch (err) {
        console.error(err.message);
     
    }
});

// Delete a todo








app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
