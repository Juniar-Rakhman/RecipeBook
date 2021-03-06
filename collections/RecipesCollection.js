/**
 * Created by a9jr5626 on 3/14/16.
 */

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function (userId, doc) {    //allow insert when signed in.
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Ingredient = new SimpleSchema({
    name: {
        type: String,
        label: "Nama"
    },
    amount: {
        type: String,
        label: "Amount"
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
    ingredients: {
        type: [Ingredient]
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
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

Meteor.methods({
    toggleInMenuItem: function (id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    },
    deleteRecipe: function (id) {
        Recipes.remove(id);
    }
});

Recipes.attachSchema(RecipeSchema);