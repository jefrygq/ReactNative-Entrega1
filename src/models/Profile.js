class Profile {
  constructor(id, token, email, firstName, lastName, profileImage) {
    this.id = id;
    this.token = token;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImage = profileImage;
    this.createdAt = Date().now();
  }
}

export default Profile;