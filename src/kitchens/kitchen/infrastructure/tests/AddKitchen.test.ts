import axios from 'axios'
import https from 'https'

describe('Create Kitchen', () => {
  it('should create a kitchend', async () => {
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    const kitchen = {
      name: 'Random Kitchen',
      street: 'Random',
      city: 'Random',
      province: 'Random',
      postalCode: '01223',
      capacity: 100
    }
    const callout: any = await instance.post(`https://localhost:8090/register-kitchen`, kitchen)
    expect(callout.statusCode == 200)
  })
})
