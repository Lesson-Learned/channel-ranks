import { readShows, ReadShowsQuery, ReadShowsResponse, Show } from '@api';
import { Filters, useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useShows(filters: Filters) {
  const [numberOfShows, setNumberOfShows] = useState(0);
  const [shows, setShows] = useState<Show[]>([]);

  const status = useStatus('loading');

  function getNextShows() {
    status.setLoading();

    (async function() {
      const lastId = shows[shows.length - 1]._id;
      const apiQuery = buildApiQuery(filters, lastId);

      const data = await readShows(apiQuery);

      setShows(shows => [ ...shows, ...data.shows ]);

      cache[filters.queryString].shows.push(...data.shows);
      status.clear();
    })()
    .catch(alert);
  }

  useEffect(() => {
    if (cache[filters.queryString]) {
      setNumberOfShows(cache[filters.queryString].numberOfShows);
      setShows(cache[filters.queryString].shows);
      status.clear();
    } else {
      status.setLoading();
      
      (async function() {
        const apiQuery = buildApiQuery(filters);
    
        const data = await readShows(apiQuery);
    
        setNumberOfShows(data.numberOfShows);
        setShows([ ...data.shows ]);

        cache[filters.queryString] = {
          numberOfShows: data.numberOfShows,
          shows: data.shows
        };
    
        status.clear();
      })()
      .catch(alert);
    }
  }, [filters.queryString]);

  return {
    error: status.error,
    getNextShows,
    loading: status.loading,
    numberOfShows,
    shows
  };
}

function buildApiQuery(
  filters: Filters,
  lastId?: string | undefined
): ReadShowsQuery {
  const query: ReadShowsQuery = {};

  if (filters.country) {
    query.country = filters.country;
  }

  if (filters.genre) {
    query.genre = filters.genre;
  }

  if (filters.network) {
    query.network = filters.network;
  }

  if (filters.status) {
    query.status = filters.status;
  }

  if (lastId) {
    query.lastId = lastId;
  }

  return query;
}

const cache: Record<string, ReadShowsResponse> = {};
