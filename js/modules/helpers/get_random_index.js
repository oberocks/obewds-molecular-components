export function get_random_index (arrayLength) {
    
    // Helper function to get random index for an array length
    // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * Math.floor(arrayLength));

}