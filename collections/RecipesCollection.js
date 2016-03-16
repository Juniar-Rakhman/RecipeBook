/**
 * Created by a9jr5626 on 3/14/16.
 */

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function (userId, doc) {    //allow insert when signed in.
        return !!userId;
    }
});

Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
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

Recipes.attachSchema(RecipeSchema);