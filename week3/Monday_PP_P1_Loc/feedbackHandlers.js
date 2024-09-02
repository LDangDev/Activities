const Feedback = require("./feedbackLib");


// GET method
const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAll()
    res.json(feedbacks);
};

// POST method
const createFeedback = (req, res) => {
    const { sender, message, rating } = req.body
    console.log(sender, message, rating)
    const newFeedback = Feedback.addOne(sender, message, rating)
    console.log(newFeedback)

    if(newFeedback){
        res.json(newFeedback)
    }else {
        res.status(500).json({ message: "Failed to create new feedback" });
    }
    
};

// GET by Id

const getFeedbackById = (req, res) => {
    const feedbackId = req.params.feedbackId
    const feedback = Feedback.findById(feedbackId)

    if(feedback){
        res.json(feedback)
    } else {
        res.status(404).json({ message: "Feedback not found" });
    }
};

// PUT method

const updateFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId
    const { sender, message, rate } = req.body
    const updateFeedback = Feedback.updateOneById(feedbackId, { sender, message, rate })
    if (updateFeedback){
        res.json(updateFeedback)
    } else{
        res.status(404).json({ message: "Feedback not found" });

    }
};

// DELETE method

const deleteFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId
    const isDeleted = Feedback.deleteOneById(feedbackId)
    console.log(isDeleted)
    if(isDeleted){
        res.json({ message: "Feedback deleted successfully" })
    } else{
        res.status(404).json({ message: "Feedback not found" });

    }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};