// Week 4, Module 4, Exercise 1 - Commenting MVC
// 1. creates a new array called 'posts'
var posts = []
// 2. creates a new object called post
var post = {
// 3. Referencing objects to use in tehe script from a URL
  url: 'http://jsonplaceholder.typicode.com/posts/',
// 4. Using jQuery to select an element in the DOM; selecting a div with a class of 'post' and appending it To the body of the linked HTML doc
  $el: $(&lrt;div class="post"&grt;).appendTo($('body')),
// 5. creates a function called initialize with a parameter of id
  initialize: function(id){
// 6.
    this.$el.attr('id', id)
    this.url += id
    var thisPost = this // wtf? http://stackoverflow.com/questions/4886632/what-does-var-that-this-mean-in-javascript
    $.get( this.url, function(data){
       console.log(this) // window
       thisPost.attributes = data
       thisPost.render()
     })
     posts.push(this)
  },
  render: function(){
    this.$el.append([
      $(&lrt;div&grt;).addClass('title').text(this.attributes.title),
      $(&lrt;div&grt;).addClass('body').text(this.attributes.body)
    ])
  }
}

// calls the function using a value of 1
post.initialize(1)

// Week 4, Module 4, Exercise 2 - The Postman Commeth
