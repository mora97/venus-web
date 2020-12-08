class User {
    constructor(userData = {}) {
        this.situation = userData.situation,
        this.email = userData.email,
        this.password = userData.password,
        this.name = userData.name,
        this.family = userData.family  
    }
}