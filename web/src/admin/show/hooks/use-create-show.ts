import { createShow } from '@api';
import { ymdToMilli } from '@shared';
import { useState } from 'react';
import { ShowForm } from '../types/form';

export function useCreateShow(form: ShowForm) {
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    async function handler() {
      try {
        await createShow({
          ...form,
          endDate: form.endDate ? ymdToMilli(form.endDate) : undefined,
          releaseDate: ymdToMilli(form.releaseDate)
        });
      } catch {
        alert('Failed to create show.');
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    handler();
  }

  return { handleSubmit, loading };
}
