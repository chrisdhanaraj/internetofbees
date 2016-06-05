const express = require('express');
const router = express.Router();
const Hive = require('./hive.model');

const create = (req, res) => {
  Hive.create(req.body, (err, hive) => {
    if (err) {
      return console.log(res, err);
    }
    return res.status(201).json(hive);
  });
};

const getAll = (req, res) => {
  const apiaryId = req.query.apiaryId;

  Hive.find({
    apiary: apiaryId,
  }, (err, hives) => {
    if (err) {
      return console.log(res, err);
    }
    return res.status(200).json(hives);
  });
};

const getSingle = (req, res) => {
  Hive.findById(req.params.id, (err, hive) => {
    if (err) {
      return console.log(res, err);
    }
    if (!hive) {
      return res.status(404).send('Not Found');
    }
    return res.json(hive);
  });
};

const update = (req, res) => {
  if (req.body._id) {
    delete req.body._id;
  }

  Hive.findById(req.params.id, (err, hive) => {
    if (err) {
      return console.log(res, err);
    }
    if (!hive) {
      return res.status(404).send('Not Found');
    }

    const updated = Object.assign(hive, req.body);
    updated.save(err => {
      if (err) {
        console.log(res, err);
      }
      return res.status(200).json(hive);
    });
  });
};

// Deletes a thing from the DB.
const destroy = (req, res) => {
  Hive.findById(req.params.id, (err, hive) => {
    if (err) {
      return console.log(res, err);
    }

    if (!hive) {
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
