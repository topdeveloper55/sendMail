module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/sendEmail',
     handler: 'send-email.create',
     config: {
       policies: [],
     },
    },
  ],
};
