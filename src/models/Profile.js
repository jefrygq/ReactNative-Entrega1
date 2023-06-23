class Profile {
  constructor(id, email, firstName='', lastName='', profileImage='') {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImage = profileImage;
    this.createdAt = Date.now();
  }
}

export default Profile;