function orderTea(teaType){
    function confirmOrder(){
        return `Order Confirmed For ${teaType}`;
    }
    return confirmOrder();
}

let order = orderTea("chai");
console.log(order);