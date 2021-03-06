'use strict';

module.exports = Object.freeze({
    AUTHORIZATION: {
        PUBLIC: 1,
        CLIENT: 2,
        PRIVATE: 3,
        LOGGED_IN: 4
    },
    PREFIX: {
        USERS: 'user',
        INGREDIENTS: 'i',
        INGREDIENT_TAGS: 'it',
        COMPOSING_INGREDIENTS: 'ci',
        CHILD_INGREDIENTS: 'chi',
        TAGS: 't',
        UNITS: 'u',
        RECIPES: 'r',
        SEASONINGS: 's',
        COMPOSING_SEASONINGS: 'cs',
        CHILD_SEASONINGS: 'chs',
        STEPS: 'st',
        STEP_TAGS: 'stt',
        RECIPE_INGREDIENTS: 'ri',
        RECIPE_SEASONINGS: 'rs',
        RECIPE_TAGS: 'rt',
        R_TAGS: 'rtag',
        S_TAGS: 'stag',
        I_TAGS: 'itag',
        DELIVERY_PREFERENCES: 'dp',
        MEAL_PLANS: 'mp',
        MEAL_PLAN_RECIPE: 'mpr',
        MEAL_PLAN_INGREDIENT: 'mpi',
        MEAL_PLAN_INGREDIENT_RELATION: 'mpir'
    },
    MAP_IDS: {
        RECIPES: 'recipesMap',
        RECIPE_TAGS: 'recipeTagsMap',
        INGREDIENTS: 'ingredientMap',
        SEASONINGS: 'seasoningsMap',
        UNITS: 'unitsMap',
        USERS: 'userMap',
        TAG: 'tagMap',
        CHILD_INGREDIENT: 'childIngredientMap',
        CHILD_SEASONING: 'childSeasoningMap',
        STEPS: 'stepsMap',
        STEP_TAGS: 'stepTagsMap',
        INGREDIENT_TAGS: 'ingredientTagsMap',
        DELIVERY_PREFERENCES: 'deliveryPreferencesMap',
        MEAL_PLANS: 'mealPlanMap',
        MEAL_PLAN_INGREDIENT: 'mealPlanIngredientMap'
    },
    MEAL_PLAN_EMAIL_TYPES: {
        DELIVERY_EMAIL: 'DELIVERY_EMAIL',
        FIRST_REMINDER: 'FIRST_REMINDER',
        SECOND_REMINDER: 'SECOND_REMINDER'
    }
});