import { Request, Response } from 'express'
import csv from 'csv-parser';
import fs from 'fs';
import UsersDAO from '../DAO/UsersDAO';

export class UserController {
    async create(req: Request, res: Response) {
        if (!req.file) {
            return res.status(400).json({ error: 'No file was sent with the request.' });
        }
        
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', async (row) => {
                try {
                    await UsersDAO.save(row)
                } catch (error) {
                    return res.status(500).json({ error: 'An error occurred while processing the CSV data.' });
                }
            })
            .on('error', (error) => {
                return res.status(500).json({ error: 'An error occurred while reading the CSV file.' });
            })
            .on('end', () => {
                return res.status(201).json({ message: 'CSV file successfully processed' });
            });
    }

    async find(req: Request, res: Response) {
        const query: any = req.query.q;
        if (!query) {
            return res.status(400).json({ error: 'Missing query parameter q' });
        }

        try {
            const users = await UsersDAO.findByQuery(query)
            if (!users || users.length === 0) {
                return res.status(404).json({ error: 'No users found matching the provided query.' });
            }
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch data.' });
        }
    }
}
