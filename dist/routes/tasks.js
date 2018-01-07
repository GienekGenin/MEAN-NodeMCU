'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongojs = require('mongojs');

var _mongojs2 = _interopRequireDefault(_mongojs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


var db = (0, _mongojs2.default)('Gennadii:1q2w120195@ds239097.mlab.com:39097/sensors', ['tasks']);

/*
* Accept a get request
* Get all tasks
*/
router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get single task
router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({ _id: _mongojs2.default.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

//Save task by handling a post request
router.post('/task', function (req, res, next) {
    var task = req.body;
    if (!task.title || task.isDone + '') {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

//Delete task
router.delete('/task/:id', function (req, res, next) {
    db.tasks.remove({ _id: _mongojs2.default.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

//Update task
router.put('/task/:id', function (req, res, next) {
    var task = req.body;
    //Updated task
    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }

    if (task.title) {
        updTask.title = task.title;
    }

    if (!updTask) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.update({ _id: _mongojs2.default.ObjectId(req.params.id) }, updTask, {}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

module.exports = router;