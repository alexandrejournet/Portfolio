export class Project {
    title: string;
    tags: string[];
    description: string;
    img: string;
    link: string;
    constructor(title: string, tags: string[], description: string, img: string, link: string) {
        this.title = title;
        this.tags = tags;
        this.description = description;
        this.img = img;
        this.link = link;
    }
}