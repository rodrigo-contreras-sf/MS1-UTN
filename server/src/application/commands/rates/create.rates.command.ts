import { Seniority } from "../../../domain/enums/seniority.enum"
import { Language } from "../../../domain/enums/language.enum"

export interface CreateRateCommand {
    technology: number;
    seniority: Seniority;
    language: Language;
    averageSalary: string;
    grossMargin: string;
    currency: string;
}