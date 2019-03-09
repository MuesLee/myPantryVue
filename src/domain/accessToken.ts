import ApplicationUser from "@/domain/applicationuser";
export default class AccessToken {
  constructor(
    public value: string,
    public user: ApplicationUser,
    public expiresAt: Date
  ) {}
}
