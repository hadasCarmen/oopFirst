class User {
  #comments=[];
  #posts = [];
  constructor(id, username, email, displayName, role) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.displayName = displayName;
    this.bio = [];
    this.role = role;
    this.joinedAt = new Date();
  }
  createPost(title, content, categories, tags) {
    const post = {
      title: title,
      content: content,
      categories: categories,
      tags: tags,
    };
    this.#posts.push(post)
  }
  editPost(postId, updates){
    const id=this.#posts.findIndex((post)=>post.id===postId)
    const post=this.#posts[id]
    const newPost={...post,updates}
    this.#posts[id]=newPost
  }
  deletePost(postId){
    const id=this.#posts.findIndex((post)=>post.id===postId)
    this.#posts.splice(id,1)
  }
  addComment(post, content){

  }
  getPosts(){

  }
getComments() {

}
getProfile(){
  
}
}

