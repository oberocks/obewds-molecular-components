function update_character_count (inputId, outputId, maxlimit)
{
    // get the input node and extract the value
    let input = document.getElementById(inputId);
    let value = input.value;

    // parse the maxlimit as a number for conditional logic
    let max = Number(maxlimit);
    
    // check the input node's length against the max char limit
    if (value.length > max)
    {
        // if too long then trim the input value
        input.value = value.substring(0, maxlimit);
    }
    else
    {
        // otherwise, update the displayed value of the character count for the user
        document.getElementById(outputId).textContent = Number(value.length).toLocaleString();
    }
}

export { update_character_count };