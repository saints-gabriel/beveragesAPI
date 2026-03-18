export class wine{
    constructor(id, title, desc){
        this.id = id,
        this.title = title,
        this.desc = desc
    }
}

export const wines = [
    new wine(1,'cheap wine','no one likes cheap wine.'),
    new wine(2,'expensive wine','you are either classy or a wannabe richtard'),
    new wine(3,'normal wine','you aight white boy!!!'),
]