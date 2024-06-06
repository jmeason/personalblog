#Personal Blog Application

This personal blog will allow users to create and view blog posts, with the things we have learned with HTML, CSS, and Javascript. It also allows users to submit forms that will be stored in local storage and lets the users go inbetween light and dark mode.

Landing page is where inputs for the username, blogtitle and the content will be in
    WHEN I load the app, THEN I am shown the landing page containg forms that I need to fill out

*Form Submition*
    WHEN I submit the form, THEN blog post data is stored to localStorage.
    WHEN the form submits,  THEN I am redirected to the posts page.
    WHEN I enter try to submit a form without a username, title, or content, THEN I am presented with a message that prompts me to complete the form.
    
Validation is where the user needs to input data 

*Posts page*
Styles in Css are where the light and dark modes go, which allows the users to switch between light and dark mode and a back button.
    WHEN I view the posts page, THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
    WHEN I click the light mode/dark mode toggle, THEN the page content's styles update to reflect the selection.
    WHEN I click the "Back" button, THEN I am redirected back to the landing page where I can input more blog entries.
    WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
