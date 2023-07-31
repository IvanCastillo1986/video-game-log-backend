const checkTitle = (req, res, next) => {

    if (!req.body.title) {
        res.status(400).json({ error: "Title field is blank" });
    } else {
        next();
    };
};

const checkNumber = (req, res, next) => {
    const year = req.body.year_released;
    
    if (Number.isNaN(req.body.year) || Number(year) < 1956 || Number(year) > 2023) {
        console.log('Must enter a number for year')
        res.status(400).json({error: 'Year field must be a number between 1956 and 2023'})
    } else {
        next();
    }
}

module.exports = { checkTitle, checkNumber };