/**
 * Created by Juniar_R on 3/14/2016.
 */

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
});