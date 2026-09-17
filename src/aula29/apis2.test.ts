import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Método POST para criar um novo post', async () => {
    const res = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1, 
            title: 'Meu novo post',
            body: 'Conteudo do meu novo post'
        })
    });

    expect(res.status).toBe(201);

    const dados = await res.json();
    expect(dados.title).toBe('Meu novo post');
    expect(dados.body).toBe('Conteudo do meu novo post');
});

test('Método PUT para atualizar um post existente', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1,
            userId: 1,
            title: 'Título atualizado',
            body: 'Conteúdo atualizado com sucesso'
        })
    });

    expect(res.status).toBe(200);

    const dados = await res.json();
    expect(dados.title).toBe('Título atualizado');
    expect(dados.body).toBe('Conteúdo atualizado com sucesso');
});

test('Método PATCH para atualizar parcialmente um post', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título alterado via PATCH'
        })
    });

    expect(res.status).toBe(200);

    const dados = await res.json();
    expect(dados.title).toBe('Título alterado via PATCH');
});