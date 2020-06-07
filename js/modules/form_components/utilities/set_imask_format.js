function set_imask_format (str)
{
    // 
    let o = {mask: ''};

    if (str === 'phone' || str === 'phone_us' || str === 'phone_usa')
    {
        o.mask = '(000) 000-0000';
    }
    else if (str === 'phone_us_international')
    {
        o.mask = '+{1} (000) 000-0000';
    }
    else if (str === 'phone_rus')
    {
        o.mask = '+{7} (000) 000-00-00';
    }
    else if (str === 'date' || str === 'date_us')
    {
        o.mask = '00/00/0000';
    }
    else if (str === 'time')
    {
        o.mask = '00:00';
    }
    else if (str === 'credit' || str === 'credit_card')
    {
        o.mask = '0000 0000 0000 0000';
    }
    else if (str === 'two_digits')
    {
        o.mask = '00';
    }
    else if (str === 'four_digits')
    {
        o.mask = '0000';
    }
    else
    {
        o.mask = '0';
    }

    return o;
}

export { set_imask_format };