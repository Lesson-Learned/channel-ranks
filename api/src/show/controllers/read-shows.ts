import { Request, Response } from 'express';
import { convertToDocumentId } from '../../libraries';
import { Country, Genre, Network, Status } from '../../shared';
import { countShowDocuments } from '../data-access/count-show-documents';
import { readShowDocuments } from '../data-access/read-show-documents';
import { ShowDocumentQuery } from '../types';
import { buildClientShow } from '../utils/build-client-show';

export async function readShows(req: Request, res: Response) {
  const showDocumentQuery = buildShowDocumentQuery(req.query);

  const numberOfShowDocuments = await getNumberOfShowDocuments(
    showDocumentQuery
  );
  const showDocuments = await readShowDocuments(
    {
      limit: 10,
      query: showDocumentQuery
    }
  );

  const clientShows = await Promise.all(
    showDocuments.map(
      (showDocument) => buildClientShow(showDocument/*, { poster: true }*/)
    )
  );

  res.status(200).send({
    numberOfShows: numberOfShowDocuments,
    shows: clientShows
  });
}

function buildShowDocumentQuery(
  requestQuery: Request['query']
): ShowDocumentQuery {
  const showDocumentQuery: ShowDocumentQuery = {};

  const country = requestQuery.country;
  const genre = requestQuery.genre;
  const lastId = requestQuery.lastId;
  const network = requestQuery.network;
  const status = requestQuery.status;

  if (typeof country === 'string') {
    showDocumentQuery.country = country as Country;
  }

  if (typeof genre === 'string') {
    showDocumentQuery.genre = genre as Genre;
  }

  if (typeof lastId === 'string') {
    showDocumentQuery._id = { $gt: convertToDocumentId(lastId) };
  }

  if (typeof network === 'string') {
    showDocumentQuery.network = network as Network;
  }

  if (typeof status === 'string') {
    showDocumentQuery.status = status as Status;
  }

  return showDocumentQuery;
}

function getNumberOfShowDocuments(
  showDocumentQuery: ShowDocumentQuery
): Promise<number | void> {
  if (showDocumentQuery._id) {
    return Promise.resolve();
  }

  return countShowDocuments(showDocumentQuery);
}
