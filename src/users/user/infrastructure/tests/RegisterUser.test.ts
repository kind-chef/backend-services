import axios from 'axios'

describe('Create User', () => {
  it('should create a User', async () => {
    const user = {
      firstName: 'Random',
      lastName: 'User',
      email: 'a@b.co',
      phonenumber: '125778942',
      profile: 'Admin',
      secret: '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5'
    }
    const callout: any = await axios.post(`http://localhost:8090/register-user`, user)
    expect(callout.statusCode == 200)
  })
})
