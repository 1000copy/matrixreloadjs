## MatrixReload.js

MatrixReloadjs monitors project files.If any file changed,It will reload and rerun all file.

## Usage

You have a file `entry.js',code here:

    console.log('hi,there')

Then you can run MatrixReload.js by `node autoload.js`,which will load entry.js.
Then you can edit `entry.js` and save like it:

    console.log('hi,here')

MatrixReload.js will reload it and print message on console:

    hi,here

config parameter in `./autoload.js'

## LICENSE

GPL 3.0