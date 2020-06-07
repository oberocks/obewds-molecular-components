function applyAttributes (node, obj)
{
    if (Object.keys(obj).length > 0)
    {
        for (const key in obj)
        {
            node.setAttribute(key, obj[key]);
        }
    }
}

function insertText (node, str)
{
    if (typeof str === 'string' && str.length > 0)
    {
        let txt = document.createTextNode(str);
        node.appendChild(txt);
    }
    else if (str.isArray() && str.length > 0)
    {
        for (var i = 0; i < str.length; i++)
        {
            if (typeof str[i] === 'string' && str[i].length > 0)
            {
                let txt = document.createTextNode(str);
                node.appendChild(txt);
            }
            else if (str[i].nodeType === Node.ELEMENT_NODE)
            {
                node.appendChild(str[i]);
            }
        }
    }
}

function appendChildren (node, childNodes)
{
    if (childNodes && childNodes.nodeType === Node.ELEMENT_NODE)
    {
        node.appendChild(childNodes);
    }
}

export { applyAttributes, insertText, appendChildren };