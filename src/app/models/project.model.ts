export class Project {
    title: string;
    tags: string[];
    description: string;
    imgs: string[] = [];
    links: string[] = [];
    constructor(title: string, tags: string[], description: string) {
        this.title = title;
        this.tags = tags;
        this.description = description;
    }
}