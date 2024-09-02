// Json
// {
//     "sender": "John Smith",
//     "message": "Great session on React components! I found the examples very helpful.",
//     "rating": 5
// }


let feedbacks = []
let feedbackId = 1



function getAll() {
    return feedbacks
}

function addOne(sender, message, rating){
    if (!sender || !message || !rating) {
        return false
    }
    console.log(sender, message, rating)
    const newFeedback = {
        id: feedbackId++,
        sender,
        message,
        rating
    }

    feedbacks.push(newFeedback)
    return newFeedback
}

function findById(id) {
    const searchId = Number(id)
    const feedback = feedbacks.find(feedback => feedback.id === searchId)

    if(feedback){
        return feedback
    } else{
        return false
    }
}


function updateOneById(id, updateContent){
    const feedback = findById(id)
    if(feedback){
        if(feedback.sender){
            feedback.sender = updateContent.sender
        } 
        if(feedback.message){
            feedback.message = updateContent.message
        }
        if(feedback.rate){
            feedback.rate = updateContent.rate
        }

        return feedback
    }

    return false
}


function deleteOneById(id){
    const feedback = findById(id)

    if (feedback){
        const initLength = feedbacks.length
        feedbacks = feedbacks.filter(fb => fb.id !== Number(id))
        return feedbacks.length < initLength
    }
    return false
}



if (require.main === module) {
    console.log("getAll 1st called:", getAll());
    // Add feedback
    let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 5);
    console.log("after add 1 feedback",result);
    // Add another feedback
    result = addOne("Loc", "TEst", 5);
    console.log("add another feedback",result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { sender: 'Ke', message: "update", rating: 6 }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
  }


Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Feedback;