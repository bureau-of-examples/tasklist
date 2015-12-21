
### Get it running
Browserify can be installed globally using <code>npm install -g browserify</code>.

Then you can create a script bundle using <code>browserify ./src/js/app.js -o src/js/app.bundle.js
</code>. All the depended modules will be put in the bundle in order.

To allow the browser to know the pre-bundled source file line number when an error occurs, a source map must be generated. 
We can embed one in the bundle file by using the <code>--debug</code> flag when creating the bundle.

<em>watchify</em> can be used to automatically run browserify when the module (or its dependencies) changes:
<code>watchify ./src/js/app.js -o src/js/app.bundle.js --debug -v</code>

To enable live reload, use <code>grunt serve</code> and access localhost:9001.

### Notes
Custom transform is not added.



