export function password_visibility_toggle (triggerEl, targetInputId, defaultStateTxt, toggledStateTxt, defaultType, toggledType) {
    
    let text = triggerEl.textContent;
    if (text === defaultStateTxt)
    {
        triggerEl.textContent = toggledStateTxt;
        document.getElementById(targetInputId).setAttribute('type', toggledType);
    }
    else if (text === toggledStateTxt)
    {
        triggerEl.textContent  = defaultStateTxt;
        document.getElementById(targetInputId).setAttribute('type', defaultType);
    }

}