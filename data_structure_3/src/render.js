function render_sign_ups(activity_id){
    var activities = Activity_sign_up.get_sign_ups();
    return _(activities).where({activity_id: activity_id});
}