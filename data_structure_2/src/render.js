function render_sign_ups(activity_name){
    var activities = Activity.get_all_activity();
    return _.find(activities,function(activity){return activity.name==activity_name}).sign_ups;
}

function transform_bids_to_view_model(activity_id){
    return bid.get_bids_by_activity_id(activity_id);
}

function transform_biddings_to_view_model(activity_id,bid_name){
    var bid_users = Activity.get_all_activity()[activity_id].biddings[bid_name];
    return bid.bid_success_user(bid_users);

}