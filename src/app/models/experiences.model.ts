export class Experiences {
    company: string;
    location: string = '';
    description: string;
    startDate: string;
    endDate?: string;
    missions?: Mission[] = [];
    isPro: boolean = true;
    constructor(company: string, description: string, startDate: string) {
        this.company = company;
        this.description = description;
        this.startDate = startDate;
    }
}

export class Mission {
    titre: string;
    contexte?: string;
    description?: string;
    technologies?: string;
    startDate?: string;
    endDate?: string;
    constructor(titre: string) {
        this.titre = titre;
    }
}
