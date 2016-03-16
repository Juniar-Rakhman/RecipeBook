/**
 * Created by a9jr5626 on 3/14/16.
 */

Meteor.publish('recipes', function () {
    return Recipes.find({author: this.userId});
});