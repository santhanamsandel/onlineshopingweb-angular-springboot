export class UserUpdate {
    constructor(
      public userId?:number,
      public name: string = '',
      public mobile: string = '',
      public password: string = '',
      public role: string = ''
    ) {}
  }