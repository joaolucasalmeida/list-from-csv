import request from 'supertest';
import app from '../app';
import UsersDAO from '../DAO/UsersDAO';

jest.mock('../DAO/UsersDAO');

describe('GET /api/users', () => {
  it('should return a list of users if the query matches', async () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    (UsersDAO.findByQuery as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app).get('/api/users?q=some-query');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should return 404 if no user matches the query', async () => {
    (UsersDAO.findByQuery as jest.Mock).mockResolvedValue([]);
    
    const response = await request(app).get('/api/users?q=no-such-user');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'No users found matching the provided query.' });
  });

  it('should return 500 if there is a server error', async () => {
    (UsersDAO.findByQuery as jest.Mock).mockRejectedValue(new Error('Server error'));

    const response = await request(app).get('/api/users?q=some-query');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Failed to fetch data.' });
  });
});
