import express from 'express';
import {
    getAllContacts,
    createContact,
    deleteContact,
    updateContact,
    getContactById
} from "../controllers/contactController.js";

const contactRoutes = express.Router();

contactRoutes.post('/', createContact);
contactRoutes.get('/', getAllContacts);
contactRoutes.get('/:id', getContactById);
contactRoutes.put('/:id', updateContact);
contactRoutes.delete('/:id', deleteContact)

export default contactRoutes;