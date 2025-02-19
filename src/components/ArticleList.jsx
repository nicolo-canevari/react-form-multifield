import React, { useState } from 'react';

const ArticleList = () => {

    // stato iniziale degli articoli in pagina
    const [articles, setArticles] = useState([
        { id: 1, title: 'Articolo 1', autore: 'Autore 1', contenuto: 'Contenuto dell\'articolo 1', categoria: 'Categoria 1' },
        { id: 2, title: 'Articolo 2', autore: 'Autore 2', contenuto: 'Contenuto dell\'articolo 2', categoria: 'Categoria 2' },
        { id: 3, title: 'Articolo 3', autore: 'Autore 3', contenuto: 'Contenuto dell\'articolo 3', categoria: 'Categoria 3' },
        { id: 4, title: 'Articolo 4', autore: 'Autore 4', contenuto: 'Contenuto dell\'articolo 4', categoria: 'Categoria 4' },
        { id: 5, title: 'Articolo 5', autore: 'Autore 5', contenuto: 'Contenuto dell\'articolo 5', categoria: 'Categoria 5' },
        { id: 6, title: 'Articolo 6', autore: 'Autore 6', contenuto: 'Contenuto dell\'articolo 6', categoria: 'Categoria 6' },
    ]);

    // Stato per i dati del form
    const [formData, setFormData] = useState({

        title: '',
        autore: '',
        contenuto: '',
        categoria: ''

    });

    // Funzione generica per gestire i cambiamenti nei campi di input
    const handleFormData = (event) => {

        const { name, value } = event.target;
        setFormData({

            // mantengo gli altri valori invariati
            ...formData,
            // aggiorno solo il campo che è stato modificato
            [name]: value

        });

    };

    // Funzione per rimuovere un articolo
    const handleDelete = (id) => {

        // filtro l'artiicolo per id e lo rimuovo dalla mia lista
        setArticles(articles.filter(article => article.id !== id));

    };

    // Funzione per gestire il submit del form
    const handleSubmit = (event) => {

        // evito il refresh della pagina
        event.preventDefault();
        // destructuring dei dati del form con successiva creazione di un nuovo articolo
        const { title, autore, contenuto, categoria } = formData;

        if (title && autore && contenuto && categoria) {
            const newArticle = {
                id: articles.length + 1,
                title,
                autore,
                contenuto,
                categoria

            };

            // aggiungo il nuovo articolo alla mia lista
            setArticles([...articles, newArticle]);

        }

    };

}

export default ArticleList;