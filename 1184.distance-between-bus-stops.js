/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
 var distanceBetweenBusStops = function(distance, start, destination) {
    let dist=0
    
    while(start != destination) {
        dist += distance[start]
        start++
        if(start > distance.length-1) start=0
    }
    let total = distance.reduce((a, b)=> a+b)
    if(dist > total-dist) dist=total-dist
    return dist
    
};


const distance = [1,2,3,4], start = 0, destination = 1
distanceBetweenBusStops(distance, start, destination)





