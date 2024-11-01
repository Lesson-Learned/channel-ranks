import {
  addShowToProfile,
  ProfileShow,
  readProfileShow,
  removeShowFromProfile
} from '@api';
import { getAuthToken } from '@auth';
import { useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useProfileShow(showId: string) {
  const [profileShow, setProfileShow] = useState<ProfileShow | null>(null);

  const status = useStatus('loading');

  function addShow() {
    status.setLoading();

    (async function() {
      const token = await getAuthToken();

      await addShowToProfile(showId, token);

      const profileShow: ProfileShow = {
        _id: showId,
        status: 'planToWatch'
      };

      setProfileShow(profileShow);
      cache[showId] = profileShow;

      status.clear();
    })()
    .catch((e) => {
      console.log('[ADD SHOW] error', e);
      status.setError();
    });
  }

  function removeShow() {
    status.setLoading();

    (async function() {
      const token = await getAuthToken();

      await removeShowFromProfile(showId, token);

      setProfileShow(null);
      cache[showId] = null;
      status.clear();
    })()
    .catch((e) => {
      console.log('[REMOVE SHOW] error', e);
      status.setError();
    });
  }

  useEffect(() => {
    if (cache[showId]) {
      setProfileShow(cache[showId]);
      status.clear();
    } else {
      (async function() {
        const token = await getAuthToken();
        const { profileShow } = await readProfileShow(showId, token);

        setProfileShow(profileShow);
        cache[showId] = profileShow;

        status.clear();
      })()
      .catch((e) => {
        console.log('[USE PROFILE SHOW] error', e);
        status.setError();
      });
    }
  }, [showId]);

  return {
    addShow,
    error: status.error,
    loading: status.loading,
    profileShow,
    removeShow
  };
}

const cache: Record<string, ProfileShow | null> = {};
