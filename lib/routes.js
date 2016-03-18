/**
 * Created by Juniar_R on 3/14/2016.
 */

FlowRouter.route('/', {
    name: 'home',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});