const express = require('express');
const router = express.Router();
const Inspection = require('./inspection.model');

const create = (req, res) => {
  Inspection.create(req.body, (err, inspection) => {
    if (err) {
      return console.log(res, err);
    }
    return res.status(201).json(inspection);
  });
};

const getAll = (req, res) => {
  Inspection.find((err, inspections) => {
    if (err) {
      return console.log(res, err);
    }
    return res.status(200).json(inspections);
  });
};

const getSingle = (req, res) => {
  Inspection.findById(req.params.id, (err, inspection) => {
    if (err) {
      return console.log(res, err);
    }
    if (!inspection) {
      return res.status(404).send('Not Found');
    }
    return res.json(inspection);
  });
};

const update = (req, res) => {
  if (req.body._id) {
    delete req.body._id;
  }

  Inspection.findById(req.params.id, (err, inspection) => {
    if (err) {
      return console.log(res, err);
    }
    if (!inspection) {
      return res.status(404).send('Not Found');
    }

    const updated = Object.assign(inspection, req.body);
    updated.save(err => {
      if (err) {
        console.log(res, err);
      }
      return res.status(200).json(inspection);
    });
  });
};

// Deletes a thing from the DB.
const destroy = (req, res) => {
  Inspection.findById(req.params.id, (err, inspection) => {
    if (err) {
      return console.log(res, err);
    }

    if (!inspection) {
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
