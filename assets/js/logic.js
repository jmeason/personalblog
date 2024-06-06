// this goes with the blog page (index.html) and the styles.css for light/dark

//Dependencies
//from blog.js
// const postsList=document.getElementById('posts-list')
// const toggleMode=document.getElementById('toggle-mode')
// const backButton=document.getElementById('back-button')

    
    //Data
    
    
    //Funciton
    document.addEventListener('DOMContentLoaded', () => {
        const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
        if (isDarkMode) {
          document.body.classList.add('dark-mode');
          document.body.classList.remove('light-mode');
        } else {
          document.body.classList.add('light-mode');
          document.body.classList.remove('dark-mode');
        }
      
        // Save the theme preference
        document.getElementById('toggle-mode')?.addEventListener('click', () => {
          const isDarkMode = document.body.classList.contains('dark-mode');
          localStorage.setItem('isDarkMode', isDarkMode);
        });
      });
//handling the back buton
backButton.addEventListener('click', () => {
    window.location.href = 'index.html';})
//loads the posts when the posts loads
loadPosts();
