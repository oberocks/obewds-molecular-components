export function clear_user_value (elId, counterSuffix = false) {

    if (counterSuffix)
    {
        // grab the user's visable counter element and reset it to 0
        let counter_target = document.getElementById(elId + counterSuffix);
        counter_target.textContent = '0';
    }
    
    // grab the user's form element (input or textarea) and clear it
    let target = document.getElementById(elId);
    target.value = '';

    // focus the cleared form element
    target.focus();

}