//import shortid from "shortid";
import Rate from "../../domain/entities/rates.entity"

class RatesRepository {
    private rates: Rate[];

    constructor() {
        this.rates = [];
    }

    async findOneById(id: string): Promise<Rate | null> {
        const rates = this.rates.find(r => r.getId() === id);

        return (rates) ? rates : null;
    }

    async findAll(): Promise<Rate[]> {
        return this.rates;
    }

    async save(rates: Rate): Promise<void> {
        if (!rates.getId()){
            this.rates.push(rates);
        } else {
            this.rates = this.rates.map(function(r) {
                return r.getId()=== rates.getId() ? rates : r; 
            });
        }
       
    }
    async deleteById(id: string):Promise<void>{
        this.rates = this.rates.filter(r => r.getId() !== id);
    }

    async exist(            
    technology: string,
    seniority: string,
    language:string,
    currency:string,)
    {   
        const rate = this.rates.find(r => r.getLanguage() === language && r.getSeniority() 
        === seniority && r.getCurrency() === currency && r.getTechnology() === technology);

        return !!rate;
    }
}
export default new RatesRepository();