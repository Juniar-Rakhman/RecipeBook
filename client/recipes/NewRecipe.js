Template.NewRecipe.helpers({
    //add you helpers here
});

Template.NewRecipe.events({
    'click .fa-close': function() {
        Session.set('newRecipe', false);
    }
});

Template.NewRecipe.onCreated(function () {
    //add your statement here
});

Template.NewRecipe.onRendered(function () {
    //add your statement here
});

Template.NewRecipe.onDestroyed(function () {
    //add your statement here
});

