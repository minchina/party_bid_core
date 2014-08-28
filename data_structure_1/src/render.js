function render_sign_ups(activity_name){
    var activities = Activity.get_all_activity();
    return _.find(activities,function(activity){return activity.name==activity_name}).sign_ups;
}

function transform_bids_to_view_model(activity_name){
    return bid.get_bids_by_activity_name(activity_name);
}

function transform_biddings_to_view_model(activity_name,bid_name){
    console.log(activity_name);
    
}