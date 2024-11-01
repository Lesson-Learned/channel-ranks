import { SEED } from '../../config';

export function hashString(key: string): number {
  const c1 = 0xcc9e2d51;
  const c2 = 0x1b873593;
  const remainder = key.length & 3;
  const bytes = key.length - remainder;

	let seed = Number(SEED);
  let i = 0;
	let h1b, k1;
	
	while (i < bytes) {
	  k1 = 
	  	((key.charCodeAt(i) & 0xff)) |
	  	((key.charCodeAt(++i) & 0xff) << 8) |
	  	((key.charCodeAt(++i) & 0xff) << 16) |
	  	((key.charCodeAt(++i) & 0xff) << 24);
		++i;
		
		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)))
      & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)))
      & 0xffffffff;

		seed ^= k1;
    seed = (seed << 13) | (seed >>> 19);
		h1b = ((((seed & 0xffff) * 5) + ((((seed >>> 16) * 5) & 0xffff) << 16)))
      & 0xffffffff;
		seed = (
      ((h1b & 0xffff) + 0x6b64) +
      ((((h1b >>> 16) + 0xe654) & 0xffff) << 16)
    );
	}
	
	k1 = 0;
	
	switch (remainder) {
		case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (key.charCodeAt(i) & 0xff);
		
		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))
      & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))
      & 0xffffffff;
		seed ^= k1;
	}
	
	seed ^= key.length;

	seed ^= seed >>> 16;
	seed = (
    ((seed & 0xffff) * 0x85ebca6b) +
    ((((seed >>> 16) * 0x85ebca6b) & 0xffff) << 16)
  ) & 0xffffffff;
	seed ^= seed >>> 13;
	seed = ((
    ((seed & 0xffff) * 0xc2b2ae35) +
    ((((seed >>> 16) * 0xc2b2ae35) & 0xffff) << 16)
  )) & 0xffffffff;
	seed ^= seed >>> 16;

	return seed >>> 0;
}
