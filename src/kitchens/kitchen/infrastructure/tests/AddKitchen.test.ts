import axios from 'axios'
import https from 'https'

describe('Create Kitchen', () => {
  it('should create a kitchend', async () => {
    const kitchen = {
      name: 'Random Kitchen',
      street: 'Random',
      city: 'Random',
      province: 'Random',
      postalCode: '01223',
      capacity: 100,
      images: []
    }
    const callout: any = await axios.post(`http://localhost:8090/register-kitchen`, kitchen)
    expect(callout.statusCode == 200)
  })
})
