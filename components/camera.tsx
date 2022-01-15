import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export type CameraType = {
  id: string;
  timestamp: string;
  count: string;
  temperature: string;
};

type Props = {
  camera: CameraType;
};

export default function Camera(props: Props) {
  const { camera } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" component="div" gutterBottom>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            Camera #{camera.id}
          </div>
        </Typography>
        <Typography variant="h5" component="button">
          Timestamp = {camera.timestamp}
        </Typography>
        <Typography variant="h5">
          <div>Count = {camera.count}</div>
          <div>Last temperature = {camera.temperature} Celsius</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
