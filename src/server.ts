import app from './app';

// start the Express server

const server = app.listen(app.get('port'), () => {
  console.log(
    `server started at http://localhost:%d in %s mode`,
    app.get('port'),
    app.get('env')
  );

  console.log('Press Ctrl+C to stop\n');
});
