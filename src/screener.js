 export class Screener {
    constructor(ui) {
        this.ui = ui
    }
    review(applicant) {
        if (this.meetsRequirements(applicant))
            this.ui.eligible();
        else
            this.ui.notEligible()
    }
    meetsRequirements(applicant) {
        return applicant.meets_family_income_requirements &&
            applicant.meets_working_requirements &&
            applicant.lives_in_ct &&
            applicant.meets_provider_requirements
    }
}

