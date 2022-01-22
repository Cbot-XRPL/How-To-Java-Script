//object arrays

/* const blogs = [
    {title: 'why mac & cheese rules', like : 30},
    {title: '10 things to make with marmite', likes:50}

]; */

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
    {title: 'why mac & cheese rules', likes : 30},
    {title: '10 things to make with marmite', likes: 50}
       ],

    login: function(){
          console.log('the user logged in');
       },

    logout(){
        console.log('the user logged out');
       },

    logBlogs(){
     //console.log(this.blog);
     console.log('the user has written the fallowing blogs:');
     this.blogs.forEach(blog =>{
         console.log(blog.title, blog.likes);
      });
        }
      };
    

    user.logBlogs();
    