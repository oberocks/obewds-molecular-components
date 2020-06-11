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
    else if (Array.isArray(str) && str.length > 0)
    {
        for (var i = 0; i < str.length; i++)
        {
            if (str[i] instanceof Element || str[i] instanceof HTMLDocument)
            {
                node.appendChild(str[i]);
            }
            else if (typeof str[i] === 'string' || str[i] instanceof String)
            {
                let txt = document.createTextNode(str[i]);
                node.appendChild(txt);
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