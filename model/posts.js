module.exports = {
    posts: [
        { id: 1, title: "Teste do Mural", description: "Descrição do mural" },
    ],

    getAll() {
        return this.posts
    },

    newPosts(title, description) {
        this.posts.push({ id:genereteId(), title, description })
    }

}

function genereteId(){
    return Math.random().toString(36).substr(2,9)
}