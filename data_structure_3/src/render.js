function render_sign_ups(activity_id){
    var activities = Activity_sign_up.get_sign_ups();
    return _(activities).where({activity_id: activity_id});
}

function render_bids(activity_id){
    var bids = Bid.get_all_bids();
     return _(bids).where({activity_id:activity_id});
}

function render_biddings(activity_id,bid_name){
    var bids = Bid.get_all_bids();
    var biddings = _(bids).where({activity_id:activity_id,name:bid_name})[0].biddings;
    return Bid.bid_success_user(activity_id,biddings);
}