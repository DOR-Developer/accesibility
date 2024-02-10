/*
    ********************************************************
    *
    * Meeting WACG2 standards.
    * 
    * Accesibility Guidelines.
    * ( DEC 2008 ) https://www.w3.org/TR/WCAG20/
    * ( SEP 2023 ) https://www.w3.org/TR/WCAG21/
    * 
    * Quick reference 
    * https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1
    * 
    * Aria
    * https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
    * https://www.w3.org/WAI/ARIA/apg/practices/
    * 
    * Mozilla guidelines.
    * https://developer.mozilla.org/en-US/docs/Learn/Accessibility
    *
    ********************************************************
    
    TODO - Web Forms Mozilla.
    https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript

    TODO - Web Games Mozilla.
    https://developer.mozilla.org/en-US/docs/Games/Anatomy

    TODO - Deployment Mozilla.
    https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment
    https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

    TODO - Cross Browser Testing Mozilla.
    https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing

    TODO - Accesibility.
    https://web.dev/learn/forms/autofill?hl=es-419
    https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
    Autofill on forms using autocomplete attribute.

    TODO - Accesibility.
    https://w3c.github.io/pointerevents/#examples
    Always use onMouseUp to add click events.
    Replace click events for onMouseUp when possible.

    TODO - Accesibility.
    Always use form names that start with the text displayed.
    Voice detectors use these to process user input.

    TODO - Accesibility.
    https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR39
    Title popups need to be dismissable on ESC key.
    
    TODO - Accesibility.
    https://www.w3.org/WAI/WCAG21/Techniques/general/G217
    Allow keyboard mapping to be disabled.

    TODO - Accesiblity.
    https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html
    Timeout sessions after at least 20 hours and give notice.
    Store session data for more than 20 hours.
*/

/**
 * Toggling visibility on form input 
 * password fields using a button.
 * The button needs to be right after the input.
 */
document.querySelectorAll("form label:has(input[type='password']) button").forEach(button => {
    button.addEventListener("mouseup", (ev) => {
        try {
            const button = ev.target.closest('button');
            const input = button.previousElementSibling;

            if (input.tagName === "INPUT") {
                const inputType = input.type;

                if (inputType === "password") {
                    input.type = "text";
                    button.querySelector("svg:first-of-type").style.display = "initial";
                    button.querySelector("svg:last-of-type").style.display = "none";
                } else {
                    input.type = "password";
                    button.querySelector("svg:first-of-type").style.display = "none";
                    button.querySelector("svg:last-of-type").style.display = "initial";
                }

            } else {
                console.warn("No input element found.", "\n", "An input tag needs to exist right before the button.")
            }

        } catch (error) {}
    });
})

/**
 * Prevent form submit on signup form.
 * Handle custom signup.
 * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 * https://developer.mozilla.org/es/docs/Web/API/FormData
 */
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        try {

            const formData = new FormData(ev.target);

            for (input of formData) {
                console.log(input);
            }

        } catch (error) {}
    });
});

document.querySelector("input[name='repeat-password']").addEventListener("input", (ev) => {
    try {
        const target = ev.target;
        const password = document.querySelector("input[name='password']");

        if (target.value.length < 6 || target.value.length > 99) {
            target.setCustomValidity("");
            return;
        }

        console.log(target.value !== password.value, target.value, password.value);

        if (target.value !== password.value) {
            target.setCustomValidity("Both passwords must match");
        } else {
            target.setCustomValidity("");
        }

    } catch (error) {}
});