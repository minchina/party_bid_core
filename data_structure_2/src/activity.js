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