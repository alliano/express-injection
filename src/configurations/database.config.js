export class Database {
  user = new UserModel();
  address = new AddressModel();
  ewallet = new EWalletModel();

  constructor() {
    if (Database.instance) {
      return Database.instance;
    } else {
      this.instance = this;
      Database.instance = this;
    }
  }
}

class UserModel {
  #userList = [
    {
      id: 1,
      name: "Alli",
      email: "alli@gmail.com",
      password: "20384uf08h23rg8",
    },
    {
      id: 2,
      name: "Alliano",
      email: "alliano@gmail.com",
      password: "20384uf08h23rg8",
    },
    {
      id: 3,
      name: "Bagong",
      email: "bagong@gmail.com",
      password: "20384uf08h23rg8",
    },
  ];
  constructor() {
    if (UserModel.instance) {
      return UserModel.instance;
    } else {
      this.instance = this;
      UserModel.instance = this;
    }
  }

  /**
   *
   * @param {number} id
   */
  async findById(id) {
    return this.#userList.find((d) => d.id == id);
  }

  async findAll() {
    return this.#userList;
  }
}

class AddressModel {
  #addressList = [
    {
      id: 1,
      country: "Indonesia",
      province: "East java",
      district: "Surabaya",
    },
    {
      id: 2,
      country: "Indonesia",
      province: "East java",
      district: "Kediri",
    },
    {
      id: 3,
      country: "Indonesia",
      province: "East java",
      district: "Nganjuk",
    },
  ];
  constructor() {
    if (AddressModel.instance) {
      return AddressModel.instance;
    } else {
      this.instance = this;
      AddressModel.instance = this;
    }
  }

  /**
   *
   * @param {number} id
   */
  async findById(id) {
    return this.#addressList.find((a) => a.id == id);
  }

  async findAll() {
    return this.#addressList;
  }
}

class EWalletModel {
  #walletList = [
    {
      id: 1,
      balance: 4000.0,
      name: "Alliano",
    },
    {
      id: 2,
      balance: 4000.0,
      name: "Jarot",
    },
    {
      id: 3,
      balance: 4000.0,
      name: "Jongos",
    },
  ];
  constructor() {
    if (EWalletModel.instance) {
      return EWalletModel.instance;
    } else {
      this.instance = this;
      EWalletModel.instance = this;
    }
  }

  async findById(id) {
    return this.#walletList.find((w) => w.id == id);
  }

  async findAll() {
    return this.#walletList;
  }
}
