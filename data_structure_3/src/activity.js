function Activity(activity_name){
    this.name = activity_name;
    this.id = Activity.get_all_activity().length.toString();

}

Activity.prototype.create=function(){
    var activities = Activity.get_all_activity();
    activities.push(this);
    localStorage.activities = JSON.stringify(activities);
    localStorage.current_activity = this.id;
    localStorage.activity_id_generator = activities.length;
};

Activity.get_all_activity=function(){
    try{
        var activities = JSON.parse(localStorage.activities);
    }catch (err){
        activities = [];
    }
    return activities;
};

Activity.get_current_activity_id=function(){
    return localStorage.current_activity;
};


Activity.chose_load_to_bm=function(name,phone){
    if(localStorage.is_signing_up != 'true') {
        Activity_sign_up.get_sign_ups();
        console.log("dd");
        return;
    }
    if(Activity_sign_up.is_signing_up(phone)){
        return ;
    }
    var user = new Activity_sign_up(name,phone);
    user.save();

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
Activity.find_by_id = function (id) {
    var activity = Activity.get_all_activity()[id];
    return new Activity(activity.name, activity.sign_ups, activity.bids, activity.biddings);
};
