// ......task-1......
var membership="standered";
var access;
if(membership==="basic"){
    access="free books"
}
else if(membership==="premium"){
    access="Access to all books, including exclusive content"
}
else if(membership==="standered"){
    access="Access to free books and discounted paid books"
}
else{
    access="invalid"
}
console.log(access);
// ......task-2......
let memberships="vip";
let purchaseamount=500;
let regularperc5=0.05;
let regularperc10=0.10;
let vippercentage10=0.10;
let vippercentage15=0.15;
let vippercentage20=0.20;
let baseprice=0;
let discount=0;
switch(memberships){
    case "regular":
        switch(true){
            case (purchaseamount<100):
                discount=0;
                baseprice=0;
                break;
            case (purchaseamount>=100 && purchaseamount<=500):
                discount=regularperc5;
                baseprice=10;
                break;
            case(purchaseamount>500):
                discount=regularperc10;
                baseprice=10;
                break;
            default:
                console.log("Invalid input")
                baseprice=0;
                break;
            }
            break;
    case "vip":
        switch(true){
            case (purchaseamount<100):
                discount=vippercentage10;
                baseprice=10;
                break;
            case (purchaseamount>=100 && purchaseamount<=500):
                discount=vippercentage15;
                baseprice=10;
                break;
            case(purchaseamount>500):
                discount=vippercentage20;
                baseprice=10;
                break;
            }break;
            default:
                console.log("Invalid input")
                baseprice=0;
                break;
            }
            let finalprice=baseprice>0?purchaseamount*(1-discount):0;
            if(baseprice>0){
                console.log(finalprice);
            }
            else{
                console.log("invalid")
            }
// ..........task-3...........
let gpa=3.7;
let extraactivities=0;
let communityservicehours=0;
switch(true){
    case(gpa >=3.5):
        console.log("Merit-Based Scholarship")
        break;
}
switch(true){
    case(extraactivities >=2 && gpa>=3.0):
    console.log("Leadership Scholarship");
    break;
}
switch(true){
    case(communityservicehours >=100 && gpa>=2.5):
    console.log("Community Service Scholarship");
    break;
    default:
        break;
}
// .......task-5......
var week = prompt("please enter day:");
var age=prompt("enter your age");
if(week=="monday"||week=="tuesday"||week=="wednesday"||week=="thursday"||week=="friday"){
    var price=12;
    if(age>=65||age<=12){
        price-=price*0.5;
    }
    console.log(price)
}
if(week=="saturday"||week=="sunday"){
    var price=15;
    if(age>=65||age<=12){
        price-=price*0.3
    }
    console.log(price)
}




