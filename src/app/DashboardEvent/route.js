const auth = require('@middleware/auth');
const uploadFile = require('@middleware/upload');
const dashboardEventController = require('./controllers');

module.exports = (app) => {
  app.post('/event/', [auth, uploadFile], dashboardEventController.createEventPost);
  app.patch('/event/:id/', [auth, uploadFile], dashboardEventController.editEventById);
  app.delete('/event/:id/', auth, dashboardEventController.deleteEventById);
  app.get('/event/dashboard/', auth, dashboardEventController.getAllEvent);
  app.get('/event/dashboard/:id/', auth, dashboardEventController.getEventById);
  app.get('/event/', dashboardEventController.getAllEvent);
  app.get('/event/:id/', dashboardEventController.getEventById);
};
