function create_new_bid(activity_name){
    var activities = Activity.get_all_activity();
    var all_bid = bid.get_bids_by_activity_name(activity_name);
    var all_bid_length = all_bid.length+1;
    var bid_array ={name:"竞价"+all_bid_length,biddings:[]};
    _.find(activities,function(activity){return activity.name==activity_name}).bids.push(bid_array);
    localStorage.activities = JSON.stringify(activities);
}

function bid(price,phone){
    this.phone = bid.find_name_by_phone(phone);
    this.price = price;
    this.phone = phone;
}

bid.get_bids_by_activity_name=function(activity_name){
    var activities = Activity.get_all_activity();
    return _.find(activities,function(activity){return activity.name==activity_name}).bids;
};

bid.add_bid_user=function(price, phone){
    var activities = Activity.get_all_activity();
    var bid_user = {name: this.find_name_by_phone(phone), phone: phone, price: price};
    var current_activity = Activity.get_current_activity();
    var current_bid = bid.get_current_bid();
    _(_(activities).findWhere({name:current_activity}).bids).findWhere({name:current_bid}).biddings.push(bid_user);
    localStorage.activities = JSON.stringify(activities);
};
bid.get_current_bid=function(){
    return localStorage.current_bid;
};

bid.find_name_by_phone = function (phone) {
    var activity = Activity.find_by_name(localStorage.current_activity);
    return (_(activity.sign_ups).findWhere({phone: phone})).name;
};
