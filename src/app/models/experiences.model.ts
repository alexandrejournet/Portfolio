export class ExperiencesModel {
    company: string;
    location: string = '';
    description: string;
    startDate: string;
    endDate?: string;
    missions: string[] = [];
    constructor(company: string, description: string, startDate: string) {
        this.company = company;
        this.description = description;
        this.startDate = startDate;
    }
}