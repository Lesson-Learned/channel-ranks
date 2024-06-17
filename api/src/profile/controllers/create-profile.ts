import { Request, Response } from 'express';
import { formError, validateObject, validateString } from '../../shared';
import { createProfileDocument } from '../data-access/create-profile';
import { buildProfile, Profile } from '../models';

export async function createProfile(req: Request, res: Response) {
  const body = validateBody(req.body);

  const profile = buildProfile(req.$uid, body.name);

  await createProfileDocument(profile);

  res.status(201).send(profile);
}

function validateBody(requestBody: unknown): Pick<Profile, 'name'> {
  const cleanBody = validateObject(requestBody).valueOrThrow(
    'Request body is an invalid object.'
  );

  if ('name' in cleanBody) {
    const name = validateString(cleanBody.name).trim().required();

    if (name.value) {
      return { name: name.value };
    }

    throw formError({ name: 'Please enter a name.' });
  }

  throw 'Request body missing [name] property.';
}
