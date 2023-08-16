'use strict';
const strapi = require('strapi');
/**
 * A set of functions called "actions" for `sendEmail`
 */

const Filter = require('bad-words');


module.exports = {
  async create(ctx) {
    const gmail = ctx.request.body.data.gmail;
    const text = ctx.request.body.data.text;
      await strapi.plugins['email'].services.email.send({
        to: 'nicolas.soft94@gmail.com',
        from: gmail,
        subject: 'Comment posted that contains a bad words',
        text: text,
      });
    return "success";
  },
};
