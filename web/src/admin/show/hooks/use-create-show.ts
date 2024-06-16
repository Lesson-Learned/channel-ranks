import { createShow, readShowFilePaths } from '@api';
import { getAuthToken } from '@auth';
import { uploadFile } from '@cloud';
import { ymdToMilli } from '@shared';
import { useState } from 'react';
import { ShowFormFields } from '../types/form';

export function useCreateShow(form: ShowFormFields) {
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    async function handler() {
      try {
        validate();

        const show = await createShow(
          {
            country: form.country,
            description: form.description,
            endDate: form.endDate ? ymdToMilli(form.endDate) : undefined,
            episodeCount: form.episodeCount,
            genre: form.genre,
            name: form.name,
            network: form.network,
            releaseDate: ymdToMilli(form.releaseDate),
            seasonCount: form.seasonCount
          },
          await getAuthToken()
        );
        const filePaths = await readShowFilePaths(show._id);

        await Promise.all([
          uploadFile(form.banner!, filePaths.banner),
          uploadFile(form.poster!, filePaths.poster),
        ]);
      } catch {
        alert('Failed to create show.');
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    handler();
  }

  function validate() {
    if (!form.banner) {
      throw new Error('No banner');
    }

    if (!form.poster) {
      throw new Error('No poster');
    }
  }

  return { handleSubmit, loading };
}
