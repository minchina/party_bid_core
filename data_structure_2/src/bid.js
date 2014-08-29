function create_new_bid(activity_id){
    var activities = Activity.get_all_activity();
    var all_bid = bid.get_bids_by_activity_id(activity_id);
    var all_bid_length = all_bid.length+1;
    activities[activity_id].bids.push('竞价' + all_bid_length);
    activities[activity_id].biddings['竞价' + all_bid_length] = [];
    localStorage.activities = JSON.stringify(activities);
}

function bid(price,phone){
    this.name = bid.find_name_by_phone(phone);
    this.price = price;
    this.phone = phone;
}

bid.get_bids_by_activity_id=function(activity_id){
    var activities = Activity.get_all_activity();
    return activities[activity_id].bids;
};

bid.get_biddings_by_activity_id=function(activity_id){
    var activities = Activity.get_all_activity();
    return activities[activity_id].biddings;
};

bid.add_bid_user=function(price, phone){
    var activities = Activity.get_all_activity();
    var bid_user = {name: this.find_name_by_phone(phone), phone: phone, price: price};
    var current_bid = localStorage.current_bid;
    activities[localStorage.current_activity_id].biddings[current_bid].push(bid_user);
    localStorage.activities = JSON.stringify(activities);
};
bid.get_current_bid=function(){
    return localStorage.current_bid;
};

bid.find_name_by_phone = function (phone) {
    var current_signups= Activity.get_signup_by_id(localStorage.current_activity_id);
    return _(current_signups).find(function(user){return user.phone=phone}).name;
};

bid.bid_success_user = function (argument){
    var count_price = _.groupBy(argument,function(obj){
        return obj.price;
    });
    return _.find(count_price,function(price){
        return price.length==1
    });
};

bid.get_signup_by_activity_id=function(activity_id){
    return Activity.find_by_id(activity_id).sign_ups;

};

bid.bid_success_user = function (argument){
    var count_price = _.groupBy(argument,function(obj){
        return obj.price;
    });
    var success_user =  _.find(count_price,function(price){
        return price.length==1
    });
    var users = Activity.get_signup_by_id(localStorage.current_activity);
    success_user[0].name = _(users).find(function(user){return user.phone==success_user[0].phone}).name;
    return success_user;
};

