function create_new_bid(activity_name){
    var activities = Activity.get_all_activity();
    var all_bid = bid.get_bids_by_activity_name(activity_name);
    var all_bid_length = all_bid.length+1;
    var bid_array ={name:"竞价"+all_bid_length,biddings:[]};
    _.find(activities,function(activity){return activity.name==activity_name}).bids.push(bid_array);
    localStorage.activities = JSON.stringify(activities);
}

function bid(){

}

bid.get_bids_by_activity_name=function(activity_name){
    var activities = Activity.get_all_activity();
    return _.find(activities,function(activity){return activity.name==activity_name}).bids;
};