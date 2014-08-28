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
Activity.prototype.active=function(){
    localStorage.current_activity = this.name;

};
Activity.get_all_activity =function(){
  return JSON.parse(localStorage.activities) || [];
};

Activity.get_current_activity=function(){
    return localStorage.current_activity;
};

