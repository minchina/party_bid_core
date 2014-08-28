function render_sign_ups(activity_name){
    var activities = Activity.get_all_activity();
    return _.find(activities,function(activity){return activity.name==activity_name}).sign_ups;
}