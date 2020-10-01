function get_partial_cc_icon_classes (str)
{
    // sanitize string
    let value = str.replace(/[^0-9]/g, '');
    
    /*
    // https://stackoverflow.com/questions/5911236/identify-card-type-from-card-number

    // visa
    var re = new RegExp("^4");
    if (number.match(re) !== null)
        return "Visa";

    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
        return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (value.match(re) !== null)
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (value.match(re) !== null)
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (value.match(re) !== null)
        return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (value.match(re) !== null)
        return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (value.match(re) !== null)
        return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (value.match(re) !== null)
        return "Visa Electron";
    */

    // If Matches: Mastercard
    if (/^5[1-5]/.test(value))
    {
        return 'fab fa-cc-mastercard';
    }
    // If Matches: Visa
    else if (/^4/.test(value))
    {
        return 'fab fa-cc-visa';
    }
    // If Matches: AMEX
    else if (/^3[47]/.test(value))
    {
        return 'fab fa-cc-amex';
    }
    // If Matches: Discover
    else if (/^6/.test(value))
    {
        return 'fab fa-cc-discover';
    }
    // Else Return Default
    else if (/^$/.test(value))
    {
        return 'fas fa-credit-card';
    }
    else
    {
        return 'fas fa-credit-card';
    }
};

export { get_partial_cc_icon_classes };