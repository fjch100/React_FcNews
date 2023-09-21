import { signIn, signout, getFirestoreData } from './firebase.js';
import { json } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const getCollection = async (collectiondb, id) => {
  try {
    await signIn();
    const fetchedData = await getFirestoreData(collectiondb, id);
    // console.log('fetchedData'.fetchedData);
    signout();
    const articles = fetchedData.articles.filter(
      (item) => item.content !== '[Removed]' && item.description !== '[Removed]'
    );
    // const articles = fetchedData.articles;

    return articles;
  } catch (err) {
    console.log('ERROR:'.err);
    throw json({
      error: {
        message: err.message
      }
    });
  }
};
