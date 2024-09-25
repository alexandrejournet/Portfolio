export class ExperiencesModel {
    title: string;
    location: string = '';
    description: string;
    date: string;
    missions: string[] = [];
    constructor(title: string, description: string, date: string) {
        this.title = title;
        this.description = description;
        this.date = date;
    }
}