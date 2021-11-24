export class User{

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public username: string,
    public password: string,
    public phoneNumber: string,
    public siret: string,
    public garages: any,
    public annonces: any,
  ) {}
}
