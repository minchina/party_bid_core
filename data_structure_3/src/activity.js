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

Activity.get_current_activity=function(){
    return localStorage.current_activity;
};