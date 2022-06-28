import axios from 'axios'

describe('Create User', () => {
  it('should create a User', async () => {
    const callout: any = await axios.post(`http://localhost:8090//unassigned-workshops`)
    expect(callout.statusCode == 200)
  })
})
