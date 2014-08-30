function create_new_bid(bid_id){
    var allbid = Bid.get_all_bids();
    var bids_length = allbid.length;
    var new_bid ={name: '竞价' + (bids_length + 1), activity_id: bid_id, biddings: []};
    allbid.push(new_bid);
    localStorage.bids = JSON.stringify(allbid);
}

function Bid(phone,price){
    this.name = Bid.get_name_by_phone(phone);
    this.phone = phone;
    this.price = price;

}

Bid.prototype.save=function(){
    var activity_id = localStorage.current_activity;
    var bids = JSON.parse(localStorage.bids) || [];
    _(bids).findWhere({name: localStorage.current_bid, activity_id: activity_id}).biddings.push(this);
    localStorage.bids = JSON.stringify(bids);
};

Bid.is_bidding=function(phone){
    var current_activity_id = localStorage.current_activity;
    var current_bid = localStorage.current_bid;
    var bids = JSON.parse(localStorage.bids) || [];
    var biddings = _(bids).findWhere({name: current_bid, activity_id: current_activity_id}).biddings;
    return _(biddings).find(function(bid){return bid.phone==phone});





};
Bid.get_all_bids=function(){

    try{
        var bids = JSON.parse(localStorage.bids);
    }catch (err){
        bids = [];
        localStorage.bids = JSON.stringify(bids);
    }
    return bids;
};
Bid.get_name_by_phone=function(phone){
    var activity_id = JSON.parse(localStorage.current_activity);
   var bid_users= Activity_sign_up.get_sign_ups();
    return _(bid_users).find(function(user){return user.phone == phone && user.activity_id==activity_id}).name;
};