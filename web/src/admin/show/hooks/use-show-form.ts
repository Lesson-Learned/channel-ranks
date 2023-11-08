import { Countries, Genre, Networks } from '@api';
import { useState } from 'react';
import { ShowForm } from '../types/form';

export function useShowForm(initialForm?: ShowForm): ShowFormHook {
  const [form, setForm] = useState(initialForm ?? {
    country: Countries[0],
    description: '',
    endDate: '',
    episodeCount: 0,
    genre: [],
    name: '',
    network: Networks[0],
    releaseDate: '',
    seasonCount: 0
  });

  function setGenre(genre: Genre, checked: boolean) {
    setForm(form => {
      const genres = [ ...form.genre ];

      if (checked) {
        genres.push(genre);
      } else {
        genres.splice(genres.indexOf(genre), 1);
      }

      return { ...form, genre: genres };
    });
  }

  function setNumberField(field: keyof typeof form) {
    return function handler(value: string) {
      setForm(form => ({ ...form, [field]: Number(value) }));
    };
  }

  function setSelectField<T extends string>(field: keyof typeof form) {
    return function handler(value: T) {
      setForm(form => ({ ...form, [field]: value }));
    };
  }

  function setTextField(field: keyof typeof form) {
    return function handler(value: string) {
      setForm(form => ({ ...form, [field]: value }));
    };
  }

  return {
    form,
    setGenre,
    setNumberField,
    setSelectField,
    setTextField
  };
}

export interface ShowFormHook {
  form: ShowForm;
  setGenre(genre: Genre, checked: boolean): void;
  setNumberField(field: keyof ShowForm): (value: string) => void;
  setSelectField<T extends string>(field: keyof ShowForm):
    (value: T) => void;
  setTextField(field: keyof ShowForm): (value: string) => void;
}
