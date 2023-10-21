//I don't know if this is even necessary at all.
const {body, validationResult} = require('express-validator')
const reviewValidationRules = () =>{
    return[
        //author field cannot be empty
        body('author').not().isEmpty().withMessage('The author cannot be empty'),
        //remaining are a varying length.
        body('title').not().isEmpty().withMessage('The title cannot be empty'),

        body('storyR').isLength({min:4}).withMessage('Please expound upon your story rating.'),
        body('overallRating').not().isEmpty().withMessage('The overall rating cannot be empty'),

        body('comments').isLength({min:20}).withMessage('Say Less. Actually more, Min 20 characters')
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
        const extractedErrors =[]
        errors:errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }))
        return res.status(418).json({ errors:extractedErrors
        })
    }


module.exports = {
    reviewValidationRules,
    validate,
}