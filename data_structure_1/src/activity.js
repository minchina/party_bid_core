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



