const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogList) => {
    if(blogList.length === 0) {
        return 0
    } else {
        let sum = 0
        blogList.forEach(element => {
            sum = sum + element.likes
        });
        return sum
    }
}

const favoriteBlog = (blogs) => {
    const maxValueLikes = Math.max(...blogs.map(element => element.likes))
    const blogFinal = blogs.find(blog => blog.likes === maxValueLikes)

    return {
        "title": blogFinal.title,
        "author": blogFinal.author,
        "likes": blogFinal.likes,
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}