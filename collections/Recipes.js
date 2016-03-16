/**
 * Created by a9jr5626 on 3/14/16.
 */

Recipes = new Meteor.Collection('recipes');

Recipes.allow({
    insert: function (userId, doc) {    //allow insert when signed in.
        return !!userId;
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Desciption"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Recipes.attachSchema(RecipeSchema);