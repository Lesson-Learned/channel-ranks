import { updateShow } from '@api';
import { AdminRoutes, ymdToMilli } from '@shared';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowForm } from '../types/form';

export function useUpdateShow(showId: string, form: ShowForm) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    async function handler() {
      try {
        await updateShow(showId, {
          ...form,
          endDate: form.endDate ? ymdToMilli(form.endDate) : undefined,
          releaseDate: ymdToMilli(form.releaseDate)
        });

        navigate(AdminRoutes.Shows);
      } catch {
        alert('Failed to update show.');
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    handler();
  }

  return { handleSubmit, loading };
}
