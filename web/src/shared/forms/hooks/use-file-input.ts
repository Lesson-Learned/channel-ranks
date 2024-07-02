import { useState } from 'react';

export function useFileInput() {
  const [error, setError] = useState('');
  const [file, setFile] = useState<File>();

  function isValid(): boolean {
    if (file) {
      return true;
    }

    setError('Please select a file.');
    return false;
  }

  function updateError(error: string) {
    setError(error);
  }

  function updateImage(file: File) {
    const extension = file.name.split('.').pop() ?? '';

    if (extension === 'jpeg' || extension === 'jpg' || extension === 'png') {
      setError('');
      setFile(file);
    } else {
      setError('Please select a jpeg, jpg, or png file.');
    }
  }

  return {
    error,
    file,
    isValid,
    setError: updateError,
    setImage: updateImage
  };
}
