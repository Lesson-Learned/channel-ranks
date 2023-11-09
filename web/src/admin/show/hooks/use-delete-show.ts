import { deleteShow } from '@api';
import { AdminRoutes } from '@shared';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useDeleteShow(showId: string) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function confirmDelete() {
    const confirmed = confirm('Are you sure you want to delete this show?');

    if (confirmed) {
      setLoading(true);
      del();
    }
  }

  async function del() {
    try {
      await deleteShow(showId);

      navigate(AdminRoutes.Shows);
    } catch {
      alert('Failed to delete show.');
    } finally {
      setLoading(false);
    }
  }

  return { confirmDelete, loading };
}
