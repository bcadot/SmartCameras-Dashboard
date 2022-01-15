import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import CameraList from '../components/camera-list';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getData = async () => {
  const response = await fetch('http://localhost:8080/cameras');
  return await response.json();
};

const Home: NextPage = () => {
  const { data } = useSWR('http://localhost:8080/cameras', getData);
  console.log(data);

  return (
    <div>
      <Head>
        <title>Smart cameras dashboard</title>
        <meta
          name="description"
          content="Dashboard for the smart cameras project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom={true}
            align={'center'}
          >
            Smart cameras dashboard
          </Typography>
          <CameraList cameras={data} />
        </Container>
      </main>
    </div>
  );
};

export default Home;
