//object methods
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make marmite'],
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
         console.log(blog);
     })
        }
    };
    
/*     user.login();
    user.logout();

    const name = 'mario';
    name.toUpperCase(); */

    user.logBlogs();
    console.log(this);