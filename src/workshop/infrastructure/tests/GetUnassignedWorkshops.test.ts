import axios from 'axios'

describe('Get unassigned Workshops', () => {
  it('should get unassigned workshops', async () => {
    const callout: any = await axios.get(`http://localhost:8090/unassigned-workshops`)
    expect(callout.statusCode == 200)
  })
})
