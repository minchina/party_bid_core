function create_new_bid(bid_name){
    var allbid = Bid.get_all_bids();
    var new_bid ={name:"竞价"+bid_name,biddings:[]};
    allbid.push(new_bid);
    localStorage.bids = JSON.stringify(allbid);
}

function Bid(){

}
Bid.get_all_bids=function(){

    try{
        var bids = JSON.parse(localStorage.bids);
    }catch (err){
        bids = [];
        localStorage.bids = JSON.stringify(bids);
    }
    return bids;
};