/**
 * Created by Juniar_R on 3/14/2016.
 */

if (Meteor.isClient) {
    Accounts.onLogin(()=> {
        FlowRouter.go('recipe-book');
    });

    Accounts.onLogout(()=> {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([(context, redirect)=> {
    if (!Meteor.userId()) {  //if user does not exist go home
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
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
        BlazeLayout.render('MainLayout', {main: 'RecipeDetails'});
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

FlowRouter.route('/shopping-list', {
    name: 'menu',
    action(){
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
    }
});