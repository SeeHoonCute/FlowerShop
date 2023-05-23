import React, { useState } from 'react';
import { Input, Paper, Button } from '@mantine/core';
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';

function QuantityBox(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrease = (): void => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
        style={{ width: 40, marginRight: 5, borderRadius: '4px', textAlign: 'center' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          size="xs"
          style={{
            background: 'transparent',
            color: '#555',
            border: 'none',
            padding: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onClick={handleIncrease}
          onMouseEnter={(event) => (event.target as HTMLButtonElement).style.backgroundColor = '#eee'}
          onMouseLeave={(event) => (event.target as HTMLButtonElement).style.backgroundColor = 'transparent'}
          leftIcon={<IconChevronUp size={18} />}
        />
        <Button
          size="xs"
          style={{
            background: 'transparent',
            color: '#555',
            border: 'none',
            padding: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onClick={handleDecrease}
          onMouseEnter={(event) => (event.target as HTMLButtonElement).style.backgroundColor = '#eee'}
          onMouseLeave={(event) => (event.target as HTMLButtonElement).style.backgroundColor = 'transparent'}
          leftIcon={<IconChevronDown size={18} />}
        />
      </div>
    </div>
  );
}

export default QuantityBox;
