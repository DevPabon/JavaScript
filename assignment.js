// Kilometer To Meter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000
    return meter
}
var kilometerInput = kilometerToMeter(8)
console.log(kilometerInput)




// Budget Calculator

function budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch * 50
    var mobilePrice = mobile * 100
    var laptopPrice = laptop * 500
    var totalPrice = watchPrice + mobilePrice +laptopPrice
    return totalPrice
}

var result = budgetCalculator(5, 3, 2)
console.log(result)




// Hotel Cost
function hotelCost(day){
    var cost = 0
    if(day <= 10){
        cost = day * 100
    } else if(day <= 20){
        var firstPart = 10 * 100
        var remaining = day - 10
        var secondPart = remaining * 80
        cost = firstPart + secondPart
    } else{
        var firstPart = 10 * 100
        var secondPart = 10 * 80
        var remaining = day - 20
        var thirdPart = remaining * 50
        cost = firstPart + secondPart + thirdPart
    }
    return cost
}
var result = hotelCost(24)
console.log(result)



// Mega Friend
function megaFriend(allFriendName){
    if(allFriendName == undefined || !Array.isArray(allFriendName)){
        var result = "Invalid Value! Please Submit Valid Value"
    } else{
        var result = allFriendName[0]
        for(var i = 0; i < allFriendName.length; i++){
            var Name = allFriendName[i]
            if(Name.length > result.length){
                var result = Name
            }
        }
    }
    return result
}
