const STORAGE_KEY = 'contacts';

export const getContacts = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveContacts = (contacts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};
