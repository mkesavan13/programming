/*
  https://www.hackerrank.com/challenges/minimum-swaps-2/problem
*/
function minimumSwaps(arr) {
    var swaps = 0, skip_indices = [], get_positions = {};
    for(var i = 0; i < arr.length; i++){
        get_positions[arr[i]] = i;
    }
    for(var i = 0; i < arr.length; i++){
        if(!skip_indices.includes(i)){
            var toSwapWith = get_positions[i + 1];
            if( i != toSwapWith){
                var temp = arr[toSwapWith];
                arr[toSwapWith] = arr[i];
                arr[i] = temp;
                swaps++;

                get_positions[i + 1] = i;
                get_positions[arr[toSwapWith]] = toSwapWith;
                if(arr[toSwapWith] == (toSwapWith + 1)){
                    skip_indices.push(toSwapWith);
                }
            }
        }
    }
    return swaps;
}
