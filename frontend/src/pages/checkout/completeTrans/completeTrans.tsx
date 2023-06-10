import React from 'react';
import { Button, Container, Notification, Paper } from "@mantine/core";
import { IconCheck } from '@tabler/icons-react';

const CompletedTransactionPage = () => {
  const handleBackClick = () => {
    // Handle back button click here
  };

  return (
    <Container>
      <Paper shadow="md" radius="md" p="lg" style={{ width: '100%'}}>
        <h4 style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <IconCheck size="1.1rem" style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: 'green', strokeWidth: 2 }} />
          Completed Transaction
        </h4>
        <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Thank you for your purchase. The transaction has been successfully completed.
        </p>
        {/* <Button variant="contained" color="primary" fullWidth onClick={handleBackClick}>
          Back
        </Button> */}
      </Paper>
    </Container>
  );
};

export default CompletedTransactionPage;
