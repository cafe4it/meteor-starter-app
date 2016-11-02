import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// import layouts & pages
import '../../ui/layouts/default_layout';
import '../../ui/pages/home';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('default_layout', { main: 'Home' });
  },
});
