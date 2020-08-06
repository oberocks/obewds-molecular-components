function password_visibility_toggle (triggerEl, targetInputId, defaultStateTxt, toggledStateTxt)
{
    let text = triggerEl.textContent;
    if (text === defaultStateTxt)
    {
        triggerEl.textContent = toggledStateTxt;
        document.getElementById(targetInputId).setAttribute('type', 'text');
    }
    else if (text === toggledStateTxt)
    {
        triggerEl.textContent  = defaultStateTxt;
        document.getElementById(targetInputId).setAttribute('type', 'password');
    }
}

export { password_visibility_toggle };