import { updateShow } from '@api';
import { AdminRoutes, ymdToMilli } from '@shared';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowFormFields } from '../types/form';

export function useUpdateShow(showId: string, form: ShowFormFields) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    async function handler() {
      try {
        await updateShow(showId, {
          country: form.country,
          description: form.description,
          endDate: form.endDate ? ymdToMilli(form.endDate) : undefined,
          episodeCount: form.episodeCount,
          genre: form.genre,
          name: form.name,
          network: form.network,
          releaseDate: ymdToMilli(form.releaseDate),
          seasonCount: form.seasonCount
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
