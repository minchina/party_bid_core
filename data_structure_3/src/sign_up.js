function Activity_sign_up(name,phone){
    this.name = name;
    this.phone = phone;
    this.activity_id = Activity.get_current_activity_id();


}

Activity_sign_up.prototype.save=function(){
    var sign_ups = Activity_sign_up.get_sign_ups();
    sign_ups.push(this);
    localStorage.sign_ups = JSON.stringify(sign_ups);

};
Activity_sign_up.get_sign_ups=function(){
    try {
        var signUps = JSON.parse(localStorage.sign_ups);
    }
    catch (err) {
        signUps = [];
    }
    return signUps;
};