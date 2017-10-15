@blog_posts.each do |blog_post|
  json.set! blog_post.id do
    json.partial! 'blog_posts/blog_post', blog_post: blog_post
    json.creator blog_post.user.name
  end 
end 