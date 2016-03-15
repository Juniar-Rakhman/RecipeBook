/**
 * Created by Juniar_R on 3/14/2016.
 */

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});