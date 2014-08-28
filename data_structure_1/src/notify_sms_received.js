function notify_sms_received(sms){
    console.log(sms.messages[0]);
    var type = sms.messages[0].message.toLowerCase().substring(0,2);
    var name= sms.messages[0].message.toLowerCase().slice(2);
    var phone = sms.messages[0].phone;
    activity_sign_up.adduser(type,name,phone);
}