class Comment {
  #replies=[];
  constructor(id, post, author, content, status, parentComment) {
    this.id = id;
    this.post = post;
    this.author = author;
    this.content = content;
    this.status = status;
    this.parentComment = parentComment;
    this.createdAt = new Date();
  }
  constructor(id, post, author, content, parentComment){

  }
approve(){
    
}
markAsSpam(){
    
}
addReply(reply){
    
}
getReplies(){
    
}
isReply(){
    
}
}
