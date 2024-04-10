import { callNotification } from './notification';
import copyToClipBoard from 'copy-to-clipboard';

export const copy = (value) => {
  const isCopied = copyToClipBoard(value);

  if (isCopied) {
    callNotification({ type: 'success', message: 'Copied' });
  } else {
    callNotification({ type: 'error', message: 'Something went wrong, try to copy manually' });
  }
};