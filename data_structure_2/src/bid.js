function create_new_bid(activity_id){
    var activities = Activity.get_all_activity();
    var all_bid = bid.get_bids_by_activity_id(activity_id);
    var all_bid_length = all_bid.length+1;
    activities[activity_id].bids.push('竞价' + all_bid_length);
    activities[activity_id].biddings['竞价' + all_bid_length] = [];
    localStorage.activities = JSON.stringify(activities);
}

function bid(){

}

bid.get_bids_by_activity_id=function(activity_id){
    return Activity.find_by_id(activity_id).sign_ups;

};
