export class User {
    
    constructor(
      public userId?:number,
      public name: string = '',
      public mobile: string = '',
      public password: string = '',
      public role: string = ''
    ) {}
  }