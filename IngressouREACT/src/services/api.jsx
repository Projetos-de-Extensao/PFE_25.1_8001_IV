const API_URL = 'http://localhost:3001/eventos';

export const fetchEvents = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar itens');
        }
        return await response.json();
    }   catch (error) {
        console.error("Falha ao buscar itens: ", error);
        return [];
    }
}

export const fetchEventsById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar itens');
        }
        return await response.json();
    }   catch (error) {
        console.error("Falha ao buscar itens: ", error);
        return [];
    }
}