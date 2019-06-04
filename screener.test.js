const {Screener} = require('./screener') 

describe('screener', () => {
    describe('not eligible', () => {
        it('if family lives in Connecticut', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({ lives_in_ct: false })
            expect(ui.notEligible).toBeCalled();
        });

        it('if not working nor attending a temporary family cash assistance (Jobs First) approved education or training activity', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({ meets_working_requirements: false })
            expect(ui.notEligible).toBeCalled();
        });

        it('does not meet family income requirements', () => {
            const ui = {
                notEligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({ meets_family_income_requirements: false })
            expect(ui.notEligible).toBeCalled();
        });
    });

    describe('eligible', () => {
        it('meets are 3 requirements', () => {
            const ui = {
                eligible: jest.fn()
            };
            const screener = new Screener(ui);
            screener.review({
                meets_family_income_requirements: true,
                meets_working_requirements: true,
                lives_in_ct: true
            })
            expect(ui.eligible).toBeCalled();
        })
    });
});