/**
 * Created by a9jr5626 on 3/14/16.
 */

Recipes = new Meteor.collection('recipes');

RecipeSchema = new SimpleSchema({
    name:{
        type: String,
        label: "Name"
    },
    desc:{
        type: String,
        label: "Desciption"
    },
    author:{
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId;
        }
    },
    createAt:{
        type: String,
        label: "Created At",
        autoValue: function(){
            return new Date()
        }
    }
});

Recipes.attachSchema(RecipeSchema);