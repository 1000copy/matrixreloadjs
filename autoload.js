var autoload = require('./lib/autoload')
var f = {
    exclude:['node_modules','.git','.gitignore','LICENSE','autoload.js'],
    excludeStartsWith:['.git','.gitignore'],
    excludeEndsWith:['.md','.json'],
}
var path = require('path')
autoload.run( {
    entryfile:path.resolve('./entry.js'),
    clearscreen:true,
    monitorroot:path.resolve('./'),
    fexclude:f,
})