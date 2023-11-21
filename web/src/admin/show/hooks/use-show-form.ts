import { Countries, Genre, Networks } from '@api';
import { useState } from 'react';
import { ShowFormFields } from '../types/form';

export function useShowForm(initialForm?: ShowFormFields): ShowFormInterface {
  const [fields, setFields] = useState(initialForm ?? {
    banner: null,
    country: Countries[0],
    description: '',
    endDate: '',
    episodeCount: 0,
    genre: [],
    name: '',
    network: Networks[0],
    poster: null,
    releaseDate: '',
    seasonCount: 0
  });

  function setFileField(field: keyof ShowFormFields) {
    return function handler(value: File) {
      setFields(form => ({ ...form, [field]: value }));
    };
  }

  function setGenre(genre: Genre, checked: boolean) {
    setFields(form => {
      const genres = [ ...form.genre ];

      if (checked) {
        genres.push(genre);
      } else {
        genres.splice(genres.indexOf(genre), 1);
      }

      return { ...form, genre: genres };
    });
  }

  function setNumberField(field: keyof ShowFormFields) {
    return function handler(value: string) {
      setFields(form => ({ ...form, [field]: Number(value) }));
    };
  }

  function setSelectField<T extends string>(field: keyof ShowFormFields) {
    return function handler(value: T) {
      setFields(form => ({ ...form, [field]: value }));
    };
  }

  function setTextField(field: keyof ShowFormFields) {
    return function handler(value: string) {
      setFields(form => ({ ...form, [field]: value }));
    };
  }

  return {
    fields,
    setFileField,
    setGenre,
    setNumberField,
    setSelectField,
    setTextField
  };
}

export interface ShowFormInterface {
  fields: ShowFormFields;
  setFileField(field: keyof ShowFormFields): (value: File) => void;
  setGenre(genre: Genre, checked: boolean): void;
  setNumberField(field: keyof ShowFormFields): (value: string) => void;
  setSelectField<T extends string>(field: keyof ShowFormFields):
    (value: T) => void;
  setTextField(field: keyof ShowFormFields): (value: string) => void;
}
