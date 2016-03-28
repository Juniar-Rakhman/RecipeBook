/**
 * Created by a9jr5626 on 3/15/16.
 */

Template.Recipes.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes');
    });
});

Template.Recipes.helpers({
    recipes: ()=> {
        return Recipes.find({});
    }
});