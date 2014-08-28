function notify_sms_received(sms){
    var type = sms.messages[0].message.toLowerCase().substring(0,2);
    var name= sms.messages[0].message.toLowerCase().slice(2);
    var phone = sms.messages[0].phone;
    if(type=="bm"){
        Activity.chose_load_to_bm(name,phone);
    }
    if(type=="jj"){
        Activity.chose_load_to_jj(name,phone);
    }


}