//create dependencies
const postsList=document.getElementById('posts-list')
const toggleMode=document.getElementById('toggle-mode')
const backButton=document.getElementById('back-button')


//building the blog posts

function loadPosts() {
const jsonString = localStorage.getItem('blogData');
    let blogData = JSON.parse(jsonString);
console.log(blogData);
  
//create for loop with all 
//get blog post data from local storage
if (blogData.length> 0) {
    blogData.forEach() ;
    const jsonString = localStorage.getItem('blogData');
    let blogData = JSON.parse(jsonString);
        postItem.innerHTML=`
        <h2> ${post.title}</h2>
        <p> ${post.content}</p>`
    
    else {
        const noPosts=document.createElement ('p');
     noPost.textcontent= 'No blog content available';  }
             
    }
}

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

