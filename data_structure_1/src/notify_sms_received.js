function notify_sms_received(sms){
    if(localStorage.is_signing_up != 'true') {
        return;
    }
    var type = sms.messages[0].message.toLowerCase().substring(0,2);
    var name= sms.messages[0].message.toLowerCase().slice(2);
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_name(localStorage.current_activity);
    if(activity.is_signing_up(phone)){
        return ;
    }
    activity_sign_up.adduser(type,name,phone);
}