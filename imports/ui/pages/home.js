import { Template } from 'meteor/templating';

import './home.html';

Template.Home.helpers({
  now() {
    console.log('1');
  },
});
