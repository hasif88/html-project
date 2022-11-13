const posts = [

    {
        
        title : "hasif ahmed 4",
       Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",     
         GamepadButton:"click",
        href:"http://www.facebook.com"
    
    },
    
    {
        
        title : "hasif ahmed 4",
       Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",     
         GamepadButton:"click",
        href:"http://www.facebook.com"
    
    },
    
    {
        
        title : "hasif ahmed 4",
       Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",     
         GamepadButton:"click",
        href:"http://www.facebook.com"
    
    },
    
    {
        
        title : "hasif ahmed 4",
       Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",     
         GamepadButton:"click",
        href:"http://www.facebook.com"
    
    },
    {
        
        title : "hasif ahmed 4",
       Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",     
         GamepadButton:"click",
        href:"http://www.facebook.com"
    
    },
    
    {
        
        title : "hasif ahmed 4",
       Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",     
         GamepadButton:"click",
        href:"http://www.facebook.com"
    },
    
    {
        
        title : "hasif ahmed 4",
        Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",   
         GamepadButton:"click",
        href:"http://www.facebook.com"
    },
    
    {
        
        title : "hasif ahmed 4",
        Image : "/image/vector-cartoon-illustration-boy-is-confused_194552-1705.webp",   
                 GamepadButton:"click",
        href:"http://www.facebook.com"
    },
    
    ];
    
    const postsElement = document.querySelector('.posts');
    
    const loadAll = () => {
    
        posts.map(post => {
                                    
    const postElement = document.createElement("div");
     
    postElement.classList.add("post");
    postElement.innerHTML = `
    <img src="${post.Image}" alt="" >
    <h4 class="post-titel">${post.title}</h4>
       <a href="${post.href}">${post.GamepadButton}  </a>
       
    
    
    `;
    postsElement.appendChild(postElement);
    
        });
    };
    loadAll();
    
    // <div class="post">
    //         <h4 class="post-titel">hasif ahmed</h4>
    //         <p class="">rana ahmed</p>
    //     </div>