import { Request, Response } from 'express';
import { clientFormError, validateString } from '../../shared';
import { createProfileDocument } from '../data-access/create-profile';
import { buildProfile, Profile } from '../models';

export async function createProfile(req: Request, res: Response) {
  const body = validateRequestBody(req.body);

  const profile = buildProfile(req.$uid, body.name);

  await createProfileDocument(profile);

  res.status(201).send(profile);
}

function validateRequestBody(body: any): Pick<Profile, 'name'> {
  const name = validateString(body.name).trim().required();

  if (name.value) {
    return { name: name.value };
  }

  throw clientFormError({ name: 'Please enter a name.' });
}
