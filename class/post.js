class Post {
    #comments
    constructor(id,title,content,author,categories,tags,status,views) {
        this.id =id
        this.title =title
        this.content =content
        this.author =author
        this.categories =categories
        this.tags =tags
        this.status =status
        this.views =views
        this.createdAt =new Date()
        this.updatedAt =new Date()
        this.publishedAt=new Date()
    }
    constructor(id, title, content, author, categories, tags){

    }
publish(){
    
}
unpublish(){
    
}
archive(){
    
}
edit(title, content, categories, tags){
    
}
addComment(comment){
    
}
removeComment(commentId){
    
}
getComments(options){
    
}
incrementViews(){
    
}
hasCategory(categorySlug){
    
}
hasTag(tagSlug){
    
}
getExcerpt(length){
    
}
getReadingTime(){
    
}
}