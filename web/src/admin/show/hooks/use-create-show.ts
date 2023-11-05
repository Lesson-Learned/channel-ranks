import { Countries, createShow, Genre, Networks, Show } from '@api';
import { ymdToMilli } from '@shared';
import { useState } from 'react';

interface Fields extends Omit<Show, 'endDate' | 'releaseDate'> {
  endDate: string;
  releaseDate: string;
}

export function useCreateShow() {
  const [form, setForm] = useState<Fields>({
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
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    async function handler() {
      try {
        await createShow({
          ...form,
          endDate: form.endDate ? ymdToMilli(form.endDate) : undefined,
          releaseDate: ymdToMilli(form.releaseDate)
        });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    handler();
  }

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
    handleSubmit,
    loading,
    setGenre,
    setNumberField,
    setSelectField,
    setTextField
  };
}
