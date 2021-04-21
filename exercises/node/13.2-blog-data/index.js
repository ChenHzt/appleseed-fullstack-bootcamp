var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var dbo = db.db("blog");



    const func = async () => {

        const users = [{ name: "John Doe", email: "johndoe@email.com" }, { name: "Jane Doe", email: "janedoe@email.com" }]
        dbo.collection("users").insertMany(users, () => {
            if (err) throw err;
            console.log("documents inserted");
            db.close();
        })

        let user = await dbo.collection("users").findOne({ email: "johndoe@email.com" });
        console.log(user);
        const posts = [{ title: "title 1", content: "bla bla 1", createdBy: user._id, comments: [] }, { title: "title 2", content: "bla bla 2", createdBy: user._id, comments: [] }]
        dbo.collection("posts").insertMany(posts, () => {
            if (err) throw err;
            console.log("documents inserted");
            db.close();
        });
        const comment = dbo.collection("posts").update          ({ createdBy: user._id }, { $push: { "comments": { "content": "this is a comment" } } });

    }

    func();


});