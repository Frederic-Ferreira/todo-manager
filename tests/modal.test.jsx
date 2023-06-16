import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import Modal from "./../src/components/Modal"

describe('Création de note dans le Modal', () => {
  it('addNote devrait être appelé en cliquant sur le bouton', () => {
    const addNoteMock = vi.fn();

    render(<Modal addNote={addNoteMock} handleModal={() => {}} />);

    const createButton = screen.getByTestId('create-todo');

    fireEvent.click(createButton);

    expect(addNoteMock).toBeCalled()
  });

  it("La valeur des inputs devraient changé en tapant à l'intérieur", () => {    
    render(<Modal handleModal={() => {}} />);

    const titleInput = screen.getByTestId('create-input-title');
    const noteInput = screen.getByTestId('create-input-note');
    const commentInput = screen.getByTestId('create-input-comment');

    fireEvent.change(titleInput, { target: { value: 'Titre de la note' } });
    fireEvent.change(noteInput, { target: { value: 'Contenu de la note' } });
    fireEvent.change(commentInput, { target: { value: 'Commentaire de la note' } });

    expect(titleInput.value).toBe('Titre de la note')
    expect(noteInput.value).toBe('Contenu de la note')
    expect(commentInput.value).toBe('Commentaire de la note')
  });

it('addNote devrait être appelé avec les bons arguments', () => {
    const addNoteMock = {
      addNote : vi.fn()
    }

    render(<Modal addNote={addNoteMock.addNote} handleModal={() => {}} />);

    const titleInput = screen.getByTestId('create-input-title');
    const noteInput = screen.getByTestId('create-input-note');
    const commentInput = screen.getByTestId('create-input-comment');
    const createButton = screen.getByTestId('create-todo');

    fireEvent.change(titleInput, { target: { value: 'Titre de la note' } });
    fireEvent.change(noteInput, { target: { value: 'Contenu de la note' } });
    fireEvent.change(commentInput, { target: { value: 'Commentaire de la note' } });

    fireEvent.click(createButton);

    expect(addNoteMock.addNote).toHaveBeenCalledWith('Titre de la note', 'Contenu de la note', 'Commentaire de la note')
  });
});
