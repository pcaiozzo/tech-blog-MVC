const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment } = require("../../models/");


router.post("/", withAuth, async (req, res) => {
  try {
    console.log("request body: ", req.body);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;