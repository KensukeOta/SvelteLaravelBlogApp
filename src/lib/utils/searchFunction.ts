export const filteredPosts = (keyword: string, data: any) => {
    let posts = [];

    for(let i = 0; i < data.posts.length; i++) {
      const post = data.posts[i];

      if (post.title.indexOf(keyword) !== -1 || post.user.name.indexOf(keyword) !== -1) {
        posts.push(post);
      }
    }

    return posts;
  };