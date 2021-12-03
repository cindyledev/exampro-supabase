import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { supabase } from '@/utils/supabaseClient';

import Layout from '@/components/Layout';
import AuthForm from '@/components/AuthForm';

export default function AuthPage() {
  const { user, session } = Auth.useUser();
  const { data, error } = useSWR(session ? ['/api/getUser', session.access_token] : null, fetcher);
  const [authView, setAuthView] = useState('sign_in');

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password');
      if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000);
      // Send session to /api/auth route to set the auth cookie.
      // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
      fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session }),
      }).then((res) => res.json());
    });

    return () => {
      authListener.unsubsribe();
    };
  }, []);

  return (
    <Layout>
      <AuthForm />
    </Layout>
  );
}
