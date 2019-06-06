import { Screener } from './screener';

describe('screener', () => {
    describe('not eligible', () => {
        it('if family and child live in Connecticut', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({
                 meets_residency_requirements: false,
                 meets_working_requirements: true,
                 meets_family_income_requirements: true,
                 meets_provider_requirements: true,
                 meets_child_age_requirements: true,
 
             })
            expect(ui.notEligible).toBeCalled();
        });

        it('if not working nor attending a temporary family cash assistance (Jobs First) approved education or training activity', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({
                meets_working_requirements: false,
                meets_family_income_requirements: true,
                meets_provider_requirements: true,
                meets_residency_requirements: true,
                meets_child_age_requirements: true,

            })
            expect(ui.notEligible).toBeCalled();
        });

        it('does not meet family income requirements', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({
                meets_family_income_requirements: false,
                meets_working_requirements: true,
                meets_provider_requirements: true,
                meets_residency_requirements: true,
                meets_child_age_requirements: true,

            })
            expect(ui.notEligible).toBeCalled();
        });

        it('does not meet provider requirements', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({
                meets_provider_requirements: false,
                meets_family_income_requirements: true,
                meets_working_requirements: true,
                meets_residency_requirements: true,
                meets_child_age_requirements: true,

            })
            expect(ui.notEligible).toBeCalled();
        });

        it('does not meet child age requirements', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({
                meets_child_age_requirements: false,
                meets_provider_requirements: true,
                meets_family_income_requirements: true,
                meets_working_requirements: true,
                meets_residency_requirements: true,

            })
            expect(ui.notEligible).toBeCalled();
        });
    });

    describe('eligible', () => {
        it('meets all requirements', () => {
            const ui = {
                eligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({
                meets_family_income_requirements: true,
                meets_working_requirements: true,
                meets_residency_requirements: true,
                meets_provider_requirements: true,
                meets_child_age_requirements: true,
            })
            expect(ui.eligible).toBeCalled();
        })
    });
});