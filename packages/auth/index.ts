export class User {
  constructor(private readonly _id: string | null) {}

  get id() {
    return this._id
  }

  get isAuthenticated() {
    return Boolean(this.id)
  }
}
