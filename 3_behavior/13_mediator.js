class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const gosha = new User('Gosha')
const vika = new User('Vika')
const liza = new User('Liza')

const room = new ChatRoom()
room.register(gosha)
room.register(vika)
room.register(liza)

gosha.send('Hello!', vika)
vika.send('Hello! hello!', gosha)
liza.send('Vsem privet')