import Unit from '@/domain/unit.ts';

export default class Item {

    constructor(public id: number, public name: string, public amount: number,
                public unit: Unit, public expiresAt: Date, public iconName: string) {

    }


}
