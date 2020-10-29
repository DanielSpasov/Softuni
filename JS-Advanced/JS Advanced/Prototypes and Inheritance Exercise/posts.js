function solve() {

    class Post {
        constructor(title, content) {
            this.title = title
            this.content = content
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes
            this.dislikes = dislikes
            this.comments = []
        }

        addComment(comment) {
            this.comments.push(comment)
        }

        toString() {
            let returnInfo = super.toString() + `\nRating: ${this.likes - this.dislikes}`
            if (this.comments.length > 0) {
                returnInfo += `\nComments:`
                this.comments.forEach(com => returnInfo += `\n * ${com}`)
            }
            return returnInfo
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views){
            super(title, content)
            this.views = views
        }

        view(){
            this.views++
            return this
        }

        toString(){
            let returnInfo = super.toString() + `\nViews: ${this.views}`
            return returnInfo
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

solve()