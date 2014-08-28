function activity_sign_up (){
    if(localStorage.is_signing_up != "true"){
        return 0;
    }

}

activity_sign_up.adduser=function(type,name,phone){
    var update_user = {name:name,phone:phone};
    activity_sign_up.get_current_user(update_user);
};

activity_sign_up.get_current_user=function(user){
    var result = Activity.get_current_activity();
    var activities = Activity.get_all_activity();
    _.find(activities,function(activity){return activity.name==result}).sign_ups.push(user);
    activity_sign_up.save_new_user(activities);
};
activity_sign_up.save_new_user=function(activities){
    localStorage.activities = JSON.stringify(activities);
};



