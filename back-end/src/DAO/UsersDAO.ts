import db from '../database';

interface User {
    name: string;
    city: string;
    country: string;
    favorite_sport: string;
}

class UsersDAO {
    static listAll() {
        return db.select()
        .from('users')
    }

    static findByQuery(query: string) {
        return db.select()
        .from('users')
        .where('name', 'like', `%${query}%`)
        .orWhere('city', 'like', `%${query}%`)
        .orWhere('country', 'like', `%${query}%`)
        .orWhere('favorite_sport', 'like', `%${query}%`)
    }

    static save(user: User) {
        return db('users').insert(user);
    }
}

export default UsersDAO;
