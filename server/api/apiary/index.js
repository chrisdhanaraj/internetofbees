const express = require('express');
const router = express.Router;
const Apiary = require('./apiary.model');

const create = (req, res) => {
  Apiary.create(req.body, (err, apiary) => {
    if (err) {
      return console.log(res, err);
    }
    return res.status(201).json(apiary);
  });
};

const getAll = (req, res) => {
  Apiary.find((err, apiaries) => {
    if (err) {
      return console.log(res, err);
    }
    return res.status(200).json(apiaries);
  });
};

const getSingle = (req, res) => {
  Apiary.findById(req.params.id, (err, apiary) => {
    if (err) {
      return console.log(res, err);
    }
    if (!apiary) {
      return res.status(404).send('Not Found');
    }
    return res.json(apiary);
  });
};

const update = (req, res) => {
  if (req.body._id) {
    delete req.body._id;
  }

  Apiary.findById(req.params.id, (err, apiary) => {
    if (err) {
      return console.log(res, err);
    }
    if (!apiary) {
      return res.status(404).send('Not Found');
    }

    const updated = Object.assign(apiary, req.body);
    updated.save(err => {
      if (err) {
        console.log(res, err);
      }
      return res.status(200).json(apiary);
    });
  });
};

// Deletes a thing from the DB.
const destroy = (req, res) => {
  Apiary.findById(req.params.id, (err, apiary) => {
    if (err) {
      return console.log(res, err);
    }

    if (!apiary) {
      return res.status(404).send('Not Found');
    }

    show.remove(err => {
      if (err) {
        return console.log(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

router.get('/', getAll);
router.get('/:id', getSingle);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
