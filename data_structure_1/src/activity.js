function Activity(activity_name,sign_ups,bids){
    this.name = activity_name;
    this.sign_ups = sign_ups || [];
    this.bids = bids || [];
}
Activity.prototype.create=function(){
    var allactivity = Activity.get_all_activity();
    allactivity.push(this);
    localStorage.activities = JSON.stringify(allactivity);
};

Activity.prototype.is_signing_up = function (phone) {
    return !!(_(this.sign_ups).findWhere({phone: phone}));
};

Activity.prototype.is_bidding = function (phone) {
    return !!(_(this.bids[this.bids.length - 1].biddings).findWhere({phone: phone}));
};

Activity.prototype.active=function(){
    localStorage.current_activity = this.name;

};

Activity.get_all_activity =function(){
  return JSON.parse(localStorage.activities) || [];
};

Activity.get_current_activity=function(){
    return localStorage.current_activity;
};

Activity.find_by_name = function (activity_name) {
    var activity = _(Activity.get_all_activity()).findWhere({name: activity_name});
    return new Activity(activity.name, activity.sign_ups, activity.bids);
};

Activity.chose_load_to_bm=function(name,phone){
        if(localStorage.is_signing_up != 'true') {
            return;
        }
        var activity = Activity.find_by_name(localStorage.current_activity);
        if(activity.is_signing_up(phone)){
            return ;
        }
        activity_sign_up.adduser(name,phone);
};

Activity.chose_load_to_jj=function(price,phone){

    if(localStorage.is_bidding != 'true') {
        return;
    }
    var activity = Activity.find_by_name(localStorage.current_activity);
    if(!activity.is_signing_up(phone)) {
        return;
    }
    if(activity.is_bidding(phone)) {
        return;
    }
    bid.add_bid_user(price, phone);
};






