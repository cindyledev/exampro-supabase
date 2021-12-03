import { Auth } from '@supabase/ui';
import { supabase } from '../utils/supabaseClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  );
}

export default MyApp;
