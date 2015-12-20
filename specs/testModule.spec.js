//var proxyquire = require('proxyquireify')(require);

describe('The taskModule', function () {
    describe('add function', function () {
        it('calls taskRenderer.renderNew', function () {
            var tasks = require('../src/js/tasks');
            var taskRenderer = require('../src/js/renderers/taskRenderer');
            spyOn(taskRenderer, 'renderNew');

            tasks.add();

            expect(taskRenderer.renderNew).toHaveBeenCalled();
        });
    });
});