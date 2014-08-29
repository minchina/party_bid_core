function Activity(name, sign_ups, bids, biddings){
    this.name = name;
    this.sign_ups = sign_ups || [];
    this.bids = bids || [];
    this.biddings = biddings || {};

}

Activity.prototype.create=function(){
    var activities = Activity.get_all_activity();
    var ids= Activity.get_ids();
    var length = (ids.length);
    activities[length] = this;
    ids.push(length.toString());
    localStorage.activities = JSON.stringify(activities);
    localStorage.activity_ids = JSON.stringify(ids);
    localStorage.current_activity = length;
    localStorage.current_activity_id = length;
    localStorage.activity_id_generator = length + 1;

};

Activity.get_all_activity=function(){
    return JSON.parse(localStorage.activities);
};

Activity.get_current_activity_id=function(){
    return localStorage.current_activity_id;
};
Activity.get_ids=function(){
    return JSON.parse(localStorage.activity_ids);
};


Activity.find_by_id = function (id) {
    var activity = Activity.get_all_activity()[id];
    return new Activity(activity.name, activity.sign_ups, activity.bids, activity.biddings);
};

Activity.prototype.is_signing_up = function (phone) {
    return !!(_(this.sign_ups).find(function (item) {
        return item.phone == phone;
    }));
};

Activity.prototype.is_bidding = function (phone) {
    return !!(_(this.biddings[localStorage.current_bid]).findWhere({phone: phone}));
};

Activity.get_signup_by_id=function(activity_id){
    var activites = Activity.get_all_activity();
    return activites[activity_id].sign_ups;

};
Activity.chose_load_to_bm=function(name,phone){
    if(localStorage.is_signing_up != 'true') {
        return;
    }
    var activity = Activity.find_by_id(localStorage.current_activity_id);
    if(activity.is_signing_up(phone)){
        return ;
    }
    activity_sign_up.adduser(name,phone);
};

Activity.chose_load_to_jj=function(price,phone){

    if(localStorage.is_bidding != 'true') {
        return;
    }
    var activity = Activity.find_by_id(localStorage.current_activity_id);
    if(!activity.is_signing_up(phone)) {
        return;
    }
    if(activity.is_bidding(phone)) {
        return;
    }
    bid.add_bid_user(price, phone);
};


