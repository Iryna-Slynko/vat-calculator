const router = require('express').Router();
router.get('/', async (req, res) => {
    let price;
    let vat;


    // replace parsefloat with a function that raises error
    price = req.query.price * 1;
    if (Number.isNaN(price)) {
        res.status(400);
        res.send("Price is not a number");
    }
    vat = req.query.vat*1;
    if (Number.isNaN(vat)) {
        res.status(400);
        res.send("VAT is not a number");
    }
    if ((price < 0) || (vat < 0)) {
        res.status(400);
        res.send("Incorrect inputs");
    }

    res.json({ "price_with_vat": price * (100 + vat) / 100 });
});

module.exports = router;