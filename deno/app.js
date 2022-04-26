import { serve } from 'https://deno.land/std@0.136.0/http/server.ts';

console.log('http://localhost:8000/');

serve(
  (req) => {
    console.log('Request came ', req.url);

    return new Response('Hello World\n');
  },
  { port: 8000 }
);
