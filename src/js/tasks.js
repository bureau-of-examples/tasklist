'use strict';

var $ = require('jquery');
var taskData = require('./data/taskData');
var taskRenderer = require('./renderers/taskRenderer');

exports.add = function(){
    taskRenderer.renderNew();
};

exports.remove = function(clickEvent) {
    var taskElement = clickEvent.target;
    $(taskElement).closest('.task').remove();
};

exports.clear = function(){
    taskData.clear();
    exports.render();
};

exports.save = function() {
    var tasks = [];
    $('#task-list .task').each(function(index, task){
        var $task = $(task);
        var data = {
            complete: $task.find('.complete').prop('checked'),
            description: $task.find('.description').val()
        };
        console.log('Saving task ' + index + ':');
        console.log(data);
        tasks.push(data);
    });
    taskData.save(tasks);
    console.log('Saved successfully.');
};

exports.cancel = function(){
    exports.render();
};

exports.render = function(){
    taskRenderer.renderTasks(taskData.load());
};

