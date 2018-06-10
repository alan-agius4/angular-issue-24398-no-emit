
# Angular Issue 24398

When using `program.emit` in `ngtools api2` and having a clear typescript error, file are still emitted when using `noEmitOnError`. 

This is to illustrate issue https://github.com/angular/angular/issues/24398

To view the issue:
```
npm i
npm run build
```