import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Abubakar Zafar' },
            { id: 12, name: 'Farrukh' },
            { id: 13, name: 'Noor' },
            { id: 14, name: 'Waqas' },
            { id: 15, name: 'Muzammil' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes };
    }
}