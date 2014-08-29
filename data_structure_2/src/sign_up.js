function activity_sign_up (){

}

activity_sign_up.adduser=function(name,phone){
    var update_user = {name:name,phone:phone};
    activity_sign_up.get_current_user(update_user);
};

activity_sign_up.get_current_user=function(user){
    var current_id= Activity.get_current_activity_id();
    var activities = Activity.get_all_activity();
    _(activities).findWhere({id:current_id}).sign_ups.push(user);
    activity_sign_up.save_new_user(activities);

};
activity_sign_up.save_new_user=function(activities){
    localStorage.activities = JSON.stringify(activities);
};
