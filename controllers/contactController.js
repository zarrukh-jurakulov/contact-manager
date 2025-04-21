import ContactModel from '../model/Contact.js';

export const getAllContacts = async (req, res) => {
    try {
        const contact = await ContactModel.find();
        res.send(contact);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const createContact = async (req, res) => {
    const contact = req.body;
    try {
        const newContact = new ContactModel(contact);
        await newContact.save();
        await res.send(newContact)
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getContactById = async (req, res) => {
    const id = req.params.id;
    try {
        const contact = await ContactModel.findById(id)
        res.send(contact);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateContact = async (req, res) => {
    const id = req.params.id;
    const {...data} = req.body
    try {
        const contact = await ContactModel.findByIdAndUpdate(id, data, {new: true})
        res.send(contact);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteContact = async (req, res) => {
    const id = req.params.id;
    try {
        await ContactModel.findByIdAndDelete(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json(err);
    }
}
