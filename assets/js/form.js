// this goes with the landing page (index.html)
//Dependencies

const formInput=document.getElementById('blog-form');
const userNameInput=document.getElementById('username');
const titleInput=document.getElementById('title');
const contentInput=document.getElementById('content');
const errorMessage=document.getElementById('error-message');

//Data

//Funciton
function handleSubmit(event) {
    event.preventDefault();

    // get user inputs
    console.log("username", userNameInput.value);
    console.log("title", titleInput.value);
    console.log("content", contentInput.value);
    const username = userNameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    //make sure the fields are not empty
    if (userNameInput === ''|| title==='' || content=== ''){
        errorMessage.textContent= "Please complete all the fields";
        return;
            }

        else {errorMessage.textContent= ''}
    // store blog data in local storage
    // check to see what's in local storage
    const jsonString = localStorage.getItem('blogData');
    let blogData = JSON.parse(jsonString);

    console.log('blogData', blogData)
    // if something is there
    if (blogData && blogData.length) {
        // add new blog data to it
        blogData.push({
            username,
            title,
            content
        })
        // else 
    } else {

        // create first blog data
        blogData = [{
            username,
            title,
            content
        }]
    }

    localStorage.setItem('blogData', JSON.stringify(blogData));
    window.location.href='blog.html'

    // redirect user to blog.html


}

//User Interaction

//Initiallization
formInput.addEventListener('submit', handleSubmit)
