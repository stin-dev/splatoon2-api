import * as Repositories from "./repositories";
import * as Services from "./services";

class DIContainer {
  private mainWeaponsRepository = new Repositories.MainWeaponsRepository();
  private subWeaponsRepository = new Repositories.SubWeaponsRepository();
  private specialWeaponsRepository = new Repositories.SpecialWeaponsRepository();
  private gearPowersRepository = new Repositories.GearPowersRepository();

  get MainWeaponsRepository() { return this.mainWeaponsRepository }
  get SubWeaponsRepository() { return this.subWeaponsRepository }
  get SpecialWeaponsRepository() { return this.specialWeaponsRepository }
  get GearPowersRepository() { return this.gearPowersRepository }
  get MainWeaponsService() {
    return new Services.MainWeaponsService(
      this.MainWeaponsRepository,
      this.SubWeaponsRepository,
      this.SpecialWeaponsRepository,
    );
  }
  get SubWeaponsService() {
    return new Services.SubWeaponsService(
      this.MainWeaponsRepository,
      this.SubWeaponsRepository,
    );
  }
  get SpecialWeaponsService() {
    return new Services.SpecialWeaponsService(
      this.MainWeaponsRepository,
      this.SpecialWeaponsRepository,
    );
  }
  get GearPowersService() {
    return new Services.GearPowersService(
      this.GearPowersRepository,
    );
  }
}

export default new DIContainer();