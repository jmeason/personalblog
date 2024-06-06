//create dependencies
const postsList=document.getElementById('posts-list')
const toggleMode=document.getElementById('toggle-mode')
const backButton=document.getElementById('back-button')


//building the blog posts

function loadPosts() {
const jsonString = localStorage.getItem('blogData');
    let blogData = JSON.parse(jsonString);
console.log(blogData)

//create for loop with all 
//get blog post data from local storage
blogData.forEach(post => {
    const postItem=document.createElement('li');
        

} )

}



// create, build, and place html elements on blog.html page
//unit 4 activity 26 local storage to dos 
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});


//handling the back buton
backButton.addEventListener('click', () => {
    window.location.href = 'index.html';})
//loads the posts when the posts loads
loadPosts();

