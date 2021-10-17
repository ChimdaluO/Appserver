const express = require('express');


const app = express();
app.use(express.json({ limit: '400mb' }));
app.use(express.urlencoded({ limit: '400mb', extended: true }));


//default landing:
app.get('/status', (req, res) => {
    res.status(200).send({
      status: 'success',
      status_code: 200,
      message: 'Awesome, I was hit',
    });
});

//default landing:
app.all('*', (req, res) => {
    res.status(404).send({
      status: 'failed',
      status_code: 404,
      message: 'Resource not found',
    });
  });

  const PORT = 3000;
  app.on('error', (err) => {
      console.error(`Express server error ${err}`);
  });
  
  app.listen(PORT, () => {
      console.info(`magic happens here on port ${PORT}`);
  });
